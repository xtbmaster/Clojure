; Exercise 1.8. Newton's method for cube roots is based on the fact that if y is an approximation to the cube
; root of x, then a better approximation is given by the value
; (x/y^2 + 2y)/3
; Use this formula to implement a cube-root procedure analogous to the square-root procedure.


(defn square [x]
  (* x x))

(defn abs [x]
  (if (< x 0)
    (- x)
    x))

(defn cubert [x]
    (defn improve [guess]
        (/ (+ (/ x (square guess)) (* 2 guess)) 3))
    (defn good-enough? [guess]
        (< (abs (/ (- (improve guess) guess) guess)) 0.0001))
    (defn cube-iter [guess]
        (if (good-enough? guess)
            guess
         (cube-iter (improve guess))))
    (cube-iter 1.0))
