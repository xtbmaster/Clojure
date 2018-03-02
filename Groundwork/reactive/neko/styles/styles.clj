(ns styles
  (:require [garden.def :refer [defrule defstyles]]
    [garden.stylesheet :refer [rule]]))


(defstyles screen
  (let [ h1 (rule :h1)
         body (rule :body)
         div (rule :div)]
    [ (h1 { :font-size "14px"
            :line-height 1.5
            :text-align "center"})
      (body { :height 400
              :font-family "Pangolin, cursive"
              :font-size "12px"
              :padding-left 0})
      (div {:text-align "center"})]))
