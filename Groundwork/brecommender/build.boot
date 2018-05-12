(set-env!
  :source-paths #{"src"}
  :dependencies '[ [org.clojure/data.xml "0.0.8"]
                   [org.clojure/data.zip "0.1.2"]
                   [manifold "0.1.6"]
                   [clj-http "3.9.0"]
                   [throttler "1.0.0"]])

(require
  '[brecommender.core :as core]
  '[brecommender.utils :as utils])

(defn- fail! [msg]
  (do
    (boot.util/fail msg)
    (System/exit 1)))

(defn- valid-params? [token user]
  (do
    (println "Validating parameters...")
    (when-not (utils/valid-token? token) (fail! "...Goodreads API token key is not valid!"))
    (when-not (utils/valid-user? token user) (fail! "...user profile is not found or private!"))
    (println "...everything is ok. We start to build a recommendation list, it will take a while, please wait...")
    true))

(deftask recommend!
  "Builds a recommendation book list."
  [ t token VAL str "Goodreads API token key."
    u user VAL str "Goodreads users id."
    n books-number VAL int "Number of books to be recommended."]
  (when-not token (boot.util/fail "--token parameter is not specified"))
  (when-not user (boot.util/fail "--user-id parameter is not specified"))
  (when (valid-params? token user)
    (core/find! token user books-number)))
