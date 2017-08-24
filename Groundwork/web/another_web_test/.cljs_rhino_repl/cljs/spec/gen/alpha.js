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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8905__auto__,writer__8906__auto__,opt__8907__auto__){
return cljs.core._write.call(null,writer__8906__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__9451__auto__ = [];
var len__9444__auto___12725 = arguments.length;
var i__9445__auto___12726 = (0);
while(true){
if((i__9445__auto___12726 < len__9444__auto___12725)){
args__9451__auto__.push((arguments[i__9445__auto___12726]));

var G__12727 = (i__9445__auto___12726 + (1));
i__9445__auto___12726 = G__12727;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq12724){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12724));
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
var args__9451__auto__ = [];
var len__9444__auto___12729 = arguments.length;
var i__9445__auto___12730 = (0);
while(true){
if((i__9445__auto___12730 < len__9444__auto___12729)){
args__9451__auto__.push((arguments[i__9445__auto___12730]));

var G__12731 = (i__9445__auto___12730 + (1));
i__9445__auto___12730 = G__12731;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq12728){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12728));
});

var g_QMARK__12732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_12733 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12732){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12732))
,null));
var mkg_12734 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12732,g_12733){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12732,g_12733))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__12732,g_12733,mkg_12734){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12732).call(null,x);
});})(g_QMARK__12732,g_12733,mkg_12734))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__12732,g_12733,mkg_12734){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_12734).call(null,gfn);
});})(g_QMARK__12732,g_12733,mkg_12734))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__12732,g_12733,mkg_12734){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_12733).call(null,generator);
});})(g_QMARK__12732,g_12733,mkg_12734))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9537__auto___12754 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9537__auto___12754){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12755 = arguments.length;
var i__9445__auto___12756 = (0);
while(true){
if((i__9445__auto___12756 < len__9444__auto___12755)){
args__9451__auto__.push((arguments[i__9445__auto___12756]));

var G__12757 = (i__9445__auto___12756 + (1));
i__9445__auto___12756 = G__12757;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12754))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12754){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12754),args);
});})(g__9537__auto___12754))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9537__auto___12754){
return (function (seq12735){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12735));
});})(g__9537__auto___12754))
;


var g__9537__auto___12758 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9537__auto___12758){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12759 = arguments.length;
var i__9445__auto___12760 = (0);
while(true){
if((i__9445__auto___12760 < len__9444__auto___12759)){
args__9451__auto__.push((arguments[i__9445__auto___12760]));

var G__12761 = (i__9445__auto___12760 + (1));
i__9445__auto___12760 = G__12761;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12758))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12758){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12758),args);
});})(g__9537__auto___12758))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9537__auto___12758){
return (function (seq12736){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12736));
});})(g__9537__auto___12758))
;


var g__9537__auto___12762 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9537__auto___12762){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12763 = arguments.length;
var i__9445__auto___12764 = (0);
while(true){
if((i__9445__auto___12764 < len__9444__auto___12763)){
args__9451__auto__.push((arguments[i__9445__auto___12764]));

var G__12765 = (i__9445__auto___12764 + (1));
i__9445__auto___12764 = G__12765;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12762))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12762){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12762),args);
});})(g__9537__auto___12762))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9537__auto___12762){
return (function (seq12737){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12737));
});})(g__9537__auto___12762))
;


var g__9537__auto___12766 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9537__auto___12766){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12767 = arguments.length;
var i__9445__auto___12768 = (0);
while(true){
if((i__9445__auto___12768 < len__9444__auto___12767)){
args__9451__auto__.push((arguments[i__9445__auto___12768]));

var G__12769 = (i__9445__auto___12768 + (1));
i__9445__auto___12768 = G__12769;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12766))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12766){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12766),args);
});})(g__9537__auto___12766))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9537__auto___12766){
return (function (seq12738){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12738));
});})(g__9537__auto___12766))
;


