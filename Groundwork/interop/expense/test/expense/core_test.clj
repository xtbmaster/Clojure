(ns expense.core-test
  (:require [clojure.test :refer :all]
            [expense.core :refer :all]) 
  (:import (Expenses)))

(def clj-expenses [(new-expense "2017-8-20" 21 95 "books" "amazon.com")
                   (new-expense "2017-8-21" 72 43 "food" "McDonalds")
                   (new-expense "2017-8-22" 315 61 "car-rental" "avis")
                   (new-expense "2017-8-23" 14 52 "books" "borders")])

(deftest test-clj-expenses-total
  (is (= 42451 (total-amount clj-expenses)))
  (is (= 3647 (total-amount (category-is "books") clj-expenses))))


(deftest java-expenses [(Expenses. "2017-8-20" 21 95 "books" "amazon.com")
                        (Expenses. "2017-8-21" 72 43 "food" "McDonalds")
                        (Expenses. "2017-8-22" 72 43 "car-rental" "avis")
                        (Expenses. "2017-8-23" 14 52 "books" "borders")])

(deftest test-java-expenses-total
  (let [total-cents (map #(.amountInCents %) java-expenses)]
    (is (= 42451 (apply + total-cents)))))

(def mixed-expenses (concat clj-expenses javaexpenses))
(deftest test-mixed-expenses-total
  (is (= 84902 (total-amount mixed-expenses)))
  (is (= 7294 (total-amount (category-is "books"0 mixed-expenses)))))
