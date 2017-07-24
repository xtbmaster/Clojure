(ns rpc-game.core-spec
  (:require [speclj.core :refer :all]
            [rpc-game.core :refer :all]))

(describe "validating user input"
          (it "tests the input of get-guess"
              (let [actual (get-guess)]
              (should= actual
                       (if (contains? #{"r" "p" "s"} actual) actual nil))
              (should-contain actual ["r" "p" "s" nil]))))

(describe "determening a winner"
          (it "returns 1 if user has won, 2 - if ai and 3 in case of a tie"
              (should= 1 (winner "p" "r"))
              (should= 2 (winner "r" "p"))
              (should= 1 (winner "r" "s"))
              (should= 2 (winner "s" "r"))
              (should= 1 (winner "s" "p"))
              (should= 2 (winner "p" "s"))
              (should= 0 (winner "s" "s"))
              (should= 0 (winner "r" "r"))
              (should= 0 (winner "p" "p"))))




