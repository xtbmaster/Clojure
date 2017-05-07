(defn factorial [x]
    (if (= x 1)
        1)
    (* x (factorial (- x 1))))

; iterative version
(defn factorial [x]
    (defn iter [product, counter]
        (if (> counter x)
         product
         (iter (* counter product)
          (+ counter 1))))
    (iter 1, 1))
