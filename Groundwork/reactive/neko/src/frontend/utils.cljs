(ns frontend.utils
  (:require
    [dommy.core :as dommy])
  (:require-macros
    [hiccups.core :as hiccups :refer [html]]))

;; (defn by-id [id] ;; is replaced by dommy macros sel1
;;   (.getElementById js/document (name id)))

(defn set-attribute
  [dom attr value]
  (aset dom attr value))

(defn set-attribute!
  [dom attr value]
  (dommy/set-attr! dom attr value))

(defn remove-attribute!
  [dom attr]
  (dommy/remove-attr! dom attr))

(defn create-element
  [tag id & [nodes]]
  (let [el (dommy/create-element tag)]
    (aset el "id" id)
    (when nodes (dommy/set-html! el (html nodes)))
    el))

;; (defn add-listener-old-skool
;;   [dom event function]
;;   (aset dom (str "on" event) function))

;; (defn add-listener ;; is replaced by dommy listen! function
;;   [dom event function]
;;   (.addEventListener
;;     dom
;;     event
;;     function
;;     false))

(defn as-seq
  "Convert a set of DOM node to a CLJS sequence"
  [nodes]
  (let [ length (fn [nodes] (. nodes -length))
         item (fn [nodes n] (.item nodes n))]
    (for [i (range (length nodes))]
      (item nodes i))))

(defn by-tag [tag]
  (as-seq
    (.getElementsByTagName js/document (name tag))))

(defn by-class [klass]
  (as-seq
    (.getElementsByClassName js/document klass)))

(defn clj->json [ds]
  (.stringify js/JSON (clj->js ds)))
