(ns body-hitter.core)

(def asym-body-parts
  "not full list of body parts"
  [{:name "head" :size 3}
   {:name "body" :size 7}
   {:name "left-hand" :size 2}
   {:name "left-leg" :size 4}
   {:name "left-eye" :size 1}])

(defn matching-part [part]
  "matches missing body part"
  {:name (clojure.string/replace (:name part) #"^left-" "right-")
    :size (:size part)})
;
; (defn body-parts-symmetrizer [asym-body-parts]
;   "symmetrizes body parts"
;   (loop [remaining-parts asym-body-parts,
;          final-body-parts []]
;         (if (empty? remaining-parts)
;          final-body-parts
;          (let [[part & rest] remaining-parts]
;            (recur rest
;              (into remaining-parts
;                (set [part, (matching-part part)])))))))
;
(defn body-parts-symmetrizer [asym-body-parts]
  "improved version of body-parts-symmetrizer"
  (reduce (fn [final-body-parts, part]
           (into final-body-parts (set [part, (matching-part part)])))
          []
          asym-body-parts))

(defn hit [asym-body-parts]
  "hits randomly selected symmetrized body-part"
  (let [sym-body-parts (body-parts-symmetrizer asym-body-parts)
        aggregated-size-sum (reduce + (map :size sym-body-parts))
        target (rand aggregated-size-sum)]
       (loop [[part & remaining] sym-body-parts
              part-size (:size part)]
         (if (> part-size target)
          part
          (recur remaining,
                  (+ (:size (first remaining)),
                                          part-size))))))
