(ns api.user-chat
  (:import
    [com.samczsun.skype4j.events EventHandler]
    [com.samczsun.skype4j.events Listener]
    [com.samczsun.skype4j.events.chat.message MessageReceivedEvent]))

(deftype UserChat []
  com.samczsun.skype4j.events.Listener
  (^{com.samczsun.skype4j.events.EventHandler true}
    onChat
    [^com.samczsun.skype4j.events.MesageReceivedEvent e]
    (let [msg (.. e getMessage getContent toString)]
      (. sendMessage (.getChat e) msg))))


