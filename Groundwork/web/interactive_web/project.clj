(defproject interactive-web "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.6.0"]]
  :profiles
  {:dev {:dependencies [[im.chit/lucid.package "1.3.13"]
                        [javax.servlet/servlet-api "2.5"]]}})
