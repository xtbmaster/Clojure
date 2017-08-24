(ns json-web-test.core
  (:use compojure.core
        ring.middleware.json
        ring.util.response)
  (:require [compojure.route :as route]
            [json-web-test.view :as view]))

(defn f [x] (str "Hello, " x))

(defroutes my_routes
  (GET "/" [] (view/index-page))
  (GET "/rest" [] (response {:email "email@email.com"}))
  (route/resources "/"))

(def app (wrap-json-response my_routes))

;; lein ring server 3000

