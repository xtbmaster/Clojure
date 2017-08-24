// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9008__auto__,writer__9009__auto__,opt__9010__auto__){
return cljs.core._write.call(null,writer__9009__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12885 = arguments.length;
var i__9548__auto___12886 = (0);
while(true){
if((i__9548__auto___12886 < len__9547__auto___12885)){
args__9554__auto__.push((arguments[i__9548__auto___12886]));

var G__12887 = (i__9548__auto___12886 + (1));
i__9548__auto___12886 = G__12887;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq12884){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12884));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12889 = arguments.length;
var i__9548__auto___12890 = (0);
while(true){
if((i__9548__auto___12890 < len__9547__auto___12889)){
args__9554__auto__.push((arguments[i__9548__auto___12890]));

var G__12891 = (i__9548__auto___12890 + (1));
i__9548__auto___12890 = G__12891;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq12888){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12888));
});

var g_QMARK__12892 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_12893 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12892){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12892))
,null));
var mkg_12894 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12892,g_12893){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12892,g_12893))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__12892,g_12893,mkg_12894){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12892).call(null,x);
});})(g_QMARK__12892,g_12893,mkg_12894))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__12892,g_12893,mkg_12894){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_12894).call(null,gfn);
});})(g_QMARK__12892,g_12893,mkg_12894))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__12892,g_12893,mkg_12894){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_12893).call(null,generator);
});})(g_QMARK__12892,g_12893,mkg_12894))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9640__auto___12914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9640__auto___12914){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12915 = arguments.length;
var i__9548__auto___12916 = (0);
while(true){
if((i__9548__auto___12916 < len__9547__auto___12915)){
args__9554__auto__.push((arguments[i__9548__auto___12916]));

var G__12917 = (i__9548__auto___12916 + (1));
i__9548__auto___12916 = G__12917;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12914))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12914){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12914),args);
});})(g__9640__auto___12914))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9640__auto___12914){
return (function (seq12895){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12895));
});})(g__9640__auto___12914))
;


var g__9640__auto___12918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9640__auto___12918){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12919 = arguments.length;
var i__9548__auto___12920 = (0);
while(true){
if((i__9548__auto___12920 < len__9547__auto___12919)){
args__9554__auto__.push((arguments[i__9548__auto___12920]));

var G__12921 = (i__9548__auto___12920 + (1));
i__9548__auto___12920 = G__12921;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12918))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12918){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12918),args);
});})(g__9640__auto___12918))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9640__auto___12918){
return (function (seq12896){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12896));
});})(g__9640__auto___12918))
;


var g__9640__auto___12922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9640__auto___12922){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12923 = arguments.length;
var i__9548__auto___12924 = (0);
while(true){
if((i__9548__auto___12924 < len__9547__auto___12923)){
args__9554__auto__.push((arguments[i__9548__auto___12924]));

var G__12925 = (i__9548__auto___12924 + (1));
i__9548__auto___12924 = G__12925;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12922))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12922){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12922),args);
});})(g__9640__auto___12922))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9640__auto___12922){
return (function (seq12897){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12897));
});})(g__9640__auto___12922))
;


var g__9640__auto___12926 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9640__auto___12926){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12927 = arguments.length;
var i__9548__auto___12928 = (0);
while(true){
if((i__9548__auto___12928 < len__9547__auto___12927)){
args__9554__auto__.push((arguments[i__9548__auto___12928]));

var G__12929 = (i__9548__auto___12928 + (1));
i__9548__auto___12928 = G__12929;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12926))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12926){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12926),args);
});})(g__9640__auto___12926))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9640__auto___12926){
return (function (seq12898){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12898));
});})(g__9640__auto___12926))
;


var g__9640__auto___12930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9640__auto___12930){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12931 = arguments.length;
var i__9548__auto___12932 = (0);
while(true){
if((i__9548__auto___12932 < len__9547__auto___12931)){
args__9554__auto__.push((arguments[i__9548__auto___12932]));

var G__12933 = (i__9548__auto___12932 + (1));
i__9548__auto___12932 = G__12933;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12930))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12930){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12930),args);
});})(g__9640__auto___12930))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9640__auto___12930){
return (function (seq12899){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12899));
});})(g__9640__auto___12930))
;


