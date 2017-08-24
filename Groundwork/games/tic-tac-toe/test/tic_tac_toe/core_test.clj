(ns tic-tac-toe.core-test
  (:require [expectations :refer :all]
            [tic-tac-toe.core :refer :all]))

;;; Vector should be divided into horizontal, vertical and diagonal rows
;;; 1 2 3
;;; 4 5 6
;;; 7 8 9

(expect
 '((1 2 3) (4 5 6) (7 8 9) (1 4 7) (2 5 8) (3 6 9) (1 5 9) (3 5 7))
 (triples [1 2 3 4 5 6 7 8 9]))

;; Checks whether there is a row filled with all :x- or all :o-s

(expect
 :o
 (tripple-winner? '(:o :o :o)))

(expect
 :x
 (tripple-winner? '(:x :x :x)))

(expect
 nil
 (tripple-winner? '(:x :x :a)))

;; Checks whether a board is full

(expect
 true
 (and (full-board? '(:x :x :x)) (full-board? '(:o :o :o))))

(expect
 false
 (full-board? '(:x nil :x)))

(expect "1" (read-line))
