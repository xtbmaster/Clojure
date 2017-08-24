(ns json-web-test.view
  (:use hiccup.page hiccup.element))

(defn index-page []
  (html5
   [:html
    [:head]
    [:body "content"]]))

(bean java.util.Date)
(println "hello")
