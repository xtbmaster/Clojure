(ns interactive-web.core
  (:require [interactive-web.chat :as chat]
            [interactive-web.views :as jv]
            [compojure.core :refer :all]
            [hiccup.core :as hc]
            [org.httpkit.server :as ohs]
            [compojure.handler :as handler]
            [compojure.route :as route]))

(use 'lucid.package)

(comment
(pull '[http-kit "2.2.0"])
(pull '[hiccup "1.0.5"])
(pull '[garden "1.3.2"]))


(defn index [{params :params}]
  {:body (jv/index params) 
   :status 200})

(defn chat [{params :params :as req}]
  (ohs/with-channel req ch
    (chat/add-user ch params)
    (ohs/on-receive ch
                    (fn [msg] (chat/on-msg ch msg)))
    (ohs/on-close ch
                  (fn [_] (chat/remove-user ch)))))


(defroutes app-routes
  (GET "/" [] #'index)
  (GET "/:name" [] #'index)
  (GET "/chat/:name" [] #'chat) ;; :name will be copied as a key to params 
  (route/resources "/assets/")
  (route/not-found "Not Found"))


 (def app
   (handler/site app-routes))

#_(def stop
  ;;link to a var of a function...to be able to overload
  ;;the function separately
  (ohs/run-server #'app {:port 8095}))
