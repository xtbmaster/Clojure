// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13439__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13440__i = 0, G__13440__a = new Array(arguments.length -  0);
while (G__13440__i < G__13440__a.length) {G__13440__a[G__13440__i] = arguments[G__13440__i + 0]; ++G__13440__i;}
  args = new cljs.core.IndexedSeq(G__13440__a,0,null);
} 
return G__13439__delegate.call(this,args);};
G__13439.cljs$lang$maxFixedArity = 0;
G__13439.cljs$lang$applyTo = (function (arglist__13441){
var args = cljs.core.seq(arglist__13441);
return G__13439__delegate(args);
});
G__13439.cljs$core$IFn$_invoke$arity$variadic = G__13439__delegate;
return G__13439;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13442__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13443__i = 0, G__13443__a = new Array(arguments.length -  0);
while (G__13443__i < G__13443__a.length) {G__13443__a[G__13443__i] = arguments[G__13443__i + 0]; ++G__13443__i;}
  args = new cljs.core.IndexedSeq(G__13443__a,0,null);
} 
return G__13442__delegate.call(this,args);};
G__13442.cljs$lang$maxFixedArity = 0;
G__13442.cljs$lang$applyTo = (function (arglist__13444){
var args = cljs.core.seq(arglist__13444);
return G__13442__delegate(args);
});
G__13442.cljs$core$IFn$_invoke$arity$variadic = G__13442__delegate;
return G__13442;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
