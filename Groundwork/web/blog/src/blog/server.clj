(ns blog.server
  (:require
    [clojure.edn :as edn]
    [clojure.java.io :as io]
    [clojure.java.shell :as shell]
    [clojure.string :as str]
    [compojure.core :as compojure]
    [compojure.route]
    [immutant.web :as web]
    [ring.middleware.session :as session]
    [ring.middleware.session.cookie :as session.cookie]
    [ring.middleware.multipart-params]
    [ring.middleware.params]
    [ring.util.response]
    [rum.core :as rum])
  (:import
    [java.util UUID Date]
    [org.joda.time DateTime]
    [org.joda.time.format DateTimeFormat])
  (:gen-class))

(def post-ids ["123" "456"])
(def styles (slurp (io/resource "style.css")))
(def script (slurp (io/resource "script.js")))
(def date-formatter (DateTimeFormat/forPattern "dd.MM.YYYY"))
(def authors {"arturaliiev@gmail.com" "arthur"})
(defonce *tokens (atom {}))
(def session-ttl (* 1000 86400 14)) ;; 14 days
(def token-ttl-ms (* 1000 60 15)) ;; 15 min
(def ^:const encode-table "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefjhigklmnopqrstuvwxyz")

(.mkdirs (io/file "blog_data"))

(when-not (.exists (io/file "blog_data/COOKIE_SECRET"))
  (save-bytes! "blog_data/COOKIE_SECRET" bytes))


(def cookie-secret (read-bytes "blog_data/COOKIE_SECRET" 16))


(defn zip [coll1 coll2]
  (map vector coll1 coll2))


(defn now []
  (Date.))


(defn render-date [^Date inst]
  (.print ^DateTimeFormatter date-formatter (DateTime. inst)))