var g__9537__auto___12770 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9537__auto___12770){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12771 = arguments.length;
var i__9445__auto___12772 = (0);
while(true){
if((i__9445__auto___12772 < len__9444__auto___12771)){
args__9451__auto__.push((arguments[i__9445__auto___12772]));

var G__12773 = (i__9445__auto___12772 + (1));
i__9445__auto___12772 = G__12773;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12770))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12770){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12770),args);
});})(g__9537__auto___12770))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9537__auto___12770){
return (function (seq12739){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12739));
});})(g__9537__auto___12770))
;


var g__9537__auto___12774 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9537__auto___12774){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12775 = arguments.length;
var i__9445__auto___12776 = (0);
while(true){
if((i__9445__auto___12776 < len__9444__auto___12775)){
args__9451__auto__.push((arguments[i__9445__auto___12776]));

var G__12777 = (i__9445__auto___12776 + (1));
i__9445__auto___12776 = G__12777;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12774))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12774){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12774),args);
});})(g__9537__auto___12774))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9537__auto___12774){
return (function (seq12740){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12740));
});})(g__9537__auto___12774))
;


var g__9537__auto___12778 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9537__auto___12778){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12779 = arguments.length;
var i__9445__auto___12780 = (0);
while(true){
if((i__9445__auto___12780 < len__9444__auto___12779)){
args__9451__auto__.push((arguments[i__9445__auto___12780]));

var G__12781 = (i__9445__auto___12780 + (1));
i__9445__auto___12780 = G__12781;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12778))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12778){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12778),args);
});})(g__9537__auto___12778))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9537__auto___12778){
return (function (seq12741){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12741));
});})(g__9537__auto___12778))
;


var g__9537__auto___12782 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9537__auto___12782){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12783 = arguments.length;
var i__9445__auto___12784 = (0);
while(true){
if((i__9445__auto___12784 < len__9444__auto___12783)){
args__9451__auto__.push((arguments[i__9445__auto___12784]));

var G__12785 = (i__9445__auto___12784 + (1));
i__9445__auto___12784 = G__12785;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12782))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12782){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12782),args);
});})(g__9537__auto___12782))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9537__auto___12782){
return (function (seq12742){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12742));
});})(g__9537__auto___12782))
;


var g__9537__auto___12786 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9537__auto___12786){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12787 = arguments.length;
var i__9445__auto___12788 = (0);
while(true){
if((i__9445__auto___12788 < len__9444__auto___12787)){
args__9451__auto__.push((arguments[i__9445__auto___12788]));

var G__12789 = (i__9445__auto___12788 + (1));
i__9445__auto___12788 = G__12789;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12786))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12786){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12786),args);
});})(g__9537__auto___12786))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9537__auto___12786){
return (function (seq12743){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12743));
});})(g__9537__auto___12786))
;


var g__9537__auto___12790 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9537__auto___12790){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12791 = arguments.length;
var i__9445__auto___12792 = (0);
while(true){
if((i__9445__auto___12792 < len__9444__auto___12791)){
args__9451__auto__.push((arguments[i__9445__auto___12792]));

var G__12793 = (i__9445__auto___12792 + (1));
i__9445__auto___12792 = G__12793;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12790))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12790){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12790),args);
});})(g__9537__auto___12790))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9537__auto___12790){
return (function (seq12744){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12744));
});})(g__9537__auto___12790))
;


var g__9537__auto___12794 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9537__auto___12794){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12795 = arguments.length;
var i__9445__auto___12796 = (0);
while(true){
if((i__9445__auto___12796 < len__9444__auto___12795)){
args__9451__auto__.push((arguments[i__9445__auto___12796]));

var G__12797 = (i__9445__auto___12796 + (1));
i__9445__auto___12796 = G__12797;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12794))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12794){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12794),args);
});})(g__9537__auto___12794))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9537__auto___12794){
return (function (seq12745){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12745));
});})(g__9537__auto___12794))
;


var g__9537__auto___12798 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9537__auto___12798){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12799 = arguments.length;
var i__9445__auto___12800 = (0);
while(true){
if((i__9445__auto___12800 < len__9444__auto___12799)){
args__9451__auto__.push((arguments[i__9445__auto___12800]));

var G__12801 = (i__9445__auto___12800 + (1));
i__9445__auto___12800 = G__12801;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12798))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12798){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12798),args);
});})(g__9537__auto___12798))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9537__auto___12798){
return (function (seq12746){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12746));
});})(g__9537__auto___12798))
;