var g__9640__auto___12934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9640__auto___12934){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12935 = arguments.length;
var i__9548__auto___12936 = (0);
while(true){
if((i__9548__auto___12936 < len__9547__auto___12935)){
args__9554__auto__.push((arguments[i__9548__auto___12936]));

var G__12937 = (i__9548__auto___12936 + (1));
i__9548__auto___12936 = G__12937;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12934))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12934){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12934),args);
});})(g__9640__auto___12934))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9640__auto___12934){
return (function (seq12900){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12900));
});})(g__9640__auto___12934))
;


var g__9640__auto___12938 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9640__auto___12938){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12939 = arguments.length;
var i__9548__auto___12940 = (0);
while(true){
if((i__9548__auto___12940 < len__9547__auto___12939)){
args__9554__auto__.push((arguments[i__9548__auto___12940]));

var G__12941 = (i__9548__auto___12940 + (1));
i__9548__auto___12940 = G__12941;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12938))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12938){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12938),args);
});})(g__9640__auto___12938))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9640__auto___12938){
return (function (seq12901){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12901));
});})(g__9640__auto___12938))
;


var g__9640__auto___12942 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9640__auto___12942){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12943 = arguments.length;
var i__9548__auto___12944 = (0);
while(true){
if((i__9548__auto___12944 < len__9547__auto___12943)){
args__9554__auto__.push((arguments[i__9548__auto___12944]));

var G__12945 = (i__9548__auto___12944 + (1));
i__9548__auto___12944 = G__12945;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12942))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12942){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12942),args);
});})(g__9640__auto___12942))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9640__auto___12942){
return (function (seq12902){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12902));
});})(g__9640__auto___12942))
;


var g__9640__auto___12946 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9640__auto___12946){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12947 = arguments.length;
var i__9548__auto___12948 = (0);
while(true){
if((i__9548__auto___12948 < len__9547__auto___12947)){
args__9554__auto__.push((arguments[i__9548__auto___12948]));

var G__12949 = (i__9548__auto___12948 + (1));
i__9548__auto___12948 = G__12949;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12946))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12946){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12946),args);
});})(g__9640__auto___12946))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9640__auto___12946){
return (function (seq12903){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12903));
});})(g__9640__auto___12946))
;


var g__9640__auto___12950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9640__auto___12950){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12951 = arguments.length;
var i__9548__auto___12952 = (0);
while(true){
if((i__9548__auto___12952 < len__9547__auto___12951)){
args__9554__auto__.push((arguments[i__9548__auto___12952]));

var G__12953 = (i__9548__auto___12952 + (1));
i__9548__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12950))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12950){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12950),args);
});})(g__9640__auto___12950))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9640__auto___12950){
return (function (seq12904){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12904));
});})(g__9640__auto___12950))
;


var g__9640__auto___12954 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9640__auto___12954){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12955 = arguments.length;
var i__9548__auto___12956 = (0);
while(true){
if((i__9548__auto___12956 < len__9547__auto___12955)){
args__9554__auto__.push((arguments[i__9548__auto___12956]));

var G__12957 = (i__9548__auto___12956 + (1));
i__9548__auto___12956 = G__12957;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12954))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12954){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12954),args);
});})(g__9640__auto___12954))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9640__auto___12954){
return (function (seq12905){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12905));
});})(g__9640__auto___12954))
;


var g__9640__auto___12958 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9640__auto___12958){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12959 = arguments.length;
var i__9548__auto___12960 = (0);
while(true){
if((i__9548__auto___12960 < len__9547__auto___12959)){
args__9554__auto__.push((arguments[i__9548__auto___12960]));

var G__12961 = (i__9548__auto___12960 + (1));
i__9548__auto___12960 = G__12961;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12958))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12958){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12958),args);
});})(g__9640__auto___12958))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9640__auto___12958){
return (function (seq12906){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12906));
});})(g__9640__auto___12958))
;


