(set-env!
  :source-paths #{"src/cljs"}
  :resource-paths #{"resources"}
  :dependencies '[ [adzerk/boot-cljs "2.1.4" :scope "test"]
                   [adzerk/boot-cljs-repl "0.3.3" :scopt "test"]
                   [adzerk/boot-reload "0.5.2" :scope "test"]
                   [com.cemerick/piggieback "0.2.2" :scope "test"]
                   [weasel "0.7.0" :scope "test"]
                   [pandeiro/boot-http "0.8.3" :scope "test"]
                   [org.clojure/clojurescript "1.9.946" :scope "test"]
                   [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                   [reagent "0.8.0-alpha2"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]])

(task-options!
  reload {:on-jsload 'converter.app/init})

(deftask dev []
  (comp
    (serve) (watch) (reload) (cljs-repl) (cljs)))
  