var g__9537__auto___12802 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9537__auto___12802){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12803 = arguments.length;
var i__9445__auto___12804 = (0);
while(true){
if((i__9445__auto___12804 < len__9444__auto___12803)){
args__9451__auto__.push((arguments[i__9445__auto___12804]));

var G__12805 = (i__9445__auto___12804 + (1));
i__9445__auto___12804 = G__12805;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12802))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12802){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12802),args);
});})(g__9537__auto___12802))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9537__auto___12802){
return (function (seq12747){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12747));
});})(g__9537__auto___12802))
;


var g__9537__auto___12806 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9537__auto___12806){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12807 = arguments.length;
var i__9445__auto___12808 = (0);
while(true){
if((i__9445__auto___12808 < len__9444__auto___12807)){
args__9451__auto__.push((arguments[i__9445__auto___12808]));

var G__12809 = (i__9445__auto___12808 + (1));
i__9445__auto___12808 = G__12809;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12806))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12806){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12806),args);
});})(g__9537__auto___12806))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9537__auto___12806){
return (function (seq12748){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12748));
});})(g__9537__auto___12806))
;


var g__9537__auto___12810 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9537__auto___12810){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12811 = arguments.length;
var i__9445__auto___12812 = (0);
while(true){
if((i__9445__auto___12812 < len__9444__auto___12811)){
args__9451__auto__.push((arguments[i__9445__auto___12812]));

var G__12813 = (i__9445__auto___12812 + (1));
i__9445__auto___12812 = G__12813;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12810))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12810){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12810),args);
});})(g__9537__auto___12810))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9537__auto___12810){
return (function (seq12749){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12749));
});})(g__9537__auto___12810))
;


var g__9537__auto___12814 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9537__auto___12814){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12815 = arguments.length;
var i__9445__auto___12816 = (0);
while(true){
if((i__9445__auto___12816 < len__9444__auto___12815)){
args__9451__auto__.push((arguments[i__9445__auto___12816]));

var G__12817 = (i__9445__auto___12816 + (1));
i__9445__auto___12816 = G__12817;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12814))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12814){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12814),args);
});})(g__9537__auto___12814))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9537__auto___12814){
return (function (seq12750){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12750));
});})(g__9537__auto___12814))
;


var g__9537__auto___12818 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9537__auto___12818){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12819 = arguments.length;
var i__9445__auto___12820 = (0);
while(true){
if((i__9445__auto___12820 < len__9444__auto___12819)){
args__9451__auto__.push((arguments[i__9445__auto___12820]));

var G__12821 = (i__9445__auto___12820 + (1));
i__9445__auto___12820 = G__12821;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12818))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12818){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12818),args);
});})(g__9537__auto___12818))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9537__auto___12818){
return (function (seq12751){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12751));
});})(g__9537__auto___12818))
;


var g__9537__auto___12822 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9537__auto___12822){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12823 = arguments.length;
var i__9445__auto___12824 = (0);
while(true){
if((i__9445__auto___12824 < len__9444__auto___12823)){
args__9451__auto__.push((arguments[i__9445__auto___12824]));

var G__12825 = (i__9445__auto___12824 + (1));
i__9445__auto___12824 = G__12825;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12822))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12822){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12822),args);
});})(g__9537__auto___12822))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9537__auto___12822){
return (function (seq12752){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12752));
});})(g__9537__auto___12822))
;


var g__9537__auto___12826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9537__auto___12826){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12827 = arguments.length;
var i__9445__auto___12828 = (0);
while(true){
if((i__9445__auto___12828 < len__9444__auto___12827)){
args__9451__auto__.push((arguments[i__9445__auto___12828]));

var G__12829 = (i__9445__auto___12828 + (1));
i__9445__auto___12828 = G__12829;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9537__auto___12826))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9537__auto___12826){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9537__auto___12826),args);
});})(g__9537__auto___12826))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9537__auto___12826){
return (function (seq12753){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12753));
});})(g__9537__auto___12826))
;

