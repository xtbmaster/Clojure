(ns simple-rpg-game.core)

(def max-level 10)

;; att = lvl * 2

(defn calc-attack
  "Defining attack according to charachter level"
  [lvl]
  (* lvl 6))

(defn calc-defence
  "Defining defence according to charachter level"
  [lvl]
  (int (* lvl 1.5)))

(defn calc-hp
  "Defining hp according to character level"
  [lvl]
  (int (* lvl 20)))

(defn kill-neg
  [x]
  (if (neg? x) 0 x))

(defn calc-base-damage
  [att def]
  (kill-neg (- att def)))

(defn roll-dice
  "Dice determines what amount of damage a player will deal"
  [sides]
  (inc (rand-int sides)))

(defn calc-sides
  [lvl]
  (if (> lvl 5) 4 6))

(defn create-character
  [name lvl]
  {:name name
    :lvl lvl
    :att (calc-attack lvl)
    :def (calc-defence lvl)
   :hp (calc-hp lvl)})

(defn real-damage
  [base sides]
  (let [rd (roll-dice sides)
        s (/ sides 2)]
    (cond
      (<= rd s) (int (/ base 2))
      (> rd s) base
      (= rd s) (* base 2)))) ; crit

(defn take-damage
  [from to]
  (let [bd (calc-base-damage (:att from) (:def to))
        s (calc-sides (:lvl from))
        rd (real-damage bd s)]
    [rd (update-in to [:hp] #(- % rd))]))

(def config
  {:player player
   :enemy enemy})

(def log-template
  "Character %s received %d damage.
  New life is %d")

(defn print-battle-log
  [damage character]
  (let [name (:name character)
        new-hp (:hp character)
        s (format log-template name damage new-hp)]
    (println s)))

(defn print-winner
  [p-hp e-hp]
  (if (<= p-hp 0)
    (println "enemy won")
    (println "player won")))

(defn game-logic
  [config]
  (loop [player (:player config)
         enemy (:enemy config)
         round 1]
    (if (or (<= (:hp player) 0)
            (<= (:hp enemy) 0))
      (print-winner (:hp player) (:hp enemy))
      (let [pl->en (take-damage player enemy)
            en->pl (take-damage enemy player)]
        (do
          (println (str "round: " round ))
          (print-battle-log (pl->en 0) (pl->en 1))
          (print-battle-log (en->pl 0) (en->pl 1))
          (recur (en->pl 1) (pl->en 1) (inc round)))))))

(def player (create-character "Tim" 6))
(def enemy (create-character "Enemy1" 2))
(def player (create-character "Enemy2" 4))
