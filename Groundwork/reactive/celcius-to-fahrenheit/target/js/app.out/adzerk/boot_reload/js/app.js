// Compiled by ClojureScript 1.9.946 {}
goog.provide('adzerk.boot_reload.js.app');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('converter.app');
adzerk.boot_reload.client.connect.call(null,"ws://localhost:54533",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws-host","ws-host",587956291),null,new cljs.core.Keyword(null,"asset-host","asset-host",-899289050),null,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return converter.app.init.call(null);
})], null));
