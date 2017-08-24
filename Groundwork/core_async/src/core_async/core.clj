(ns core-async.core
  (:require [clojure.core.async :as async]))

(def a-service-chan (async/chan 10))
(def b-service-chan (async/chan 10))
(def result-chan (async/chan 10))

(defn request-service [service-chan-name msg]
  (async/go
    (Thread/sleep (rand-int 500))
    (async/>! service-chan-name msg)))

(defn ask []
  (request-service a-service-chan "FROM A")
  (request-service b-service-chan "FROM B")
  (async/go (let [[v] (async/alts! [a-service-chan b-service-chan])]
              (async/>! result-chan v))))

(defn -main [& args]
  (println "Requesting service")
  (ask)
  (println (async/<!! result-chan)))

