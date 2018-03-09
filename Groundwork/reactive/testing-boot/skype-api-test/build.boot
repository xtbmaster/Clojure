(set-env!
  :dependencies '[ [com.samczsun/skype4j "0.1.5"]]
  :source-paths #{"src"})

(require
  '[api.skype :refer [start]])

(deftask dev []
  (start))
