(ns guestbook.models.db
  (:require [clojure.java.jdbc :as sql])
  (:import java.sql.DriverManager))

(def db {:dbtype "postgresql"
         :dbname "clojure_test"
         :host "localhost"
         :user "postgres"
       	 :password "postgres"})

(def a 10)


(defn create-guestbook-table []
  (do
    (sql/execute! db (sql/create-table-ddl
     :guestbook
     [[:id "SERIAL PRIMARY KEY"]
     [:timestamp "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"]
     [:name "TEXT"]
      [:message "TEXT"]]))
    (sql/execute! db "CREATE INDEX timestamp_index ON guestbook (timestamp)")))

(defn read-guests []
  (sql/query db ["SELECT * FROM guestbook ORDER BY timestamp DESC"])) ;; could be problems with lazy result

(defn save-message [name message]
  (sql/insert! db
               :guestbook
               [:name :message :timestamp]
               [name message (new java.sql.Timestamp (.getTime (new java.util.Date)))]))

