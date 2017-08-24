(ns object-system.core)

(declare new-object)
(declare ^:dynamic this)


(defn find-method [method-name klass]
  (or ((klass :methods) method-name)
      (if-not (= #'OBJECT klass)
        (find-method method-name (klass :parent)))))

(defn new-class [class-name parent methods]
  (fn klass [command & args]
    (case command
      :name (name class-name)
      :parent parent
      :new (new-object klass)
      :methods methods
      :method (let [[method-name] args]
                (find-method method-name klass)))))

(def OBJECT (new-class :OBJECT nil {}))

(defn parent-class-spec [sexprs]
  (let [extends-spec (filter #(= 'extends (first %)) sexprs)
        extends (first extends-spec)]
  (if (empty? extends)
    'OBJECT
    (last extends))))


(defn method-spec [sexpr]
  (let [name (keyword (second sexpr))
        body (next sexpr)]
    [name (conj body 'fn)]))

(defn method-specs [sexprs]
  (->> sexprs
       (filter #(= 'method (first %)))
       (mapcat method-spec)
       (apply hash-map)))

(defmacro defclass [class-name & specs]
  (let [parent-class (parent-class-spec specs)
        fns (or (method-specs specs) {})]
    `(def ~class-name (new-class '~class-name #'~parent-class ~fns))))

(defn new-object [klass]
  (let [state (ref {})]
    (fn thiz [command & args]
      (case command
        :class klass
        :class-name (klass :name)
        :set! (let [[k v] args]
                (dosync (alter state assoc k v))
                nil)
        :get (let [[key] args] (@state key))
        (let [method (klass :method command)]
          (if-not method
            (throw (RuntimeException.
                    (str "Unable to respond to " command))))
          (binding [this thiz]
            (apply method args)))))))

;; (defclass Person
;;   (method age[] (* 2 10))
;;   (method about [diff]
;;           (str "I was born about " (+ diff (this :age)) " years age")))

;; (defclass Woman
;;   (extends Person)
;;   (method greet [v] (str "Hello, " v))
;;   (method age [] (* 2 9)))

;; (def donna (Woman :new))
;; (donna :greet "Tim")
;; (donna :age)
;; (donna :about 3)
