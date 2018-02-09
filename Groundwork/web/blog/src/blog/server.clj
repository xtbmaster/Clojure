(ns blog.server
  (:require
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [compojure.core :as compojure]
   [compojure.route]
   [immutant.web :as web]
   [rum.core :as rum]
   [ring.util.response])
  (:import
   [org.joda.time DateTime]
   [org.joda.time.format DateTimeFormat])
  (:gen-class))

(def post-ids ["123" "456"])

(def styles (slurp (io/resource "style.css")))
(def script (slurp (io/resource "script.js")))

(def date-formatter (DateTimeFormat/forPattern "dd.MM.YYYY"))

(defn render-date [inst]
  (.print date-formatter (DateTime. inst)))

(rum/defc post [post]
  [:.post
   [:.post_sidebar
    [:img.avatar {:src (str "/i/" (:author post) ".gif")}]]
   [:div
    (for [name (:pictures post)]
      [:img {:src (str "/post/" (:id post) "/" name)}])
    [:p [:span.author (:author post) ": "] (:body post)]
    [:p.meta (render-date (:created post)) " // " [:a {:href (str "/post/" (:id post))} "Link"]]]])

(rum/defc page [title & children]
  [:html
   [:head
    [:meta {:http-equiv "Content-type" :content "text/html; charset=UTF-8"}]
    [:title title]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
    [:style {:dangerouslySetInnerHTML {:__html styles}}]]
   [:body
    [:header
     [:h1 "Стая"]
     [:p#site_subtitle "This is a link."]]
    children
    [:footer
     [:a {:href "https://github.com/xtbmaster"} "Arthur Aliiev"]
     ". 2018. All rights aren't reserved."
     [:br]
     [:a {:href "/feed" :rel "alternate" :type "application/rss+xml"} "RSS"]]

    [:script {:dangerouslySetInnerHTML {:__html script}}]]])

(defn get-post [post-id]
  (let [path (str "posts/" post-id "/post.edn")]
    (-> (io/file path)
        (slurp)
        (edn/read-string))))

(rum/defc index-page [post-ids]
  (page "Стая"
        (for [post-id post-ids]
          (post (get-post post-id)))))

(rum/defc post-page [post-id]
  (page "Стая"
        (post (get-post post-id))))

(defn render-html [component]
  (str "<!DOCTYPE html>\n" (rum/render-static-markup component)))

(defn post-ids []
  (for [name (seq (.list (io/file "posts")))
        :let [child (io/file "posts" name)]
        :when (.isDirectory child)]
    name))

(compojure/defroutes routes
  (compojure.route/resources "/i" {:root "public/i"})

  (compojure/GET "/" []
    {:body (render-html (index-page (post-ids)))})

  (compojure/GET "/post/:id/:img" [id img]
    (ring.util.response/file-response (str "posts/" id "/" img)))

  (compojure/GET "/post/:id/" [post-id]
    {:body (render-html (post-page post-id))} (compojure/GET "/write" []
                                                {:body "WRITE"})

    (compojure/POST "/write" [:as req]
      {:body "POST"})

    (fn [req]
      {:status 404
       :body "404 Page Not Found"})))

(defn with-headers [handler headers]
  (fn [request]
    (some-> (handler request)
            (update :headers merge headers))))

(def app
  (-> routes
      (with-headers {"Content-Type" "text/html; charset=utf-8"
                     "Cache-control" "no-cache"
                     "Expires" "-1"})))

(defn -main [& args]
  (let [args-map (apply array-map args)
        port-str (or (get args-map "-p")
                     (get args-map "--port")
                     "8080")]
    (println "Starting server on port" port-str)
    (web/run #'app {:port (Integer/parseInt port-str)})))

(comment
  (def server (-main "--port" "8080"))
  (web/stop server))
