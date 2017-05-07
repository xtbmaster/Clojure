; Exercise 1.11. A function f is defined by the rule that f(n) = n if n<3 and f(n) = f(n - 1) + f(n - 2) + f(n - 3) if n>= 3. Write a procedure that computes f by means of a recursive process. Write a procedure that computes f by means of an iterative process.

(defn f [n]
    (cond (< n 3) n
     :else (+
               (f (- n 1))
               (f (- n 2))
               (f (- n 3)))))

; iterative version
(defn f [n]
    (defn f-iter [a, b, c, count]
        (if (= count 0)
         c
         (f-iter (+ a, b, c), a, b, (- count 1))))
    (f-iter 2, 1, 0, n))
