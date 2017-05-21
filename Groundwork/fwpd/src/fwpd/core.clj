(ns fwpd.core)
(def filename "/home/arthur/ArtSoft/Clojure/Groundwork/fwpd/resources/people.csv")

(def men-keys [:name :age])

(defn str->int
  [str]
  (Integer. str))

(defn parse [csv]
  (map #(clojure.string/split % #",")
   (clojure.string/split csv #"\n")))

(def conversions {:name identity
                   :age str->int})

(defn convert [key, value]
  ((get conversions key) value))

(defn mapify
  [rows]
  (map (fn [unmapped-row]
        (reduce (fn [row-map [ke, va]]
                 (assoc row-map ke (convert ke, va)))
                {}
                (map vector men-keys unmapped-row)))
       rows))

(defn age-filter
  [min-age, records]
  (filter #(>= (:age %) min-age) records))
