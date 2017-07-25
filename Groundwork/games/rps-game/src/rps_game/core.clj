(ns rps-game.core
  (clojure.core/refer-clojure))

(defn get-guess
  "Returns one of the possible inputs"
  []
  (println "Play your hand: (r)ock, (p)aper, (s)cissors")
  (let [guess (read-line)]
    (if (get {"r" true "p" true "s" true} guess) guess)))

(defn winner
  "Determines who won the game"
  [guess1 guess2]
  (let [guesses [guess1 guess2]]
    (cond
      (= guesses ["p" "r"]) 1
      (= guesses ["r" "p"]) 2
      (= guesses ["r" "s"]) 1
      (= guesses ["s" "r"]) 2
      (= guesses ["s" "p"]) 1
      (= guesses ["p" "s"]) 2
      (= guesses [guess1 guess2]) 0)))

(defn play-hand []
  (let [ai-guess (rand-nth ["r" "p" "s"])
        player-guess (get-guess)
        winner (winner ai-guess player-guess)]
    (println "AI guess: " ai-guess)
    (println "User guess: " player-guess)
    (cond
      (= player-guess nil) (println "You have entered invalid value")
      (= winner 0) (println "Game tied!")
      (= winner 1) (println "AI wins!")
      :else (println "Player wins!"))))

(defn start []
(loop []
  (play-hand)
  (recur)))