var g__9640__auto___12962 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9640__auto___12962){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12963 = arguments.length;
var i__9548__auto___12964 = (0);
while(true){
if((i__9548__auto___12964 < len__9547__auto___12963)){
args__9554__auto__.push((arguments[i__9548__auto___12964]));

var G__12965 = (i__9548__auto___12964 + (1));
i__9548__auto___12964 = G__12965;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12962))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12962){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12962),args);
});})(g__9640__auto___12962))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9640__auto___12962){
return (function (seq12907){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12907));
});})(g__9640__auto___12962))
;


var g__9640__auto___12966 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9640__auto___12966){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12967 = arguments.length;
var i__9548__auto___12968 = (0);
while(true){
if((i__9548__auto___12968 < len__9547__auto___12967)){
args__9554__auto__.push((arguments[i__9548__auto___12968]));

var G__12969 = (i__9548__auto___12968 + (1));
i__9548__auto___12968 = G__12969;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12966))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12966){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12966),args);
});})(g__9640__auto___12966))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9640__auto___12966){
return (function (seq12908){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12908));
});})(g__9640__auto___12966))
;


var g__9640__auto___12970 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9640__auto___12970){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12971 = arguments.length;
var i__9548__auto___12972 = (0);
while(true){
if((i__9548__auto___12972 < len__9547__auto___12971)){
args__9554__auto__.push((arguments[i__9548__auto___12972]));

var G__12973 = (i__9548__auto___12972 + (1));
i__9548__auto___12972 = G__12973;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12970))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12970){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12970),args);
});})(g__9640__auto___12970))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9640__auto___12970){
return (function (seq12909){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12909));
});})(g__9640__auto___12970))
;


var g__9640__auto___12974 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9640__auto___12974){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12975 = arguments.length;
var i__9548__auto___12976 = (0);
while(true){
if((i__9548__auto___12976 < len__9547__auto___12975)){
args__9554__auto__.push((arguments[i__9548__auto___12976]));

var G__12977 = (i__9548__auto___12976 + (1));
i__9548__auto___12976 = G__12977;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12974))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12974){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12974),args);
});})(g__9640__auto___12974))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9640__auto___12974){
return (function (seq12910){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12910));
});})(g__9640__auto___12974))
;


var g__9640__auto___12978 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9640__auto___12978){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12979 = arguments.length;
var i__9548__auto___12980 = (0);
while(true){
if((i__9548__auto___12980 < len__9547__auto___12979)){
args__9554__auto__.push((arguments[i__9548__auto___12980]));

var G__12981 = (i__9548__auto___12980 + (1));
i__9548__auto___12980 = G__12981;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12978))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12978){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12978),args);
});})(g__9640__auto___12978))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9640__auto___12978){
return (function (seq12911){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12911));
});})(g__9640__auto___12978))
;


var g__9640__auto___12982 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9640__auto___12982){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12983 = arguments.length;
var i__9548__auto___12984 = (0);
while(true){
if((i__9548__auto___12984 < len__9547__auto___12983)){
args__9554__auto__.push((arguments[i__9548__auto___12984]));

var G__12985 = (i__9548__auto___12984 + (1));
i__9548__auto___12984 = G__12985;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12982))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12982){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12982),args);
});})(g__9640__auto___12982))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9640__auto___12982){
return (function (seq12912){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12912));
});})(g__9640__auto___12982))
;


var g__9640__auto___12986 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9640__auto___12986){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9554__auto__ = [];
var len__9547__auto___12987 = arguments.length;
var i__9548__auto___12988 = (0);
while(true){
if((i__9548__auto___12988 < len__9547__auto___12987)){
args__9554__auto__.push((arguments[i__9548__auto___12988]));

var G__12989 = (i__9548__auto___12988 + (1));
i__9548__auto___12988 = G__12989;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9640__auto___12986))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9640__auto___12986){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9640__auto___12986),args);
});})(g__9640__auto___12986))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9640__auto___12986){
return (function (seq12913){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12913));
});})(g__9640__auto___12986))
;

