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

(defn names
  "Turns the result of the filter into a list of names"
  [filtered-map]
  (map #(get % :name) filtered-map))

; (defn append
;   "Adds another person into list"
;   [mapped-list, new]
;   (conj mapped-list
;     (into {} (map vector people-keys new))))
;
(defn append
  "Adds another person into the list"
  [mapped-list, new]
  (if (valid? new)
   (conj mapped-list new)))

(defn valid?
 [new-coll]
 "Validates that there are :name and :age present when new person is added."
    (let [check-arg #(contains? new-coll (% people-keys))]
     (and (check-arg first)
      (check-arg second))))

(def testa (mapify (parse (slurp filename))))
