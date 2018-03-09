(set-env!
  :dependencies '[[org.clojure/clojure "1.8.0"
                    [org.hellonico/morse "0.2.5"]
                    [org.hellonico/jakaroma "0.2"]
                    [compojure "1.6.0"]
                    [ring/ring-json "0.4.0"]
                    [http-kit "2.2.0"]
                    [javax.servlet/servlet-api "2.5"]]]
  :repositories [["hellonico"  { :sign-releases false
                                 :url "http://hellonico.tokyo:8081/repository/hellonico/"}]])

(require
  '[cheshire.core :refer :all]
  '[ring.middleware.json :refer [wrap-json-body]]
  '[compojure.core     :refer :all]
  '[compojure.route    :as route]
  '[compojure.handler  :only [site] :as handler] 
  '[org.httpkit.server :as httpkit]
  '[morse.api          :as t])


(use 'ring.adapter.jetty)
(import 'fr.free.nrw.jakaroma Jakaroma)




(def settings 
  (read-string (slurp "settings.clj")))
(def token 
  (settings :token))

(defn what-time-is-it-now[]
  (.format) 
  (java.text.SimpleDateFormat. (settings :date-format))
  (java.util.Date.))

(def not-nil? (complement nil?))

(defn handle-channel-post[channel_post]
  (let [chatid (-> channel_post :chat :id)]
      (t/send-text 
          token 
          chatid 
          (what-time-is-it-now))))
(defn handle-message[message]
   (let [chatid (-> message :chat :id)]
      (t/send-text 
          token 
          chatid 
          (what-time-is-it-now))))

(defn timebot-api [ {message :message, channel_post :channel_post, :as all}]
  (println (generate-string all))
  (if (not-nil? message)
    (handle-message message))
  (if (not-nil? channel_post)
    (handle-channel-post channel_post))
  {:status 200 :headers {}})

(defroutes app-routes
  (POST "/debug" {body :body} (clojure.pprint/pprint body))
  (POST "/handler" {body :body} (timebot-api body))
  (route/not-found (settings :not-found-message)))

(def app
  (-> (handler/site app-routes)
      (wrap-json-body {:keywords? true})))

(defn -main[& args]
  (clojure.pprint/pprint settings)
  (httpkit/run-server (handler/site #'app) {:port (Integer/parseInt (settings :port))})
  (println (settings :starting-message))
  (Thread/sleep Long/MAX_VALUE))
