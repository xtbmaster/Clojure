(ns frontend.utils)

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn set-attribute
  [dom attr value]
  (aset dom attr value))
