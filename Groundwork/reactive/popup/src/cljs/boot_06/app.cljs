(ns boot-06.app
  (:require [reagent.core :as reagent]))

(def my-text
  (reagent/atom "REAGENT STRING"))

(defn dynamic-component []
  [:p @my-text])

(defn init []
  (let [ containder (.getElementById js/document "container")]
    (reagent/render-component [dynamic-component] container)))
