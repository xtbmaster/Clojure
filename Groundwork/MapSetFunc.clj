(defn mapset [arg]
  (loop [[selected & remaining]])

(defn los [arg]
  (let [x arg]
    (first (drop (- (count x) 1) x))))

(los [1, 2, 3])
