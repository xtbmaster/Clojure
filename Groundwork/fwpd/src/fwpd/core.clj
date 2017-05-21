(ns fwpd.core)
(def filename "/home/arthur/ArtSoft/Clojure/Groundwork/fwpd/resources/people.csv")

(def people-keys [:name :age])

(defn str->int
  [str]
  (Integer. str))

(def conversion {:name identity :age str->int})

(defn convert
  [key, value]
  ((get conversion key) value))

(defn parse [csv]
  (map #(clojure.string/split % #",")
   (clojure.string/split csv #"\n")))

(defn mapify
  [rows]
  (map (fn [unmapped-row]
        (reduce (fn [row-map [key, val]]
                    (assoc row-map key (convert key val)))
         {}
         (map vector people-keys unmapped-row)))
   rows))

(defn filter-age
  [min-age, records]
  (filter #(>= (:age %) min-age) records))