var g__9653__auto___13011 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9653__auto___13011){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13012 = arguments.length;
var i__9548__auto___13013 = (0);
while(true){
if((i__9548__auto___13013 < len__9547__auto___13012)){
args__9554__auto__.push((arguments[i__9548__auto___13013]));

var G__13014 = (i__9548__auto___13013 + (1));
i__9548__auto___13013 = G__13014;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13011))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13011){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13011);
});})(g__9653__auto___13011))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9653__auto___13011){
return (function (seq12990){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12990));
});})(g__9653__auto___13011))
;


var g__9653__auto___13015 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9653__auto___13015){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13016 = arguments.length;
var i__9548__auto___13017 = (0);
while(true){
if((i__9548__auto___13017 < len__9547__auto___13016)){
args__9554__auto__.push((arguments[i__9548__auto___13017]));

var G__13018 = (i__9548__auto___13017 + (1));
i__9548__auto___13017 = G__13018;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13015))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13015){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13015);
});})(g__9653__auto___13015))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9653__auto___13015){
return (function (seq12991){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12991));
});})(g__9653__auto___13015))
;


var g__9653__auto___13019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9653__auto___13019){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13020 = arguments.length;
var i__9548__auto___13021 = (0);
while(true){
if((i__9548__auto___13021 < len__9547__auto___13020)){
args__9554__auto__.push((arguments[i__9548__auto___13021]));

var G__13022 = (i__9548__auto___13021 + (1));
i__9548__auto___13021 = G__13022;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13019))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13019){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13019);
});})(g__9653__auto___13019))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9653__auto___13019){
return (function (seq12992){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12992));
});})(g__9653__auto___13019))
;


var g__9653__auto___13023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9653__auto___13023){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13024 = arguments.length;
var i__9548__auto___13025 = (0);
while(true){
if((i__9548__auto___13025 < len__9547__auto___13024)){
args__9554__auto__.push((arguments[i__9548__auto___13025]));

var G__13026 = (i__9548__auto___13025 + (1));
i__9548__auto___13025 = G__13026;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13023))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13023){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13023);
});})(g__9653__auto___13023))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9653__auto___13023){
return (function (seq12993){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12993));
});})(g__9653__auto___13023))
;


var g__9653__auto___13027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9653__auto___13027){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13028 = arguments.length;
var i__9548__auto___13029 = (0);
while(true){
if((i__9548__auto___13029 < len__9547__auto___13028)){
args__9554__auto__.push((arguments[i__9548__auto___13029]));

var G__13030 = (i__9548__auto___13029 + (1));
i__9548__auto___13029 = G__13030;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13027))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13027){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13027);
});})(g__9653__auto___13027))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9653__auto___13027){
return (function (seq12994){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12994));
});})(g__9653__auto___13027))
;


var g__9653__auto___13031 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9653__auto___13031){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13032 = arguments.length;
var i__9548__auto___13033 = (0);
while(true){
if((i__9548__auto___13033 < len__9547__auto___13032)){
args__9554__auto__.push((arguments[i__9548__auto___13033]));

var G__13034 = (i__9548__auto___13033 + (1));
i__9548__auto___13033 = G__13034;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13031))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13031){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13031);
});})(g__9653__auto___13031))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9653__auto___13031){
return (function (seq12995){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12995));
});})(g__9653__auto___13031))
;


var g__9653__auto___13035 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9653__auto___13035){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13036 = arguments.length;
var i__9548__auto___13037 = (0);
while(true){
if((i__9548__auto___13037 < len__9547__auto___13036)){
args__9554__auto__.push((arguments[i__9548__auto___13037]));

var G__13038 = (i__9548__auto___13037 + (1));
i__9548__auto___13037 = G__13038;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13035))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13035){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13035);
});})(g__9653__auto___13035))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9653__auto___13035){
return (function (seq12996){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12996));
});})(g__9653__auto___13035))
;


var g__9653__auto___13039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9653__auto___13039){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13040 = arguments.length;
var i__9548__auto___13041 = (0);
while(true){
if((i__9548__auto___13041 < len__9547__auto___13040)){
args__9554__auto__.push((arguments[i__9548__auto___13041]));

var G__13042 = (i__9548__auto___13041 + (1));
i__9548__auto___13041 = G__13042;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13039))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13039){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13039);
});})(g__9653__auto___13039))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9653__auto___13039){
return (function (seq12997){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12997));
});})(g__9653__auto___13039))
;


