(ns adzerk.boot-reload.js.core (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:45365" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})