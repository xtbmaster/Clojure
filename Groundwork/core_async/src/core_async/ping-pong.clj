(ns core-async.ping-pong
  (:require [clojure.core.async :as async]))

(defn player [msg table]
  (async/go-loop []
    (do
      (>! table msg)
      (recur))))

(defn game [table]
  (async/go-loop [n 9]
    (when (pos? n)
      (println (<! table))
      (<! (async/timeout 500))
      (recur (dec n)))))

(let [table (chan)]
  (player "ping" table)
  (player "pong" table)
  (game table))

