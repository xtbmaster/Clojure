(ns brecommender.core
  (:require
    [manifold.deferred :as d]
    [manifold.stream :as s]
    [clojure.string :as str]
    [clj-http.client :refer [generate-query-string]]
    [clojure.set :as set]
    [brecommender.utils :as u]
    [brecommender.xml_parsing :as x]))

(def default-recommendations-n 10)
(def ^:private books-per-page 100) ; it seems to be an optimal distribution in my view

(def ^:private link-shelf "https://www.goodreads.com/review/list?v=2&")
(def ^:private link-book-info "https://www.goodreads.com/book/show.xml?")
(def ^:private link-user-info "https://www.goodreads.com/user/show/USER_ID.xml?")
(def ^:private link-author-info "https://www.goodreads.com/author/show.xml?")

(def ^:private *config (d/deferred))


(defn author-node->map [book-xml]
  (mapv #(hash-map
           :id (read-string (x/from-xml :id %))
           :name (x/from-xml :name %))
    book-xml))

(defn book-xml->map [page]
  { :book-id (read-string (x/from-xml :id page))
    :book-info { :avr_rating (read-string (x/from-xml :average_rating page))
                 :ratings_count (read-string (x/from-xml :ratings_count page))         
                 :title (x/from-xml :title page)
                 :link (x/from-xml :link page)
                 :authors (author-node->map (x/get-node :authors page))}})


(defn books-by-xml
  "Parses a list of books on a given xml-page"
  [xml-page]
  (flatten (pmap book-xml->map xml-page)))

(defn books-by-url
  "Retrieves a list of books on a given page."
  [url]
  (books-by-xml (x/get-node :shelf-books (u/get-xml-page url))))

(defn get-shelf-urls
  "Returns a list of urls for all pages of the given `shelf`."
  [shelf]
  (let [ conf (merge @*config {:shelf shelf :per_page 1}) ; for a faster response
         page (u/get-xml-page link-shelf conf) 
         n-pages (int (Math/ceil (/ (x/get-node :books-total page) books-per-page)))]
    (for [ n (range 1 (inc n-pages))]
      (str link-shelf (generate-query-string (merge conf {:page n :per_page books-per-page}))))))


(defn authors-fans [id]
  (let [page (u/get-xml-page link-author-info (merge @*config {:id id}))]
    (x/get-node :authors-fans page)))


;; PHASE #2 SUGGESTION: a slight improvement of sorting, to process cases of the same rating.
(def b-comparator
  (fn [x y]
    (letfn [ (avr-rating [book] (-> book :book-info :avr_rating))
             (ratings-count [book] (-> book :book-info :ratings_count))
             (authors [book] (-> book :book-info :authors))
             (most-fans [authors] (->> authors
                                    (map (comp authors-fans :id))
                                    (apply max)))] ; for the sake of simplicity, we will take only the most popular one.
      (let [c (compare
                [(avr-rating y) (ratings-count y)]
                [(avr-rating x) (ratings-count x)])]
        (if-not (= c 0) c
            (compare (most-fans (authors y)) (most-fans (authors x)))))))) ; just to be sure)

(defn favorite-authors
  "Retrieves a list of users favorite authors."
  [user]
  (let [ link (str/replace link-user-info "USER_ID" user)
         page (u/get-xml-page link @*config)]
    (author-node->map (x/get-node :favorite-authors page))))

;; PHASE #2 SUGGESTION: one of possible recommendation improvements could be not to take first n top-rated books,
;; but to give priority to those ones, which were written by users favorite authors...and favorite authors of the
;; people the user is following (but this api requires oauth)

(defn favorite-first [user col]
  (if-let [fav (seq (favorite-authors user))]
    (let [ to-top (filter #(seq (set/intersection (set fav) (set (:authors (:book-info %))))) col)] ;looks ugly
      (concat (vec (sort b-comparator to-top)) (remove (set to-top) col)))
    col))

(defn books-from-shelf
  "Retrieves a list of all books from a given `shelf`."
  [shelf]
  (let [urls (get-shelf-urls shelf)]
    (set (flatten (map books-by-url urls)))))

(defn similar-to 
  "Retrieves a list of similar literature to a given book"
  [id]
  (let [ page (u/get-xml-page link-book-info (merge @*config {:id id}))]
    (books-by-xml (x/get-node :similar-books page))))


(defn *build-similar-list
  "Asynchronously composes a list of similar literature to all books on given pages.
   Thereby we start to process books info from a first page, without waiting for data from
   other ones."
  [urls]
  (letfn [(all-similars-from [url]
            (->> (books-by-url url)
                 (pmap (comp similar-to :book-id)) flatten))]
    (d/loop [ u urls acc []]
      (d/chain (d/future (lazy-seq (into acc (all-similars-from (first u)))))
        #(if (empty? u) (distinct acc) (d/recur (rest u) %))))))


(defn find!
  "Entry point."
  [token user n]
  (d/success! *config {:key token :id user})
  (let [ *currently-reading (d/future (books-from-shelf "currently-reading"))
         *to-read (d/future (books-from-shelf "to-read")) ; obviously there is no need to recommend books, a user already knows about
         recoms (->>
                  @(*build-similar-list (get-shelf-urls "read"))
                  (remove (set/union @*to-read @*currently-reading))
                  (sort b-comparator)
                  (favorite-first user) ;; PHASE #2
                  (take (or n default-recommendations-n)))]
   (u/show-results recoms)))

;; TODO Exception handling
;; TODO Lazy sorting..??
;; TODO separate params validation, make pure predicate functions
;; TODO remove config from global variable, pass to every method
;; TODO http-async
;; TODO timeout to futures
;; TODO separate manifold from pmap iteration
;; TODO change read-string to something safer
;; TODO remove eval from throttle (identity)
;; TODO namespace dash
