(defn fib [x]
    (cond (= x 0) 0
            (= x 1) 1
        :else (+ (fib (- x 1))
                (fib (- x 2)))))

; iterative version
(defn fib [x]
    (defn fib-iter [a, b, count]
        (if (= count 0)
         b
         (fib-iter (+ a b), a, (- count 1))))
    (fib-iter 1, 0, x))
