(ns brecommender.xml_parsing
  (:require
    [clojure.data.zip.xml :refer [xml-> xml1-> attr text]]
    [clojure.zip :refer [xml-zip]]
    [clojure.data.xml :refer [parse]]))

(defn parse-response [response]
  (-> response
    java.io.StringReader.
    parse
    xml-zip))

(defn from-xml
  "Retrieves an actual value from an xml `node`"
  [node page]
  (xml1-> page node text))

(defn get-node [node page]
  (condp = node
    :authors (xml-> page :authors :author)
    :shelf-books (xml-> page :GoodreadsResponse :reviews :review :book)
    :books-total (read-string (xml1-> page :GoodreadsResponse :reviews (attr :total)))
    :similar-books (xml-> page :book :similar_books :book)
    :authors-fans (read-string (xml1-> page :GoodreadsResponse :author :fans_count text))
    :favorite-authors (xml-> page :GoodreadsResponse :user :favorite_authors :author)
    :user-private? (boolean (xml1-> page :GoodreadsResponse :user :private text))))
