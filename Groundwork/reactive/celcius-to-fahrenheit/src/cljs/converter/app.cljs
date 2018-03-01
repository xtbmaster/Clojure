(ns converter.app
  (:require [reagent.core :as reagent]))

(defn c->f [myc]
  (+ (* myc 1.8) 32))


(def celsius-v
  (reagent/atom 30))

(defn celcius []
  [:div
    [:label "celsius"]
    [:input { :value @celsius-v
              :on-change
              #(reset! celsius-v (-> % .-target .-value))}]])

(defn fahrenheit []
  [:div
    [:label "fahrenheit"]
    [:input {:value (c->f @celsius-v)}]])

(defn temperature []
  [:div
    [:h3 "Temperature Converter"]
    [celcius]
    [fahrenheit]])

(defn init []
  (reagent/render-component [temperature]
    (.getElementById js/document "container")))


