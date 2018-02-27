;; https://github.com/boot-clj/boot/wiki/Filesets

;; run boot build


(set-env!
  :dependencies '[ [pandect "0.6.1"]
                   [com.googlecode.soundlibs/jlayer "1.0.1.4"]] 
  :resource-paths #{"src-txt"})

(require
  '[pandect.algo.sha1 :refer [sha1]]
  '[clojure.java.io :as io]
  '[boot.core :as core])

(defn- sha-txt!
  [in-file out-file]

  ;; Evaluates x then calls all of the methods and functions with the
  ;; value of x supplied at the front of the given arguments
  (doto out-file
    io/make-parents
    (spit (sha1 (slurp in-file)))))

(defn- txt->sha
  [path]
  (.replaceAll path "\\.txt$" ".sha"))

(deftask ocean
  "Play a wave sound"
  []
  (let [sound "https://www.soundjay.com/nature/ocean-wave-1.mp3"]
    (fn [next-task]
      (fn [fileset]
        (future
          (with-open [mp3 (clojure.java.io/input-stream sound)]
            (let [player (javazoom.jl.player.Player. mp3)]
              (.play player))))
        (next-task fileset)))))

(deftask logger
  "Printing execution progress"
  []
  (fn [next-task]
    (fn [fileset]
      (println "New buid")
      next-task fileset)))

(deftask sha
  "Compute sha of .txt files"
  []
  (let [tmp (boot.core/tmp-dir!)]
    (fn middleware [next-handler]
      (fn handler [fileset]
        (boot.core/empty-dir! tmp)
        (let [ in-files (boot.core/input-files fileset)
               txt-files (boot.core/by-ext [".txt"] in-files)]
          (doseq [in txt-files]
            (let [ in-file (boot.core/tmp-file in)
                   in-path (boot.core/tmp-path in)
                   out-path (txt->sha in-path)
                   out-file (io/file tmp out-path)]
              (sha-txt! in-file out-file)))
          (-> fileset
            (boot.core/add-resource tmp)
            boot.core/commit!
            next-handler))))))

(deftask build []
  (comp
    (watch) ;;calls the next-handler when source files change.
    (ocean)
    (sha)
    (logger)
    (target)))