var g__9550__auto___12851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9550__auto___12851){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12852 = arguments.length;
var i__9445__auto___12853 = (0);
while(true){
if((i__9445__auto___12853 < len__9444__auto___12852)){
args__9451__auto__.push((arguments[i__9445__auto___12853]));

var G__12854 = (i__9445__auto___12853 + (1));
i__9445__auto___12853 = G__12854;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12851))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12851){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12851);
});})(g__9550__auto___12851))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9550__auto___12851){
return (function (seq12830){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12830));
});})(g__9550__auto___12851))
;


var g__9550__auto___12855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9550__auto___12855){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12856 = arguments.length;
var i__9445__auto___12857 = (0);
while(true){
if((i__9445__auto___12857 < len__9444__auto___12856)){
args__9451__auto__.push((arguments[i__9445__auto___12857]));

var G__12858 = (i__9445__auto___12857 + (1));
i__9445__auto___12857 = G__12858;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12855))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12855){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12855);
});})(g__9550__auto___12855))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9550__auto___12855){
return (function (seq12831){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12831));
});})(g__9550__auto___12855))
;


var g__9550__auto___12859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9550__auto___12859){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12860 = arguments.length;
var i__9445__auto___12861 = (0);
while(true){
if((i__9445__auto___12861 < len__9444__auto___12860)){
args__9451__auto__.push((arguments[i__9445__auto___12861]));

var G__12862 = (i__9445__auto___12861 + (1));
i__9445__auto___12861 = G__12862;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12859))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12859){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12859);
});})(g__9550__auto___12859))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9550__auto___12859){
return (function (seq12832){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12832));
});})(g__9550__auto___12859))
;


var g__9550__auto___12863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9550__auto___12863){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12864 = arguments.length;
var i__9445__auto___12865 = (0);
while(true){
if((i__9445__auto___12865 < len__9444__auto___12864)){
args__9451__auto__.push((arguments[i__9445__auto___12865]));

var G__12866 = (i__9445__auto___12865 + (1));
i__9445__auto___12865 = G__12866;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12863))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12863){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12863);
});})(g__9550__auto___12863))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9550__auto___12863){
return (function (seq12833){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12833));
});})(g__9550__auto___12863))
;


var g__9550__auto___12867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9550__auto___12867){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12868 = arguments.length;
var i__9445__auto___12869 = (0);
while(true){
if((i__9445__auto___12869 < len__9444__auto___12868)){
args__9451__auto__.push((arguments[i__9445__auto___12869]));

var G__12870 = (i__9445__auto___12869 + (1));
i__9445__auto___12869 = G__12870;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12867))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12867){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12867);
});})(g__9550__auto___12867))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9550__auto___12867){
return (function (seq12834){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12834));
});})(g__9550__auto___12867))
;


var g__9550__auto___12871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9550__auto___12871){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12872 = arguments.length;
var i__9445__auto___12873 = (0);
while(true){
if((i__9445__auto___12873 < len__9444__auto___12872)){
args__9451__auto__.push((arguments[i__9445__auto___12873]));

var G__12874 = (i__9445__auto___12873 + (1));
i__9445__auto___12873 = G__12874;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12871))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12871){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12871);
});})(g__9550__auto___12871))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9550__auto___12871){
return (function (seq12835){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12835));
});})(g__9550__auto___12871))
;


var g__9550__auto___12875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9550__auto___12875){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12876 = arguments.length;
var i__9445__auto___12877 = (0);
while(true){
if((i__9445__auto___12877 < len__9444__auto___12876)){
args__9451__auto__.push((arguments[i__9445__auto___12877]));

var G__12878 = (i__9445__auto___12877 + (1));
i__9445__auto___12877 = G__12878;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12875))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12875){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12875);
});})(g__9550__auto___12875))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9550__auto___12875){
return (function (seq12836){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12836));
});})(g__9550__auto___12875))
;


var g__9550__auto___12879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9550__auto___12879){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12880 = arguments.length;
var i__9445__auto___12881 = (0);
while(true){
if((i__9445__auto___12881 < len__9444__auto___12880)){
args__9451__auto__.push((arguments[i__9445__auto___12881]));

var G__12882 = (i__9445__auto___12881 + (1));
i__9445__auto___12881 = G__12882;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12879))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12879){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12879);
});})(g__9550__auto___12879))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9550__auto___12879){
return (function (seq12837){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12837));
});})(g__9550__auto___12879))
;


