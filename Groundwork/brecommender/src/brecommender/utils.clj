(ns brecommender.utils
  (:require
    [clj-http.client :as client]
    [throttler.core :refer [throttle-fn]]
    [clojure.string :as str]
    [brecommender.xml_parsing :as x]))

(def ^:private quote "\"Always read something that will make you look good if you die in the middle of it\". –P.J. O’Rourke")

(def ^:private link-test-token "https://www.goodreads.com/book/show.xml?id=1&")
(def ^:private link-test-user "https://www.goodreads.com/user/show/USER_ID.xml?")
(def ^:private rate-limit 1)

(def ^:private throttle (throttle-fn eval rate-limit :second))

(defn clean-user-id [id]
  (do (filter #(Character/isDigit %) id)))

(defn safe-println
  "For concurrent console print."
  [& more]
  (.write *out* (str (str/join " " more) "\n")))

(defn logger [url]
  (safe-println "Calling: " url)
  url)

(defn progress-bar [url]
  (print "=") url)

(defn get-response
  ([url params] (get-response url params true))
  ([url params ex?]
   (let [link (str url (client/generate-query-string params))]
     (-> link throttle progress-bar #_logger
       (client/get { :query-params params
                     :validate-redirects false
                     :cookie-policy :standard
                     :throw-exceptions ex?}))))) 

(defn get-xml-page
  ([url] (get-xml-page url {}))
  ([url params] (-> (get-response url params) :body
                  x/parse-response)))

(defn valid-token? [token]
  (= 200 (:status (get-response link-test-token {:key token :id 1} false))))

(defn valid-user? [token id]
  (let [ response (get-response (str/replace link-test-user "USER_ID" id) {:key token} false)]
    (if (= 200 (:status response))
      (let [private? (->>
                       (:body response)
                       x/parse-response
                       (x/get-node :user-private?))]
        (not private?))
      false)))

(defn book->str [{{:keys [title link authors]} :book-info}]
  (format "\"%s\" by %s\nMore: %s\n"
    title
    (->> authors
      (map :name)
      (str/join ", "))
    link))

(defn show-results [results]
  (if-let [books (not-empty results)]
    (doseq [[i book] (map-indexed vector books)]
      (println (str "\n#" (inc i)))
      (println (book->str book))
      (println ""))
    (println "Nothing found: try another user, or present a book to this one!"))
  (dotimes [_ 80]
    (print "="))
  (println "\n" quote))

