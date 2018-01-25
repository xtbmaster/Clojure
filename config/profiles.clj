{:user {:plugins [ [lein-ancient "0.6.15"]
                   [lein-try "0.4.1"]]
                   
        :dependencies [[clj-stacktrace "0.2.8"]]
        :injections [(let [orig (ns-resolve (doto 'clojure.stacktrace require)
                                            'print-cause-trace)
                           new (ns-resolve (doto 'clj-stacktrace.repl require)
                                           'pst)]
                       (alter-var-root orig (constantly (deref new))))]
         :repl {:dependencies [[curiousprogrammer/clojure-repl "0.1.0"]]}}}
                   