var g__9550__auto___12883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9550__auto___12883){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12884 = arguments.length;
var i__9445__auto___12885 = (0);
while(true){
if((i__9445__auto___12885 < len__9444__auto___12884)){
args__9451__auto__.push((arguments[i__9445__auto___12885]));

var G__12886 = (i__9445__auto___12885 + (1));
i__9445__auto___12885 = G__12886;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12883))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12883){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12883);
});})(g__9550__auto___12883))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9550__auto___12883){
return (function (seq12838){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12838));
});})(g__9550__auto___12883))
;


var g__9550__auto___12887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9550__auto___12887){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12888 = arguments.length;
var i__9445__auto___12889 = (0);
while(true){
if((i__9445__auto___12889 < len__9444__auto___12888)){
args__9451__auto__.push((arguments[i__9445__auto___12889]));

var G__12890 = (i__9445__auto___12889 + (1));
i__9445__auto___12889 = G__12890;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12887))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12887){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12887);
});})(g__9550__auto___12887))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9550__auto___12887){
return (function (seq12839){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12839));
});})(g__9550__auto___12887))
;


var g__9550__auto___12891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9550__auto___12891){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12892 = arguments.length;
var i__9445__auto___12893 = (0);
while(true){
if((i__9445__auto___12893 < len__9444__auto___12892)){
args__9451__auto__.push((arguments[i__9445__auto___12893]));

var G__12894 = (i__9445__auto___12893 + (1));
i__9445__auto___12893 = G__12894;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12891))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12891){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12891);
});})(g__9550__auto___12891))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9550__auto___12891){
return (function (seq12840){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12840));
});})(g__9550__auto___12891))
;


var g__9550__auto___12895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9550__auto___12895){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12896 = arguments.length;
var i__9445__auto___12897 = (0);
while(true){
if((i__9445__auto___12897 < len__9444__auto___12896)){
args__9451__auto__.push((arguments[i__9445__auto___12897]));

var G__12898 = (i__9445__auto___12897 + (1));
i__9445__auto___12897 = G__12898;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12895))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12895){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12895);
});})(g__9550__auto___12895))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9550__auto___12895){
return (function (seq12841){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12841));
});})(g__9550__auto___12895))
;


var g__9550__auto___12899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9550__auto___12899){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12900 = arguments.length;
var i__9445__auto___12901 = (0);
while(true){
if((i__9445__auto___12901 < len__9444__auto___12900)){
args__9451__auto__.push((arguments[i__9445__auto___12901]));

var G__12902 = (i__9445__auto___12901 + (1));
i__9445__auto___12901 = G__12902;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12899))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12899){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12899);
});})(g__9550__auto___12899))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9550__auto___12899){
return (function (seq12842){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12842));
});})(g__9550__auto___12899))
;


var g__9550__auto___12903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9550__auto___12903){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12904 = arguments.length;
var i__9445__auto___12905 = (0);
while(true){
if((i__9445__auto___12905 < len__9444__auto___12904)){
args__9451__auto__.push((arguments[i__9445__auto___12905]));

var G__12906 = (i__9445__auto___12905 + (1));
i__9445__auto___12905 = G__12906;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12903))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12903){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12903);
});})(g__9550__auto___12903))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9550__auto___12903){
return (function (seq12843){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12843));
});})(g__9550__auto___12903))
;


var g__9550__auto___12907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9550__auto___12907){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12908 = arguments.length;
var i__9445__auto___12909 = (0);
while(true){
if((i__9445__auto___12909 < len__9444__auto___12908)){
args__9451__auto__.push((arguments[i__9445__auto___12909]));

var G__12910 = (i__9445__auto___12909 + (1));
i__9445__auto___12909 = G__12910;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12907))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12907){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12907);
});})(g__9550__auto___12907))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9550__auto___12907){
return (function (seq12844){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12844));
});})(g__9550__auto___12907))
;


