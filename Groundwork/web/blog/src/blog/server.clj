(ns blog.server
  (:require
   [rum.core :as rum]
   [immutant.web :as web]
   [compojure.core :as cj]
   [compojure.route :as cjr]
   [clojure.java.io :as io]
   [clojure.edn :as edn]
   [ring.util.response]
   )
  (:import
    [org.joda.time DateTime]
    [org.joda.time.format DateTimeFormat]))

(def post-ids ["123" "456"])

(def styles (slurp (io/resource "style.css")))

(def date-formatter (DateTimeFormat/forPattern "dd.MM.YYYY"))

(defn render-date [inst]
  (.print date-formatter (DateTime. inst)))

(rum/defc post [post]
  [:.post
    [:.post_sidebar
      [:img.avatar {:src (str "/i/" (:author post) ".gif")}]]
    [:div
      (for [name (:pictures post)]
        [:img {:src (str "/post" (:id post) "/" name)}])
      [:p [:span.author (:author post) ": "] (:body post)]
      [:p.meta (render-date (:created post)) " // " [:a {:href (str "/post/" (:id post))} "Link"]]]])

(rum/defc page [title & children]
  [:html
    [:head
      [:meta {:http-equiv "Content-type" :content "text/html; charset=UTF-8"}]
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

        [:script {:dangerouslySetInnerHTML {:__html
          "window.onload = function(){
                                      reloadSubtitle();
                                      document.getElementById('site_subtitle').onclick = reloadSubtitle;

                                      }
          function reloadSubtitle(){
                                     var subtitles = [
                                                       'Вы уверены что хотите отменить? - Да / Нет / Отмена',
                                                       'Произошла ошибка',
                                                       'Привет!'
                                                       ];
                                     var subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
                                     var div = document.getElementById('site_subtitle');
                                     div.innerHTML = subtitle;
                                     }"}}

          ]]])

(rum/defc index [post-ids]
  (page "Стая"
      (for [post-id post-ids
             :let [path (str "posts/" post-id "post.edn")
                    p (-> (io/file path)
                        (slurp)
                        (edn/read-string))]]
        (post p))))

(defn render-html [component]
  (str "<!DOCTYPE html>\n" (rum/render-static-markup component)))

(cj/defroutes routes
  (cjr/resources "/i" {:root "public/i" })
  (cj/GET "/" [:as req]
    {:body (render-html (index post-ids)) })
  (cj/GET "/post/:id/:img" [id img]
    (ring.util.response/file-response (str "posts/" id "/" img)))
  (cj/GET "/write" [:as req]
    {:body "WRITE"})
  (cj/POST "/write" [:as req]
    {:body "POST"}))

(defn with-headers [handler headers]
  (fn [request]
    (some-> (handler request)
      (update :headers merge headers))))

(def app
  (-> routes
    (with-headers { "Content-Type" "text/html; charset=utf-8"
                    "Cache-control" "no-cache"
                    "Expires" "-1"})))

(defn -main [& args]
  (let [args-map (apply array-map args)
        port-str (or (get args-map "-p")
                     (get args-map "--port")
                     "8080")]
    (web/run #'app {:port (Integer/parseInt port-str)})))

(comment
  (def server (-main "--port" "8080"))
  (web/stop server))
