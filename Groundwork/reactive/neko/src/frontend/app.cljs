(ns frontend.app
  (:require
    [frontend.utils :as utils]
    [hiccups.runtime]
    [dommy.core :as dommy :refer-macros [sel sel1]])
  (:require-macros
    [hiccups.core :as hiccups :refer [html]]))


(enable-console-print!) ;; logging from withing cljs

(def fox-dancing 
  (atom true))

(def dom-img (sel1 :#tenor-gif))
(def dom-button (sel1 :#tenor-button))

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
      [:img {:class "milk" :src "/imgs/milk.png"}])))

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
    (sel1 :#button-milk)
    :click
    more-milk))