var g__9550__auto___12911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9550__auto___12911){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12912 = arguments.length;
var i__9445__auto___12913 = (0);
while(true){
if((i__9445__auto___12913 < len__9444__auto___12912)){
args__9451__auto__.push((arguments[i__9445__auto___12913]));

var G__12914 = (i__9445__auto___12913 + (1));
i__9445__auto___12913 = G__12914;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12911))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12911){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12911);
});})(g__9550__auto___12911))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9550__auto___12911){
return (function (seq12845){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12845));
});})(g__9550__auto___12911))
;


var g__9550__auto___12915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9550__auto___12915){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12916 = arguments.length;
var i__9445__auto___12917 = (0);
while(true){
if((i__9445__auto___12917 < len__9444__auto___12916)){
args__9451__auto__.push((arguments[i__9445__auto___12917]));

var G__12918 = (i__9445__auto___12917 + (1));
i__9445__auto___12917 = G__12918;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12915))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12915){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12915);
});})(g__9550__auto___12915))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9550__auto___12915){
return (function (seq12846){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12846));
});})(g__9550__auto___12915))
;


var g__9550__auto___12919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9550__auto___12919){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12920 = arguments.length;
var i__9445__auto___12921 = (0);
while(true){
if((i__9445__auto___12921 < len__9444__auto___12920)){
args__9451__auto__.push((arguments[i__9445__auto___12921]));

var G__12922 = (i__9445__auto___12921 + (1));
i__9445__auto___12921 = G__12922;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12919))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12919){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12919);
});})(g__9550__auto___12919))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9550__auto___12919){
return (function (seq12847){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12847));
});})(g__9550__auto___12919))
;


var g__9550__auto___12923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9550__auto___12923){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12924 = arguments.length;
var i__9445__auto___12925 = (0);
while(true){
if((i__9445__auto___12925 < len__9444__auto___12924)){
args__9451__auto__.push((arguments[i__9445__auto___12925]));

var G__12926 = (i__9445__auto___12925 + (1));
i__9445__auto___12925 = G__12926;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12923))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12923){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12923);
});})(g__9550__auto___12923))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9550__auto___12923){
return (function (seq12848){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12848));
});})(g__9550__auto___12923))
;


var g__9550__auto___12927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9550__auto___12927){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12928 = arguments.length;
var i__9445__auto___12929 = (0);
while(true){
if((i__9445__auto___12929 < len__9444__auto___12928)){
args__9451__auto__.push((arguments[i__9445__auto___12929]));

var G__12930 = (i__9445__auto___12929 + (1));
i__9445__auto___12929 = G__12930;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12927))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12927){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12927);
});})(g__9550__auto___12927))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9550__auto___12927){
return (function (seq12849){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12849));
});})(g__9550__auto___12927))
;


var g__9550__auto___12931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9550__auto___12931){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12932 = arguments.length;
var i__9445__auto___12933 = (0);
while(true){
if((i__9445__auto___12933 < len__9444__auto___12932)){
args__9451__auto__.push((arguments[i__9445__auto___12933]));

var G__12934 = (i__9445__auto___12933 + (1));
i__9445__auto___12933 = G__12934;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});})(g__9550__auto___12931))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9550__auto___12931){
return (function (args){
return cljs.core.deref.call(null,g__9550__auto___12931);
});})(g__9550__auto___12931))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9550__auto___12931){
return (function (seq12850){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12850));
});})(g__9550__auto___12931))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9451__auto__ = [];
var len__9444__auto___12937 = arguments.length;
var i__9445__auto___12938 = (0);
while(true){
if((i__9445__auto___12938 < len__9444__auto___12937)){
args__9451__auto__.push((arguments[i__9445__auto___12938]));

var G__12939 = (i__9445__auto___12938 + (1));
i__9445__auto___12938 = G__12939;
continue;
} else {
}
break;
}

var argseq__9452__auto__ = ((((0) < args__9451__auto__.length))?(new cljs.core.IndexedSeq(args__9451__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9452__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__12935_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12935_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq12936){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12936));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__12940_SHARP_){
return (new Date(p1__12940_SHARP_));
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
