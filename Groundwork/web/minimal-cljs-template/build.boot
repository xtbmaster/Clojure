(set-env!
  :source-paths #{"src/cljs"}
  :resource-paths #{"html"}

  :dependencies '[ [adzerk/boot-cljs "2.1.4"]
                   [pandeiro/boot-http "0.8.3"]
                   [adzerk/boot-reload "0.5.2"]
                   [adzerk/boot-cljs-repl "0.4.0-SNAPSHOT"]
                   [org.clojure/clojure "1.10.0-alpha4"]
                   [org.clojure/clojurescript "1.10.145"]
                   [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                   [org.clojure/tools.nrepl "0.2.13" :scope "test"]
                   [weasel "0.7.0"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[pandeiro.boot-http :refer [serve]]
  '[adzerk.boot-reload :refer [reload]] ;; automatic html reloading
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(deftask dev []
  (comp
    (serve :dir "target")
    (watch)
    (reload)
    (cljs-repl)
    (cljs)
    (target :dir #{"target"})))
  