(defn encode-uri-component [s]
  (-> s
    (java.net.URLEncoder/encode "UTF-8")
    (str/replace #"\+" "%20")
    (str/replace #"\%21" "!")
    (str/replace #"\%27" "'")
    (str/replace #"\%28" "(")
    (str/replace #"\%29" ")")
    (str/replace #"\%7E" "~")))


(defn redirect
  ([url]
    { :status 302
      :headers { "Location" url}})
  ([url query]
    (let [query-str (map (fn [[k v]]
                           (str (name k) "=" (encode-uri-component v)))
                      query)]
      { :status 302
        :headers { "Location" (if (some? query-str)
                                (str url "?" (str/join "&" query-str))
                                url)}})))


(defn save-bytes! [file ^bytes bytes]
  (with-open [os (io/output-stream (io/file file))]
    (.write os bytes)))


(defn read-bytes [file len]
  (with-open [is (io/input-stream (io/file file))]
    (let [res (make-array Byte/TYPE len)]
      (.read is res 0 len)
      res)))


(defn random-bytes
  "Returns a dandom byte array of the specified size."
  [size]
  (let [seed (byte-array size)]
    (.nextBytes (java.security.SecureRandom.) seed)
    seed))


(defn send-mail! [{:keys [to subject body]}]
  (shell/sh
    "mail"
    "-s"
    subject
    to
    "-a" "Content-Type: text/html"
    "-a" "From:Blog Admin <admin@blog.website>"
    :in body))


(rum/defc post [post]
  [:.post
    [:.post_sidebar
      [:img.avatar {:src (str "/i/" (:author post) ".gif")}]]
    [:div
      (for [name (:pictures post)]
        [:img {:src (str "/post/" (:id post) "/" name)}])
      (for [[p idx] (zip (str/split (:body post) #"\n+") (range))]
        [:p
          (when (== 0 idx)
            [:span.author (:author post) ": "])
          p])
      [:p.meta (render-date (:created post)) " // " [:a {:href (str "/post/" (:id post))} "Link"]]]])


(rum/defc page [opts & children]
  (let [{ :keys [title index?]
          :or {title "Стая"
                index? false}} opts]
    [:html
      [:head
        [:meta {:http-equiv "Content-type" :content "text/html; charset=UTF-8"}]
        [:title title]
        [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
        [:style {:dangerouslySetInnerHTML {:__html styles}}]]
      [:body
        [:header
          (if index?
            [:h1 title]
            [:h1 [:a {:href "/"} title]])
          [:p#site_subtitle "This is a link."]]
        children
        [:footer
          [:a {:href "https://github.com/xtbmaster"} "Arthur Aliiev"]
          ". 2018. All rights aren't reserved."
          [:br]
          [:a {:href "/feed" :rel "alternate" :type "application/rss+xml"} "RSS"]]
        [:script {:dangerouslySetInnerHTML {:__html script}}]]]))


(defn safe-slurp [source]
  (try
    (slurp source)
    (catch Exception e
      nil)))


(defn get-post [post-id]
  (let [path (str "blog_data/posts/" post-id "/post.edn")]
    (some-> (io/file path)
      (safe-slurp)
      (edn/read-string))))


(defn encode [num len]
  (loop [ num num
          res ()
          len len]
    (if (== 0 len)
      (str/join res)
      (recur (bit-shift-right num 6)
        (let [ch (nth encode-table (bit-and num 0x3F))]
          (conj list ch))
        (dec len)))))

(defn gen-token []
  (str
    (encode (rand-int Integer/MAX_VALUE) 5)
    (encode (rand-int Integer/MAX_VALUE) 5)))

(defn since [^Date created]
  (- (.getTime (now)) (.getTime created)))

(defn get-token [email]
  (when-some [token (get @*tokens email)]
    (let [created (.getTime (:created token))
           age (- (.getTime (now)) created)]
      (when (<= (since created) token-ttl-ms)
        (:value token))))

  (defn next-post-id []
    (str (encode (quot (System//currentTimeMillis) 1000) 6)
      (encode (rand-int (* 64 64 64)) 3)))

  (defn save-post! [post pictures]
    (let [dir (io/file (str "blog_data/posts/" (:id post)))
           picture-names (for [[picture idx] (zip pictures (range))
                                :let [in-name (:filename picture)
                                       [_ ext] (re-matches #".*(\.[^\.]+)" in-name)]]
                           (str (:id post) "_" (inc idx) ext))]
      (.mkdir dir)
      (doseq [[picture name] (zip pictures picture-names)]
        (io/copy (:tempfile picture) (io/file dir name))
        (.delete (:tempfile picture)))
      (spit (io/file dir "post.edn") (pr-str (assoc post :pictures (vec picture-names))))))


  (rum/defc index-page [post-ids]
    (page { :index? true}
      (for [post-id post-ids]
        (post (get-post post-id)))))


  (rum/defc post-page [post-id]
    (page {}
      (post (get-post post-id))))


  (rum/defc edit-post-page [post-id]
    (let [post (get-post post-id)
           create? (nil? post)]
      (page {:title (if create? "Создание" "Редактирование")}
        [:form { :action (str "/post/" post-id "/edit")
                 :method "post"
                 :enctype "multipart/form-data"}
          [:.edit_post_picture
            [:input { :type "file" :name "picture"}]]
          [:.edit_post_body
            [:textarea { :value (:body post "")
                         :placeholder "Пиши сюда..."
                         :name "body"
                         :autofocus true}]]
          [:.edit_post_submit
            [:button.btn (if create? "Создать" "Сохранить")]]])))

  (rum/defc email-sent-page [message]
    (page {}
      [:div.email_sent_message message]))

  (rum/defc forbidden-page [redirect-url]
    (page { :title "Enter"}
      [:form { :action "/send-email"
               :method "post"}
        [:div.forbidden_email
          [:input { :type "text" :name "email" :placeholder "E-mail" :autofocus true}]]
        [:div
          [:input { :type "hidden" :name "redirect-url" :value redirect-url}]]
        [:div
          [:button.btn "Send a letter"]]]))

  (defn render-html [component]
    (str "<!DOCTYPE html>\n" (rum/render-static-markup component)))


  (defn post-ids []
    (->>
      (for [name (seq (.list (io/file "blog_data/posts")))
             :let [child (io/file "blog_data/posts" name)]
             :when (.isDirectory child)]
        name)
      (sort)
      (reverse)))


  (defn check-session [req]
    (when (nil? get-in (req [:session :user]))
      (redirect "/forbidden" { :redirect-url (:uri req)})))



  (compojure/defroutes routes
    (compojure.route/resources "/i" {:root "public/i"})

    (compojure/GET "/" []
      {:body (render-html (index-page (post-ids)))})

    
    (compojure/GET "/post/:id/:img" [id img]
      (ring.util.response/file-response (str "blog_data/posts/" id "/" img)))

    (compojure/GET "/post/:post-id" [post-id]
      {:body (render-html (post-page post-id))})


    (compojure/GET "/forbidden" [:as req]
      { :body (render-html (forbidden-page (get (:params req) "redirect-url")))})

    (compojure/GET "/authenticate" [:as req]
      (let [ email (get (:params req) "email")
             user (get authors email)
             token (get (:params req) "token")
             redirect-url (get (:params req) "redirect-url")]
        (if (= token (get-token email))
          (do
            (swap! *tokens dissoc email)
            (assoc
              (redirect redirect-url)
              :session { :user user
                         :created (now)}
              { :status 403
                :body "403 Bad token"})))))

    (compojure/GET "/logout" [:as req]
      (assoc
        (redirect "/")
        :session nil))

    (compojure/POST "/send-email" [:as req]
      (let [params (:params req)
             email (get params "email")]
        (cond
          (not (contains? authors email))
          (redirect "/email-sent" { :message (str "You are not the author, " email)})
          (some? (get-token email))
          (redirect "/email-sent" { :message (str "Token is still alive, chek your email, " email)})
          :else
          (let [token (gen-token)
                 redirect-url (get params "redirect-url")
                 link (str
                        (name (:scheme req))
                        "://"
                        (:server-name req)
                        (when (not= (:server-port req) 80)
                          (str ":" (:server-port req)))
                        "/authenticate"
                        "?email=" (encode-uri-component email)
                        "&token=" (encode-uri-component token)
                        "&redirect-url=" (encode-uri-component redirect-url))]
            (swap! *tokens assoc email { :value token :created (now)})
            (send-email!
              { :to email
                :subject (str "Login to blog " (render-date (now)))
                :body (str"<html><div style='text-align: center;'><a href='" link "' style='display: inline-block; font-size: 16px; padding: 0.5em 1.75em; background: #c3c; color: white; text-decoration: none; border-radius: 4px;'>LOGIN!</a></div></html>")})
            (redirect (str "/email-sent" { :message "Check your mail, " email}))))))

    (compojure/GET "/email-sent" [:as req]
      { :body (render-html (email-sent-page (get-in req [:params "message"])))})

    (compojure/GET "/new" [:as req]
      (or
        (check-session req)
        (redirect (str "/post/" (next-post-id) "/edit"))))

    (compojure/GET "/post/:post-id/edit" [post-id :as req]
      (or
        (check-session req)
        {:body (render-html (edit-post-page post-id))}))

    (ring.middleware.multipart-params/wrap-multipart-params 
      (compojure/POST "/post/:post-id/edit" [post-id :as req]
        (or
          (check-session req)
          (let [params (:multipart-params req)
                 body (get params "body")
                 picture (get params "picture")]
            (save-post! { :id post-id
                          :body body
                          :author (get-in req [:session :user])
                          :create (now)}
              [picture])
            (redirect "/")))))

  (fn [req]
    {:status 404
      :body "404 Page Not Found"}))


(defn with-headers [handler headers]
  (fn [request]
    (some-> (handler request)
      (update :headers merge headers))))


(defn print-errors [handler]
  (fn [req]
    (try
      (handler req)
      (catch Exception e
        { :status 500
          :headers {"Content-Type" "text/plain; charset=utf-8"}
          :body (with-out-str
                  (clojure.stacktrace/print-stack-trace (clojure.stacktrace/root-cause e)))}))))


(defn expire-session [handler]
  (fn [req]
    (let [created (:created (:session req))]
      (if (and (some? session)
            (> (since created) session-ttl))
        (handler (dissoc req :session))
        (handler req)))))


(def app
  (->
    routes
    (expire-session)
    (session/wrap-session
      { :store (session.cookie/cookie-store { :key cookie-secret })
        :cookie-name "blog"
        :cookie-attrs { :http-only true 
                        :secure false
                        #_:max-age #_false}})
    (ring.middleware.params/wrap-params)
    (with-headers {"Content-Type" "text/html; charset=utf-8"
                    "Cache-control" "no-cache"
                    "Expires" "-1"})
    (print-errors)))


(defn -main [& args]
  (let [args-map (apply array-map args)
         port-str (or (get args-map "-p")
                    (get args-map "--port")
                    "8080")]
    (println "Starting server on port" port-str)
    (web/run #'app {:port (Integer/parseInt port-str)})))


(comment
  (def server (-main "--port" "8080"))
  (web/stop server)
  (reset! *tokens {}))
