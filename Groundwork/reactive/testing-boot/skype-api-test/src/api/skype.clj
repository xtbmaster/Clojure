(ns api.skype
  (:require
    [api.user-chat :as chat])
  (:import
    [com.samczsun.skype4j Skype]
    [com.samczsun.skype4j SkypeBuilder]))
    

(def settings (read-string (slurp "settings.clj")))

(def skype
  (let [skype (.. (SkypeBuilder. (settings :username) (settings :password))
                withAllResources
                build)]
    (doto skype
      (.login)
      (.getEventDespatcher)
      (.registerListener (chat/UserChat))
      (.subscribe)
      (.setVisibility (. Visibility ONLINE)))
    skype))


(defn start []
  (println skype))


