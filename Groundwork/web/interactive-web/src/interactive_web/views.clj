(ns interactive-web.views
  (:require [hiccup.core :as hc]))


(defn layout [title & content]
  (hc/html
   [:html
    [:head
     [:title title]]
    [:body content]]))

(defn index [data]
  (layout "index"
          [:div#out]
          [:textarea#inp ]))
