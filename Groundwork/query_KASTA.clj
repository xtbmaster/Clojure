(set-env! :dependencies '[ [clj-http "3.8.0"]
                           [org.clojure/data.json "0.2.6"]])

(require '[clj-http.client :as client])
(require '[clojure.data.json :as json])

(def root-menu-link "https://modnakasta.ua/api/v2/market/menu/?v=1")
(def children-menu-link "https://modnakasta.ua/api/v2/market/menu/?v=1&parent-uuid=")
(def product-page-link "https://modnakasta.ua/api/v2/product-list")
(def catalog-link  "https://modnakasta.ua/market/")

(def product-limit 10)
(def *total-nodes (atom 0))
(def *num-small-nodes (atom 0))


(defn safe-println
  "For concurrent console print."
  [& more]
  (.write *out* (str (clojure.string/join " " more) "\n")))

(defn parse-response
  "Converts http-response `data` into JSON format."
  [data]
  (->
    data
    (:body)
    (json/read-str)))

;; ...have no idea how to name a more generic method for these ones
(defn get-nodes [raw-response]
  (get (parse-response raw-response) "nodes"))
(defn get-crumbs [raw-response]
  (get (parse-response raw-response) "breadcrumbs"))


(defn response
  ([f] (f (client/get root-menu-link)))
  ([f uuid] (f (client/get (str children-menu-link uuid)))))


(defn parse-crumbs
  "Since each subsequent child menu has a longer url, the sorted-map with url->name pairs
  was chosen to be an organized container for tracking a category path."
  [crumbs]
  (let [ s-map (sorted-map-by (fn [k1 k2] (< (count k1) (count k2))))
         agg (map #(assoc s-map (get % "url") (get % "name")) crumbs)]
    (clojure.string/join " > " (flatten (map vals agg)))))


(defn count-products [node]
  (->
    (str product-page-link (node "q"))
    (client/get)
    (:body)
    (json/read-str)
    (get "product-ids")
    (count)))

(defn small-enough? [node]
  (< (count-products node) product-limit))


(defn execute
  [node crumbs]
  (swap! *total-nodes inc)
  (if (node "has-children")
    (doall (let [ uuid (node "uuid")]
             (pmap execute (response get-nodes uuid) (repeat (response get-crumbs uuid)))))
    (when (small-enough? node)
      (swap! *num-small-nodes inc)
      (let [ num (count-products node)
             crumbs (parse-crumbs crumbs)
             path (str crumbs " > " (node "name"))
             url (str catalog-link (node "url"))]
        (safe-println path " | " url " | " num)))))

;; entry point
(doall (pmap execute
         (response get-nodes) (repeat (response get-crumbs)))) ;; repeat is used to pass the whole collection within a pmap iteration

;; summary printing
(let [ total-nodes @*total-nodes
       small-nodes @*num-small-nodes
       percentage (clojure.pprint/cl-format nil "~4f" (/ (* small-nodes 100) total-nodes))]
     (println
         "Total nodes: " total-nodes "\nNumber of small nodes: " small-nodes "\n"
         percentage "% (of " total-nodes " categories)"))


