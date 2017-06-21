(ns url_checker.v2
  (:require [clojure.string :as wrk-str]))

(defn string-to-list 
 "Splits the initial condition string in to separate parameters"
  [condition]
  (map first (re-seq #"(host|path|queryparam)\((.*?)\)" condition)))

(defn get-parts-map
  "Returns a map with key params"
  [line]
  (loop [remaining-parts line
         final-map {}]
    (if (empty? remaining-parts)
     final-map
     (let [[element & remaining] remaining-parts]
       (recur remaining
         (assoc final-map
           (re-find #".+?(?=\()" element)
           (second (re-find (re-pattern "\\((.+)\\)") element))))))))

(defn add-regex-to-param
  "Changes parameters with regex"
  [param]
  (clojure.string/replace param #"\?\w+" "([^?/]+)"))

(defn get-existing-params
  "Returns possible params"
  [urls]
  (->> (clojure.string/join ",separator," urls)
      (re-seq #"\?\w+")
      (map #(.substring % 1))
      (map keyword)))

(defn pattern
  "Creates a pattern to work with URLs"
  [raw-condition]
  (let [url-parts (get-parts-map (string-to-list raw-condition))
       host (get url-parts "host")
       path (get url-parts "path")
       query (get url-parts "queryparam")
       path-rgx (add-regex-to-param (get url-parts "path"))
       query-rgx (add-regex-to-param
                  (if (contains? url-parts "queryparam")
                   (get url-parts "queryparam")
                   ""))
         parameters (get-existing-params (vals url-parts))]

   {:regex (re-pattern (str "https{0,1}://" host "/" path-rgx
                             (when-not (empty? query-rgx) "\\?")
                             query-rgx))
    :params parameters}))

(def twitter (pattern "host(twitter.com); path(?user/status/?id);"))
(def dribbble (pattern "host(dribbble.com); path(shots/?id); queryparam(offset=?offset);"))

(defn recognize [ptrn url]
 (let [elements (rest (re-find (:regex ptrn) url))]
  (when (not-empty elements)
    (zipmap (:params ptrn) elements))))

(defn start []
  (println "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
 (println (recognize twitter "http://twitter.com/bradfitz/status/562360748727611392"))
 (println (recognize dribbble "https://dribbble.com/shots/1905065-Travel-Icons-pack?offset=1"))
 (println (recognize dribbble "https://twitter.com/shots/1905065-Travel-Icons-pack?offset=1")))
