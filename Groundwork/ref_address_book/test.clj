
(ns ref_address_book.test
  (:require [clojure.repl :refer [doc]])) ; refer in this case imports only doc function

(def my-contacts (ref []))

(def lname :lname)


(defn add-contact
  "adds a contact to the provided contact list"
  [contacts contact]
  (dosync
   (alter contacts conj (ref contact))))

(defn print-contacts
  "prints a list of contacts"
  [contacts]
  (doseq [c @contacts]
   (println (str "Name: " (@c lname) ", " (@c :fname)))))

(add-contact my-contacts {:fname "Luke" lname "VanderHart"})
(add-contact my-contacts {:fname "Stuart" lname "Sierra"})
(add-contact my-contacts {:fname "John" lnamw "Doe"})

(defn add-initials
  "adds initials to a single contact"
  [contact]
  (assoc contact :initials
         (str (first (contact :fname)) (first (contact :lname)))))

(defn add-all-initials
  "adds initials to each contact in the list"
  [contacts]
  (dosync
   (doseq [contact (ensure contacts)]
     (alter contact add-initials))))

;; (defn print-contacts-and-initials
;;   "prints a list of contacts with initials"
;;   [contacts]
;;   (dorun (map (fn [c]
;;                 (println (str "Name: " (@c :lname) ", " (@c :fname) " (" (@c :initials)
;;                               ")"))) @contacts)))

(defn print-contacts-and-initials
  "prints a list of contacts with initials"
  [contacts]
  (doseq [c @contacts]
    (println (str "Name: " (c :lname) ", " (c :fname) " (" (c :initials) ")"))))

(add-all-initials my-contacts)

(print-contacts-and-initials my-contacts)

