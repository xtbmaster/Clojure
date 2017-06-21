

(def account1 (ref 1000))
(def account2 (ref 500))

(defn trans
  [acc1 acc2 amount]
  (dosync (alter acc1 - amount)
          (alter acc2 + amount)))
