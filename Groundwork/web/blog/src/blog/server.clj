(ns blog.server
  (:require
   [rum.core :as rum]
   [immutant.web :as web]
   [compojure.core :as cj]
   [compojure.route :as cjr]
   )
  (:import
    [org.joda.time DateTime]
    [org.joda.time.format DateTimeFormat]))

(def posts
  [{:id "123"
     :created #inst "2018-01-26"
     :author "arthur"
     :body "As any other company, Wix started out small. One development team, one product, one code repository. As Wix started to grow with more development teams, GitHub seemed to be a right fit for us, as our version control service. Soon after, new problems started to arise and everything went out of order. To properly manage the chaos, new rules were formed, but it was not enough. Human factors errors remained to be an issue and the biggest source of security risks — this is where the story of Automation GitHub Services begins."
     :pictures ["rab.gif"]}
    {:id "456"
      :created #inst "2018-01-25"
      :author "arthur"
      :body "The goal of this article is to provide a fairly comprehensive introduction to the Clojure programming language. A large number of features are covered, each in a fairly brief manner. Feel free to skip around to the sections of most interest. The section names in the table of contents are hyperlinks to make this easier when reading on-line."
      :pictures ["rab.gif"]}])

(def styles
  "body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-heigh: 140%;
  padding: 0.25em 1em;
  max-width: 640px;
  margin: 0 auto;
  }

  img {
  max-width: 100%;
  height:auto;
  }

  hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 2em;
  }

  header {
  margin-bottom: 2em;
  }

  header h1{
  margin-bottom: 0;
  }

  header p{
  margin-left: 0.09em;
  }

  .post{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4em;
  }

  .post_sidebar {
  text-align: center;
  margin-right: 20px;
  min-width: 50px;
  }

  .post_sidebar a:visited {
  color: blue;
  }

  img.avatar {
  border-radius: 100%;
  width: 50px;
  heigh: 50px;
  }

  .meta{
  font-size: bold;
  }

  .author{
  font-weight: bold;
  }

  footer{
  padding-top: 1em;
  margin-top: 1em;
  border-top: 1px dotted black;
  }")

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

(rum/defc index [posts]
  (page "Стая"
      (for [p posts]
        (post p))))

(defn render-html [component]
  (str "<!DOCTYPE html>\n" (rum/render-static-markup component)))

(cj/defroutes routes
  (cjr/resources "/i" {:root "public/i" })
  (cj/GET "/" [:as req]
    {:body (render-html (index posts)) })
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
