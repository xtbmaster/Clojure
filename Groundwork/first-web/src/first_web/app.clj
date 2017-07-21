
(ns first-web.app
  (:use (compojure handler
                   [core :only (GET POST defroutes)]))
  (:require compojure.route
   [net.cgrand.enlive-html :as en]
            [ring.util.response :as response]
            [ring.adapter.jetty :as jetty]))

(defonce counter (atom 10000))

(defonce links (atom {}))

(defn shorten
  [url]
  (let [id (swap! counter inc)
        id (Long/toString id 36)]
    (swap! links assoc id url)
    id))

(en/deftemplate homepage
  (en/xml-resource "homepage.html")
  [request]
  [:#listing :li] (en/clone-for [[id url] @links]
                                [:a] (comp
                                      (en/content (format "%s : %s" id url))
                                      (en/set-attr :href (str \/ id))))) ;;keyword id

(defn redirect
  [id]
  (response/redirect (@links id)))

(defroutes app*
  (compojure.route/resources "/")
  (GET "/" request (homepage request))
  (POST "/shorten" request
        (let [id (shorten (-> request :params
                              :url))]
          (response/redirect "/")))
  (GET "/:id" [id] (redirect id)))
;; (GET "/:id/:log" [id log] (redirect id))

(def app (compojure.handler/site app*))

