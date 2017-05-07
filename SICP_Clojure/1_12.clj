; Exercise 1.12. Write a procedure that computes elements of Pascal's triangle by means of a recursive process.

(defn pascal [col, row]
  (cond
    (= col 0) 1
    (= col row) 1
    :else (+ (pascal (- col 1), (- row 1))
             (pascal col, (- row 1)))))
