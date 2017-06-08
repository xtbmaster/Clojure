(ns url_checker.v1
  (:require [clojure.string :as wrk-str]))

(import 'org.apache.commons.validator.routines.UrlValidator)
(import '(java.net URL
          HttpURLConnection
          UnknownHostException
          MalformedURLException))

(defn isValid? [url]
  "Validates url"
    (.isValid (new UrlValidator) url))

(defn get-path-elements [url]
  "Returns path elements of the url"
  (drop 1
    (wrk-str/split
      (.getPath (new URL url)) #"/")))

(defn request-to-keyparams [url]
  "Parses parameters into a map"
  (into {} (for [[_ k v] (re-seq #"([^&=]+)=([^&]+)"
                          (last (wrk-str/split url #"\?")))]
             [(keyword k) v])))

(defn isActive? [url]
  "Checks whether there is a connection to the website"
 (try
       (let [c (cast HttpURLConnection
                     (.openConnection (URL. url)))]
         (when (= 200 (.getResponseCode c)) true))
       (catch UnknownHostException _)))


(defn start [& args]
  (println "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  (if (nil? args)
   (println "You have not entered any URLs")
   (try
    (let [url (first args)
          prms (request-to-keyparams url)
           path-elements (get-path-elements url)]
         (when (isValid? url)
             (println (str (.getHost (new URL url))
                       " web site is " (if (isActive? url) "active" "not active")
                       (if (empty? prms)
                        "\nThere are no params in the URL"
                        (str "\nHere are params of the URL: " prms))
                       "\nHere are your path elements: "
                       (apply list path-elements)))))
    (catch MalformedURLException _
     (println "You have entered invalid URL")))))
