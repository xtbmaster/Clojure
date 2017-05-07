; Exercise 1.3. Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.

(defn sqr [x]
  (* x x))

(defn findTwoLargest [a, b, c]
        (+ (sqr (max a, b)) (sqr (max c, (min a, b)))))

; another version
(defn findTwoLargest [a, b, c]
    (cond (<= a, b, c) (+ (sqr b) (sqr c))
        (<= b, a, c) (+ (sqr a) (sqr c))
        :else (+ (sqr a) (sqr b))))
