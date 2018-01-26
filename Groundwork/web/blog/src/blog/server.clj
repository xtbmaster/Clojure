(ns blog.server
  (:require
   [rum.core :as rum]
   [immutant.web :as web]
   [compojure.core :as cj]
   [compojure.route :as cjr]
   ))

(def posts
  [{:id "123"
     :created #inst "2018-01-26"
     :author "aaliiev"
     :body "As any other company, Wix started out small. One development team, one product, one code repository. As Wix started to grow with more development teams, GitHub seemed to be a right fit for us, as our version control service. Soon after, new problems started to arise and everything went out of order. To properly manage the chaos, new rules were formed, but it was not enough. Human factors errors remained to be an issue and the biggest source of security risks — this is where the story of Automation GitHub Services begins."}
    {:id "456"
      :created #inst "2018-01-25"
      :author "arhur"
      :body "The goal of this article is to provide a fairly comprehensive introduction to the Clojure programming language. A large number of features are covered, each in a fairly brief manner. Feel free to skip around to the sections of most interest. The section names in the table of contents are hyperlinks to make this easier when reading on-line.

"}])

(rum/defc post [post]
  [:.post
    [:.post_sidebar
      [:img.avatar {:src (str "/i/" (:author post) ".jpg")}]]
    [:div
      [:p [:span.author (:author post) ": "] (:body post)]
      [:p.meta (:created post) "//" [:a {:href (str "/post/" (:id post))} "Link"]]]])

(rum/defc index [posts]
  [:html
    [:body
      (for [p posts]
        (post p))]])

(cj/defroutes routes
  (cj/GET "/" [:as req]
    {:body (rum/render-static-markup (index posts)) })
  (cj/GET "/write" [:as req]
    {:body "WRITE"})
  (cj/POST "/write" [:as req]
    {:body "POST"}))

(def app routes)

(defn -main [& args]
  (let [args-map (apply array-map args)
        port-str (or (get args-map "-p")
                     (get args-map "--port")
                     "8080")]
    (web/run #'app {:port (Integer/parseInt port-str)})))

(comment
  (def server (-main "--port" "8080"))
  (web/stop server))
