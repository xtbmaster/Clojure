(ns frontend.app
  (:require [frontend.utils :as utils]))

(enable-console-print!) ;; logging from withing cljs



(defn init []
  (utils/set-attribute
    (utils/by-id "tenor-gif")
    "src"
    "/imgs/tenor.gif"))






