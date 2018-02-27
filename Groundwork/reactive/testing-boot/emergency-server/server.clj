(set-env! :dependencies '[[http-kit "2.2.0"]])
(use 'org.httpkit.server)

(defn app [req]
  { :status 200
    :headers { "Content-Type" "text/html"}
    :body (slurp "message.txt")})

(defn -main [& args]
  (let [port 8090]
    (println "Starting the server on port " port)
    (run-server app { :port port})
    (while true (do (Thread/sleep 1000)))))