var g__9653__auto___13043 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9653__auto___13043){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13044 = arguments.length;
var i__9548__auto___13045 = (0);
while(true){
if((i__9548__auto___13045 < len__9547__auto___13044)){
args__9554__auto__.push((arguments[i__9548__auto___13045]));

var G__13046 = (i__9548__auto___13045 + (1));
i__9548__auto___13045 = G__13046;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13043))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13043){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13043);
});})(g__9653__auto___13043))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9653__auto___13043){
return (function (seq12998){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12998));
});})(g__9653__auto___13043))
;


var g__9653__auto___13047 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9653__auto___13047){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13048 = arguments.length;
var i__9548__auto___13049 = (0);
while(true){
if((i__9548__auto___13049 < len__9547__auto___13048)){
args__9554__auto__.push((arguments[i__9548__auto___13049]));

var G__13050 = (i__9548__auto___13049 + (1));
i__9548__auto___13049 = G__13050;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13047))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13047){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13047);
});})(g__9653__auto___13047))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9653__auto___13047){
return (function (seq12999){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12999));
});})(g__9653__auto___13047))
;


var g__9653__auto___13051 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9653__auto___13051){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13052 = arguments.length;
var i__9548__auto___13053 = (0);
while(true){
if((i__9548__auto___13053 < len__9547__auto___13052)){
args__9554__auto__.push((arguments[i__9548__auto___13053]));

var G__13054 = (i__9548__auto___13053 + (1));
i__9548__auto___13053 = G__13054;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13051))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13051){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13051);
});})(g__9653__auto___13051))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9653__auto___13051){
return (function (seq13000){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13000));
});})(g__9653__auto___13051))
;


var g__9653__auto___13055 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9653__auto___13055){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13056 = arguments.length;
var i__9548__auto___13057 = (0);
while(true){
if((i__9548__auto___13057 < len__9547__auto___13056)){
args__9554__auto__.push((arguments[i__9548__auto___13057]));

var G__13058 = (i__9548__auto___13057 + (1));
i__9548__auto___13057 = G__13058;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13055))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13055){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13055);
});})(g__9653__auto___13055))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9653__auto___13055){
return (function (seq13001){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13001));
});})(g__9653__auto___13055))
;


var g__9653__auto___13059 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9653__auto___13059){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13060 = arguments.length;
var i__9548__auto___13061 = (0);
while(true){
if((i__9548__auto___13061 < len__9547__auto___13060)){
args__9554__auto__.push((arguments[i__9548__auto___13061]));

var G__13062 = (i__9548__auto___13061 + (1));
i__9548__auto___13061 = G__13062;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13059))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13059){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13059);
});})(g__9653__auto___13059))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9653__auto___13059){
return (function (seq13002){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13002));
});})(g__9653__auto___13059))
;


var g__9653__auto___13063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9653__auto___13063){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13064 = arguments.length;
var i__9548__auto___13065 = (0);
while(true){
if((i__9548__auto___13065 < len__9547__auto___13064)){
args__9554__auto__.push((arguments[i__9548__auto___13065]));

var G__13066 = (i__9548__auto___13065 + (1));
i__9548__auto___13065 = G__13066;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13063))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13063){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13063);
});})(g__9653__auto___13063))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9653__auto___13063){
return (function (seq13003){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13003));
});})(g__9653__auto___13063))
;


var g__9653__auto___13067 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9653__auto___13067){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13068 = arguments.length;
var i__9548__auto___13069 = (0);
while(true){
if((i__9548__auto___13069 < len__9547__auto___13068)){
args__9554__auto__.push((arguments[i__9548__auto___13069]));

var G__13070 = (i__9548__auto___13069 + (1));
i__9548__auto___13069 = G__13070;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13067))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13067){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13067);
});})(g__9653__auto___13067))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9653__auto___13067){
return (function (seq13004){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13004));
});})(g__9653__auto___13067))
;


