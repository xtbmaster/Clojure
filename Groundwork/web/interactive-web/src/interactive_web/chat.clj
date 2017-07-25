(ns interactive-web.chat
  (:require [org.httpkit.server :as ohs]
            [hiccup.core :as hc]
            [clojure.stacktrace :as cs]))

(def users (atom {}))

(defn fmt-message [user code res]
  (hc/html
   [:div.message
    [:b (:name user)]
    [:div.res
     [:pre
      code
      "\n----\n"
      res]]]))

(defn my-eval [cd]
  (with-out-str
    (try (println (eval (read-string cd)))
         (catch Exception e
           (println (str e))
           (println (cs/print-stack-trace e))))))

(defn remove-user [ch]
  (swap! users dissoc ch))

(defn add-user [ch user]
   (swap! users assoc ch user))

(defn b-cast [msg]
  (doseq [[ch u] @users]
    (ohs/send! ch msg)))

(defn on-msg [ch msg]
  (let [u (get @users ch)
        res (my-eval msg)]
    (println "eval res" res)
    (b-cast (fmt-message u msg res))))
