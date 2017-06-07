(def adjs ["normal"
            "too big"
            "too small"
            "swimming"])

(defn alice-is [inside]
  (loop [in inside
         out []]
        (if (empty? in)
          out
          (recur (rest in)(conj out (str "Alice is " (first in)))))))
