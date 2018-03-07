(ns frontend.app
  (:require
    [frontend.utils :as utils]
    [frontend.weather :as weather]
    [frontend.rules :as rules]
    [hiccups.runtime]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    [cljs.core.async :refer [put! chan <! >! timeout close!]]
    [beicon.core :as beicon])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]]
    [hiccups.core :as hiccups :refer [html]]))


(enable-console-print!) ;; logging from withing cljs

(def fox-dancing 
  (atom true))


(def dom-img (sel1 :#tenor-gif))
(def dom-button (sel1 :#tenor-button))

(def milk-counter (atom 0))
(def milk-channel (chan))

(def nomilk-counter (atom 0))
(def nomilk-channel (chan))

(def nomilk-stream
  (->>
    (beicon/from-atom nomilk-counter)
    (beicon/filter #(> % 10))))

(defn make-fox-dance []
  (utils/set-attribute!
    dom-img
    :start
    ""))

(defn make-fox-stop []
  (utils/set-attribute!
    dom-img
    :stopped
    ""))

(beicon/on-value nomilk-stream #(make-fox-stop))


(defn swap-fox []
  (reset! fox-dancing (not @fox-dancing))
  (if @fox-dancing
    (do
      (println "starting")
      (utils/remove-attribute! dom-img :stopped)
      (make-fox-dance))
    (do
      (println "stopping")
      (utils/remove-attribute! dom-img :start)
      (make-fox-stop))))

(defn more-milk []
  (dommy/append! (sel1 :#div3)
    (utils/create-element
      :div
      "newdiv"
      [:img {:class "milk" :src "/imgs/milk.png"}]))

  (reset! nomilk-counter -1)
  (go
    (swap! milk-counter inc)
    (>! milk-channel @milk-counter)))


(defn init []
  (utils/set-attribute
    dom-img
    "src"
    "/imgs/tenor.gif")
  (dommy/listen!
    (sel1 :#tenor-button)
    :click
    swap-fox)
  (dommy/listen!
    (sel1 :#button-slide)
    :click
    #(dommy/toggle-class! (sel1 :#slide) "slide"))
  (dommy/listen!
    (sel1 :#button-add-milk)
    :click
    more-milk)
  (dommy/listen!
    (sel1 :#button-remove-milk)
    :click
    #(doseq [d (sel :#newdiv)]
       (dommy/clear! d)))
  (dommy/listen!
    (sel1 :#button-angry)
    :click
    #(.alert js/window
       (if (rules/is-fox-angry?)
         (str "The fox is angry:[lvl " (rules/angry-level) "]")
         "The fox is not angry yet")))
  (go-loop []
    (let [v (<! milk-channel)]
      (dommy/set-text!
        (sel1 "#slide")
        (str "Boxes of Milk delivered:" v))
      (recur)))
  (go
    (while true
      (let [v (<! nomilk-channel)]
        (dommy/set-text!
          (sel1 "#nomilk")
          (str "Time without fresh milk:" v " s")))))

  (go-loop []
    (<! (timeout 1000))
    (swap! nomilk-counter inc)
    (rules/new-milk-time @nomilk-counter)
    (>! nomilk-channel @nomilk-counter)
    (recur))

  (weather/get-weather "Rome")
  (go-loop []
    (when-let [msg (<! weather/weather-handler-chan)]
      (dommy/append! (sel1 :#weather-cur)
        (utils/create-element :div
          "weather"
          [:img
            { :class "weather"
              :src (weather/get-icon (weather/read-weather msg))}]))
      
      (weather/store-in-mongo
        "weather"
        (utils/clj->json (weather/read-weather msg))))))