var g__9653__auto___13071 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9653__auto___13071){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13072 = arguments.length;
var i__9548__auto___13073 = (0);
while(true){
if((i__9548__auto___13073 < len__9547__auto___13072)){
args__9554__auto__.push((arguments[i__9548__auto___13073]));

var G__13074 = (i__9548__auto___13073 + (1));
i__9548__auto___13073 = G__13074;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13071))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13071){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13071);
});})(g__9653__auto___13071))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9653__auto___13071){
return (function (seq13005){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13005));
});})(g__9653__auto___13071))
;


var g__9653__auto___13075 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9653__auto___13075){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13076 = arguments.length;
var i__9548__auto___13077 = (0);
while(true){
if((i__9548__auto___13077 < len__9547__auto___13076)){
args__9554__auto__.push((arguments[i__9548__auto___13077]));

var G__13078 = (i__9548__auto___13077 + (1));
i__9548__auto___13077 = G__13078;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13075))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13075){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13075);
});})(g__9653__auto___13075))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9653__auto___13075){
return (function (seq13006){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13006));
});})(g__9653__auto___13075))
;


var g__9653__auto___13079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9653__auto___13079){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13080 = arguments.length;
var i__9548__auto___13081 = (0);
while(true){
if((i__9548__auto___13081 < len__9547__auto___13080)){
args__9554__auto__.push((arguments[i__9548__auto___13081]));

var G__13082 = (i__9548__auto___13081 + (1));
i__9548__auto___13081 = G__13082;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13079))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13079){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13079);
});})(g__9653__auto___13079))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9653__auto___13079){
return (function (seq13007){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13007));
});})(g__9653__auto___13079))
;


var g__9653__auto___13083 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9653__auto___13083){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13084 = arguments.length;
var i__9548__auto___13085 = (0);
while(true){
if((i__9548__auto___13085 < len__9547__auto___13084)){
args__9554__auto__.push((arguments[i__9548__auto___13085]));

var G__13086 = (i__9548__auto___13085 + (1));
i__9548__auto___13085 = G__13086;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13083))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13083){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13083);
});})(g__9653__auto___13083))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9653__auto___13083){
return (function (seq13008){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13008));
});})(g__9653__auto___13083))
;


var g__9653__auto___13087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9653__auto___13087){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13088 = arguments.length;
var i__9548__auto___13089 = (0);
while(true){
if((i__9548__auto___13089 < len__9547__auto___13088)){
args__9554__auto__.push((arguments[i__9548__auto___13089]));

var G__13090 = (i__9548__auto___13089 + (1));
i__9548__auto___13089 = G__13090;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13087))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13087){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13087);
});})(g__9653__auto___13087))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9653__auto___13087){
return (function (seq13009){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13009));
});})(g__9653__auto___13087))
;


var g__9653__auto___13091 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9653__auto___13091){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13092 = arguments.length;
var i__9548__auto___13093 = (0);
while(true){
if((i__9548__auto___13093 < len__9547__auto___13092)){
args__9554__auto__.push((arguments[i__9548__auto___13093]));

var G__13094 = (i__9548__auto___13093 + (1));
i__9548__auto___13093 = G__13094;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});})(g__9653__auto___13091))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9653__auto___13091){
return (function (args){
return cljs.core.deref.call(null,g__9653__auto___13091);
});})(g__9653__auto___13091))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9653__auto___13091){
return (function (seq13010){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13010));
});})(g__9653__auto___13091))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9554__auto__ = [];
var len__9547__auto___13097 = arguments.length;
var i__9548__auto___13098 = (0);
while(true){
if((i__9548__auto___13098 < len__9547__auto___13097)){
args__9554__auto__.push((arguments[i__9548__auto___13098]));

var G__13099 = (i__9548__auto___13098 + (1));
i__9548__auto___13098 = G__13099;
continue;
} else {
}
break;
}

var argseq__9555__auto__ = ((((0) < args__9554__auto__.length))?(new cljs.core.IndexedSeq(args__9554__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9555__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13095_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13095_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq13096){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13096));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__13100_SHARP_){
return (new Date(p1__13100_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
