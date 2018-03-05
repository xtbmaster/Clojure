(set-env!
  :source-paths #{"src" "styles"}
  :resource-paths #{"html" "build"}
  :dependencies '[ [adzerk/boot-cljs "2.1.4" :scope "test"]
                   [adzerk/boot-reload "0.5.2" :scope "test"]
                   [org.martinklepsch/boot-garden "1.3.2-1"]
                   [pandeiro/boot-http "0.8.3" :scope "test"]
                   [org.clojure/clojurescript "1.9.946" :scope "test"]
                   [org.clojure/core.async "0.4.474"]
                   [prismatic/dommy "1.1.0"]
                   [hiccups "0.3.0"]
                   [cljs-ajax "0.7.3"]])
(require
  '[org.martinklepsch.boot-garden :refer [garden]]
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]])

(task-options!
  garden { :styles-var 'styles/base
           :output-to "styles.css"
           :pretty-print true}
  cljs { :optimizations :none
         :source-map true}
  reload { :on-jsload 'frontend.app/init}
  garden { :styles-var 'styles/screen})

(deftask dev []
  (comp
    (serve) (watch) (reload) (garden) (cljs) (target)))


     

                   
