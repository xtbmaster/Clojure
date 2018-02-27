(set-env!
  :resource-paths #{"src" "html"}
  :dependencies ' [ [adzerk/boot-cljs "2.1.4"]
                    [org.clojure/clojurescript "1.9.946"]])

(require '[adzerk.boot-cljs :refer [cljs]])
