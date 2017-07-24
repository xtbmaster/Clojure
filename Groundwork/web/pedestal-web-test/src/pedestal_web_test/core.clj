(ns pedestal-web-test.core
  (:require [io.pedestal.http :as http]))

(defn respond-hello [request]
  {:status 200
   :body "Hello World!"})

(def routes
  #{["/greet" :get `respond-hello]})

(defn start []
  (-> {::http/routes routes
       ::http/port 8090
       ::http/type :jetty}
      http/create-server
      http/start))

(start)

(apply)


