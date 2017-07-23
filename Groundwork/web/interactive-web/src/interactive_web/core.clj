(ns interactive-web.core
  (:require [compojure.core :refer :all]
            [hiccup.core :as hc]
            [org.httpkit.server :as ohs]
            [compojure.handler :as handler]
            [compojure.route :as route]))

(use 'lucid.package)

(pull '[http-kit "2.2.0"])
(pull '[hiccup "1.0.5"])

(defn layout [title & content]
  (hc/html
   [:html
    [:head
     [:title title]]
    [:body content]]))

(defn index [req]
  {:body (layout "index" [:h1 "hello"])
   :status 200})

(defroutes app-routes
    (GET "/" [] #'index)
    (route/resources "/")
    (route/not-found "Not Found"))

#_(def stop
  ;;link to a var of a function...to be able to overload
  ;;the function separately
  (ohs/run-server #'app {:port 8090}))

(def app
  (handler/site app-routes))

