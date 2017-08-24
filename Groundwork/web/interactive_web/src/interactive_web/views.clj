(ns interactive-web.views
  (:require [interactive-web.style :as jc]
            [hiccup.core :as hc]
            [garden.core :as gc]))

(defn style [g]
  [:style (gc/css g)])


(defn js [pth]
  [:script {:src pth}])


(defn layout [title & content]
  (hc/html
   [:html
    [:head
     [:title title]
     (style jc/main-style)]
    [:body
     [:div.container content]
     (js "/assets/app.js")]]))

(defn index [data]
  (layout "index"
          [:div#out]
          [:textarea#inp ]))
