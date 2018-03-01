(ns boot-04.app)


(defn set-container-msg [container msg]
  (let [ container (.getElementById js/document container)]
    (set! (.-innerHTML container) msg)))


(defn init []
  (set-container-html "container" "DEFAULT-MESSAGE"))



