// Compiled by ClojureScript 1.9.946 {}
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8603__auto__,writer__8604__auto__,opt__8605__auto__){
return cljs.core._write.call(null,writer__8604__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13641 = arguments.length;
var i__9150__auto___13642 = (0);
while(true){
if((i__9150__auto___13642 < len__9149__auto___13641)){
args__9156__auto__.push((arguments[i__9150__auto___13642]));

var G__13643 = (i__9150__auto___13642 + (1));
i__9150__auto___13642 = G__13643;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13640){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13640));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13645 = arguments.length;
var i__9150__auto___13646 = (0);
while(true){
if((i__9150__auto___13646 < len__9149__auto___13645)){
args__9156__auto__.push((arguments[i__9150__auto___13646]));

var G__13647 = (i__9150__auto___13646 + (1));
i__9150__auto___13646 = G__13647;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13644){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13644));
});

var g_QMARK__13648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_13649 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13648){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__13648))
,null));
var mkg_13650 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13648,g_13649){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__13648,g_13649))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13648,g_13649,mkg_13650){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13648).call(null,x);
});})(g_QMARK__13648,g_13649,mkg_13650))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13648,g_13649,mkg_13650){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_13650).call(null,gfn);
});})(g_QMARK__13648,g_13649,mkg_13650))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13648,g_13649,mkg_13650){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_13649).call(null,generator);
});})(g_QMARK__13648,g_13649,mkg_13650))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__13612__auto___13670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__13612__auto___13670){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13671 = arguments.length;
var i__9150__auto___13672 = (0);
while(true){
if((i__9150__auto___13672 < len__9149__auto___13671)){
args__9156__auto__.push((arguments[i__9150__auto___13672]));

var G__13673 = (i__9150__auto___13672 + (1));
i__9150__auto___13672 = G__13673;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13670))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13670),args);
});})(g__13612__auto___13670))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__13612__auto___13670){
return (function (seq13651){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13651));
});})(g__13612__auto___13670))
;


var g__13612__auto___13674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__13612__auto___13674){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13675 = arguments.length;
var i__9150__auto___13676 = (0);
while(true){
if((i__9150__auto___13676 < len__9149__auto___13675)){
args__9156__auto__.push((arguments[i__9150__auto___13676]));

var G__13677 = (i__9150__auto___13676 + (1));
i__9150__auto___13676 = G__13677;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13674))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13674),args);
});})(g__13612__auto___13674))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__13612__auto___13674){
return (function (seq13652){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13652));
});})(g__13612__auto___13674))
;


var g__13612__auto___13678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__13612__auto___13678){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13679 = arguments.length;
var i__9150__auto___13680 = (0);
while(true){
if((i__9150__auto___13680 < len__9149__auto___13679)){
args__9156__auto__.push((arguments[i__9150__auto___13680]));

var G__13681 = (i__9150__auto___13680 + (1));
i__9150__auto___13680 = G__13681;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13678))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13678),args);
});})(g__13612__auto___13678))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__13612__auto___13678){
return (function (seq13653){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13653));
});})(g__13612__auto___13678))
;


var g__13612__auto___13682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__13612__auto___13682){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13683 = arguments.length;
var i__9150__auto___13684 = (0);
while(true){
if((i__9150__auto___13684 < len__9149__auto___13683)){
args__9156__auto__.push((arguments[i__9150__auto___13684]));

var G__13685 = (i__9150__auto___13684 + (1));
i__9150__auto___13684 = G__13685;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13682))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13682),args);
});})(g__13612__auto___13682))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__13612__auto___13682){
return (function (seq13654){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13654));
});})(g__13612__auto___13682))
;


var g__13612__auto___13686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__13612__auto___13686){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13687 = arguments.length;
var i__9150__auto___13688 = (0);
while(true){
if((i__9150__auto___13688 < len__9149__auto___13687)){
args__9156__auto__.push((arguments[i__9150__auto___13688]));

var G__13689 = (i__9150__auto___13688 + (1));
i__9150__auto___13688 = G__13689;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13686))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13686),args);
});})(g__13612__auto___13686))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__13612__auto___13686){
return (function (seq13655){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13655));
});})(g__13612__auto___13686))
;


var g__13612__auto___13690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__13612__auto___13690){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13691 = arguments.length;
var i__9150__auto___13692 = (0);
while(true){
if((i__9150__auto___13692 < len__9149__auto___13691)){
args__9156__auto__.push((arguments[i__9150__auto___13692]));

var G__13693 = (i__9150__auto___13692 + (1));
i__9150__auto___13692 = G__13693;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13690))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13690),args);
});})(g__13612__auto___13690))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__13612__auto___13690){
return (function (seq13656){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13656));
});})(g__13612__auto___13690))
;


var g__13612__auto___13694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__13612__auto___13694){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13695 = arguments.length;
var i__9150__auto___13696 = (0);
while(true){
if((i__9150__auto___13696 < len__9149__auto___13695)){
args__9156__auto__.push((arguments[i__9150__auto___13696]));

var G__13697 = (i__9150__auto___13696 + (1));
i__9150__auto___13696 = G__13697;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13694))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13694),args);
});})(g__13612__auto___13694))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__13612__auto___13694){
return (function (seq13657){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13657));
});})(g__13612__auto___13694))
;


var g__13612__auto___13698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__13612__auto___13698){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13699 = arguments.length;
var i__9150__auto___13700 = (0);
while(true){
if((i__9150__auto___13700 < len__9149__auto___13699)){
args__9156__auto__.push((arguments[i__9150__auto___13700]));

var G__13701 = (i__9150__auto___13700 + (1));
i__9150__auto___13700 = G__13701;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13698))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13698),args);
});})(g__13612__auto___13698))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__13612__auto___13698){
return (function (seq13658){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13658));
});})(g__13612__auto___13698))
;


var g__13612__auto___13702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__13612__auto___13702){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13703 = arguments.length;
var i__9150__auto___13704 = (0);
while(true){
if((i__9150__auto___13704 < len__9149__auto___13703)){
args__9156__auto__.push((arguments[i__9150__auto___13704]));

var G__13705 = (i__9150__auto___13704 + (1));
i__9150__auto___13704 = G__13705;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13702))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13702),args);
});})(g__13612__auto___13702))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__13612__auto___13702){
return (function (seq13659){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13659));
});})(g__13612__auto___13702))
;


var g__13612__auto___13706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__13612__auto___13706){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13707 = arguments.length;
var i__9150__auto___13708 = (0);
while(true){
if((i__9150__auto___13708 < len__9149__auto___13707)){
args__9156__auto__.push((arguments[i__9150__auto___13708]));

var G__13709 = (i__9150__auto___13708 + (1));
i__9150__auto___13708 = G__13709;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13706))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13706),args);
});})(g__13612__auto___13706))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__13612__auto___13706){
return (function (seq13660){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13660));
});})(g__13612__auto___13706))
;


var g__13612__auto___13710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__13612__auto___13710){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13711 = arguments.length;
var i__9150__auto___13712 = (0);
while(true){
if((i__9150__auto___13712 < len__9149__auto___13711)){
args__9156__auto__.push((arguments[i__9150__auto___13712]));

var G__13713 = (i__9150__auto___13712 + (1));
i__9150__auto___13712 = G__13713;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13710))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13710),args);
});})(g__13612__auto___13710))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__13612__auto___13710){
return (function (seq13661){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13661));
});})(g__13612__auto___13710))
;


var g__13612__auto___13714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__13612__auto___13714){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13715 = arguments.length;
var i__9150__auto___13716 = (0);
while(true){
if((i__9150__auto___13716 < len__9149__auto___13715)){
args__9156__auto__.push((arguments[i__9150__auto___13716]));

var G__13717 = (i__9150__auto___13716 + (1));
i__9150__auto___13716 = G__13717;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13714))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13714),args);
});})(g__13612__auto___13714))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__13612__auto___13714){
return (function (seq13662){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13662));
});})(g__13612__auto___13714))
;


var g__13612__auto___13718 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__13612__auto___13718){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13719 = arguments.length;
var i__9150__auto___13720 = (0);
while(true){
if((i__9150__auto___13720 < len__9149__auto___13719)){
args__9156__auto__.push((arguments[i__9150__auto___13720]));

var G__13721 = (i__9150__auto___13720 + (1));
i__9150__auto___13720 = G__13721;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13718))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13718),args);
});})(g__13612__auto___13718))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__13612__auto___13718){
return (function (seq13663){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13663));
});})(g__13612__auto___13718))
;


var g__13612__auto___13722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__13612__auto___13722){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13723 = arguments.length;
var i__9150__auto___13724 = (0);
while(true){
if((i__9150__auto___13724 < len__9149__auto___13723)){
args__9156__auto__.push((arguments[i__9150__auto___13724]));

var G__13725 = (i__9150__auto___13724 + (1));
i__9150__auto___13724 = G__13725;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13722))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13722),args);
});})(g__13612__auto___13722))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__13612__auto___13722){
return (function (seq13664){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13664));
});})(g__13612__auto___13722))
;


var g__13612__auto___13726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__13612__auto___13726){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13727 = arguments.length;
var i__9150__auto___13728 = (0);
while(true){
if((i__9150__auto___13728 < len__9149__auto___13727)){
args__9156__auto__.push((arguments[i__9150__auto___13728]));

var G__13729 = (i__9150__auto___13728 + (1));
i__9150__auto___13728 = G__13729;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13726))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13726){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13726),args);
});})(g__13612__auto___13726))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__13612__auto___13726){
return (function (seq13665){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13665));
});})(g__13612__auto___13726))
;


var g__13612__auto___13730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__13612__auto___13730){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13731 = arguments.length;
var i__9150__auto___13732 = (0);
while(true){
if((i__9150__auto___13732 < len__9149__auto___13731)){
args__9156__auto__.push((arguments[i__9150__auto___13732]));

var G__13733 = (i__9150__auto___13732 + (1));
i__9150__auto___13732 = G__13733;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13730))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13730),args);
});})(g__13612__auto___13730))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__13612__auto___13730){
return (function (seq13666){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13666));
});})(g__13612__auto___13730))
;


var g__13612__auto___13734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__13612__auto___13734){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13735 = arguments.length;
var i__9150__auto___13736 = (0);
while(true){
if((i__9150__auto___13736 < len__9149__auto___13735)){
args__9156__auto__.push((arguments[i__9150__auto___13736]));

var G__13737 = (i__9150__auto___13736 + (1));
i__9150__auto___13736 = G__13737;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13734))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13734){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13734),args);
});})(g__13612__auto___13734))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__13612__auto___13734){
return (function (seq13667){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13667));
});})(g__13612__auto___13734))
;


var g__13612__auto___13738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__13612__auto___13738){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13739 = arguments.length;
var i__9150__auto___13740 = (0);
while(true){
if((i__9150__auto___13740 < len__9149__auto___13739)){
args__9156__auto__.push((arguments[i__9150__auto___13740]));

var G__13741 = (i__9150__auto___13740 + (1));
i__9150__auto___13740 = G__13741;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13738))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13738),args);
});})(g__13612__auto___13738))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__13612__auto___13738){
return (function (seq13668){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13668));
});})(g__13612__auto___13738))
;


var g__13612__auto___13742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__13612__auto___13742){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13743 = arguments.length;
var i__9150__auto___13744 = (0);
while(true){
if((i__9150__auto___13744 < len__9149__auto___13743)){
args__9156__auto__.push((arguments[i__9150__auto___13744]));

var G__13745 = (i__9150__auto___13744 + (1));
i__9150__auto___13744 = G__13745;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13612__auto___13742))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13612__auto___13742){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13612__auto___13742),args);
});})(g__13612__auto___13742))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__13612__auto___13742){
return (function (seq13669){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13669));
});})(g__13612__auto___13742))
;

var g__13625__auto___13767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__13625__auto___13767){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13768 = arguments.length;
var i__9150__auto___13769 = (0);
while(true){
if((i__9150__auto___13769 < len__9149__auto___13768)){
args__9156__auto__.push((arguments[i__9150__auto___13769]));

var G__13770 = (i__9150__auto___13769 + (1));
i__9150__auto___13769 = G__13770;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13767))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13767){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13767);
});})(g__13625__auto___13767))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__13625__auto___13767){
return (function (seq13746){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13746));
});})(g__13625__auto___13767))
;


var g__13625__auto___13771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__13625__auto___13771){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13772 = arguments.length;
var i__9150__auto___13773 = (0);
while(true){
if((i__9150__auto___13773 < len__9149__auto___13772)){
args__9156__auto__.push((arguments[i__9150__auto___13773]));

var G__13774 = (i__9150__auto___13773 + (1));
i__9150__auto___13773 = G__13774;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13771))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13771){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13771);
});})(g__13625__auto___13771))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__13625__auto___13771){
return (function (seq13747){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13747));
});})(g__13625__auto___13771))
;


var g__13625__auto___13775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__13625__auto___13775){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13776 = arguments.length;
var i__9150__auto___13777 = (0);
while(true){
if((i__9150__auto___13777 < len__9149__auto___13776)){
args__9156__auto__.push((arguments[i__9150__auto___13777]));

var G__13778 = (i__9150__auto___13777 + (1));
i__9150__auto___13777 = G__13778;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13775))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13775){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13775);
});})(g__13625__auto___13775))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__13625__auto___13775){
return (function (seq13748){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13748));
});})(g__13625__auto___13775))
;


var g__13625__auto___13779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__13625__auto___13779){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13780 = arguments.length;
var i__9150__auto___13781 = (0);
while(true){
if((i__9150__auto___13781 < len__9149__auto___13780)){
args__9156__auto__.push((arguments[i__9150__auto___13781]));

var G__13782 = (i__9150__auto___13781 + (1));
i__9150__auto___13781 = G__13782;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13779))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13779){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13779);
});})(g__13625__auto___13779))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__13625__auto___13779){
return (function (seq13749){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13749));
});})(g__13625__auto___13779))
;


var g__13625__auto___13783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__13625__auto___13783){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13784 = arguments.length;
var i__9150__auto___13785 = (0);
while(true){
if((i__9150__auto___13785 < len__9149__auto___13784)){
args__9156__auto__.push((arguments[i__9150__auto___13785]));

var G__13786 = (i__9150__auto___13785 + (1));
i__9150__auto___13785 = G__13786;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13783))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13783){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13783);
});})(g__13625__auto___13783))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__13625__auto___13783){
return (function (seq13750){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13750));
});})(g__13625__auto___13783))
;


var g__13625__auto___13787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__13625__auto___13787){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13788 = arguments.length;
var i__9150__auto___13789 = (0);
while(true){
if((i__9150__auto___13789 < len__9149__auto___13788)){
args__9156__auto__.push((arguments[i__9150__auto___13789]));

var G__13790 = (i__9150__auto___13789 + (1));
i__9150__auto___13789 = G__13790;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13787))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13787){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13787);
});})(g__13625__auto___13787))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__13625__auto___13787){
return (function (seq13751){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13751));
});})(g__13625__auto___13787))
;


var g__13625__auto___13791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__13625__auto___13791){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13792 = arguments.length;
var i__9150__auto___13793 = (0);
while(true){
if((i__9150__auto___13793 < len__9149__auto___13792)){
args__9156__auto__.push((arguments[i__9150__auto___13793]));

var G__13794 = (i__9150__auto___13793 + (1));
i__9150__auto___13793 = G__13794;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13791))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13791){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13791);
});})(g__13625__auto___13791))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__13625__auto___13791){
return (function (seq13752){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13752));
});})(g__13625__auto___13791))
;


var g__13625__auto___13795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__13625__auto___13795){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13796 = arguments.length;
var i__9150__auto___13797 = (0);
while(true){
if((i__9150__auto___13797 < len__9149__auto___13796)){
args__9156__auto__.push((arguments[i__9150__auto___13797]));

var G__13798 = (i__9150__auto___13797 + (1));
i__9150__auto___13797 = G__13798;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13795))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13795){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13795);
});})(g__13625__auto___13795))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__13625__auto___13795){
return (function (seq13753){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13753));
});})(g__13625__auto___13795))
;


var g__13625__auto___13799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__13625__auto___13799){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13800 = arguments.length;
var i__9150__auto___13801 = (0);
while(true){
if((i__9150__auto___13801 < len__9149__auto___13800)){
args__9156__auto__.push((arguments[i__9150__auto___13801]));

var G__13802 = (i__9150__auto___13801 + (1));
i__9150__auto___13801 = G__13802;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13799))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13799){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13799);
});})(g__13625__auto___13799))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__13625__auto___13799){
return (function (seq13754){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13754));
});})(g__13625__auto___13799))
;


var g__13625__auto___13803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__13625__auto___13803){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13804 = arguments.length;
var i__9150__auto___13805 = (0);
while(true){
if((i__9150__auto___13805 < len__9149__auto___13804)){
args__9156__auto__.push((arguments[i__9150__auto___13805]));

var G__13806 = (i__9150__auto___13805 + (1));
i__9150__auto___13805 = G__13806;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13803))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13803){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13803);
});})(g__13625__auto___13803))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__13625__auto___13803){
return (function (seq13755){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13755));
});})(g__13625__auto___13803))
;


var g__13625__auto___13807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__13625__auto___13807){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13808 = arguments.length;
var i__9150__auto___13809 = (0);
while(true){
if((i__9150__auto___13809 < len__9149__auto___13808)){
args__9156__auto__.push((arguments[i__9150__auto___13809]));

var G__13810 = (i__9150__auto___13809 + (1));
i__9150__auto___13809 = G__13810;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13807))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13807){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13807);
});})(g__13625__auto___13807))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__13625__auto___13807){
return (function (seq13756){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13756));
});})(g__13625__auto___13807))
;


var g__13625__auto___13811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__13625__auto___13811){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13812 = arguments.length;
var i__9150__auto___13813 = (0);
while(true){
if((i__9150__auto___13813 < len__9149__auto___13812)){
args__9156__auto__.push((arguments[i__9150__auto___13813]));

var G__13814 = (i__9150__auto___13813 + (1));
i__9150__auto___13813 = G__13814;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13811))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13811){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13811);
});})(g__13625__auto___13811))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__13625__auto___13811){
return (function (seq13757){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13757));
});})(g__13625__auto___13811))
;


var g__13625__auto___13815 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__13625__auto___13815){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13816 = arguments.length;
var i__9150__auto___13817 = (0);
while(true){
if((i__9150__auto___13817 < len__9149__auto___13816)){
args__9156__auto__.push((arguments[i__9150__auto___13817]));

var G__13818 = (i__9150__auto___13817 + (1));
i__9150__auto___13817 = G__13818;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13815))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13815){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13815);
});})(g__13625__auto___13815))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__13625__auto___13815){
return (function (seq13758){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13758));
});})(g__13625__auto___13815))
;


var g__13625__auto___13819 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__13625__auto___13819){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13820 = arguments.length;
var i__9150__auto___13821 = (0);
while(true){
if((i__9150__auto___13821 < len__9149__auto___13820)){
args__9156__auto__.push((arguments[i__9150__auto___13821]));

var G__13822 = (i__9150__auto___13821 + (1));
i__9150__auto___13821 = G__13822;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13819))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13819){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13819);
});})(g__13625__auto___13819))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__13625__auto___13819){
return (function (seq13759){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13759));
});})(g__13625__auto___13819))
;


var g__13625__auto___13823 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__13625__auto___13823){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13824 = arguments.length;
var i__9150__auto___13825 = (0);
while(true){
if((i__9150__auto___13825 < len__9149__auto___13824)){
args__9156__auto__.push((arguments[i__9150__auto___13825]));

var G__13826 = (i__9150__auto___13825 + (1));
i__9150__auto___13825 = G__13826;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13823))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13823){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13823);
});})(g__13625__auto___13823))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__13625__auto___13823){
return (function (seq13760){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13760));
});})(g__13625__auto___13823))
;


var g__13625__auto___13827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__13625__auto___13827){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13828 = arguments.length;
var i__9150__auto___13829 = (0);
while(true){
if((i__9150__auto___13829 < len__9149__auto___13828)){
args__9156__auto__.push((arguments[i__9150__auto___13829]));

var G__13830 = (i__9150__auto___13829 + (1));
i__9150__auto___13829 = G__13830;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13827))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13827){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13827);
});})(g__13625__auto___13827))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__13625__auto___13827){
return (function (seq13761){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13761));
});})(g__13625__auto___13827))
;


var g__13625__auto___13831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__13625__auto___13831){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13832 = arguments.length;
var i__9150__auto___13833 = (0);
while(true){
if((i__9150__auto___13833 < len__9149__auto___13832)){
args__9156__auto__.push((arguments[i__9150__auto___13833]));

var G__13834 = (i__9150__auto___13833 + (1));
i__9150__auto___13833 = G__13834;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13831))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13831){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13831);
});})(g__13625__auto___13831))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__13625__auto___13831){
return (function (seq13762){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13762));
});})(g__13625__auto___13831))
;


var g__13625__auto___13835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__13625__auto___13835){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13836 = arguments.length;
var i__9150__auto___13837 = (0);
while(true){
if((i__9150__auto___13837 < len__9149__auto___13836)){
args__9156__auto__.push((arguments[i__9150__auto___13837]));

var G__13838 = (i__9150__auto___13837 + (1));
i__9150__auto___13837 = G__13838;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13835))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13835){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13835);
});})(g__13625__auto___13835))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__13625__auto___13835){
return (function (seq13763){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13763));
});})(g__13625__auto___13835))
;


var g__13625__auto___13839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__13625__auto___13839){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13840 = arguments.length;
var i__9150__auto___13841 = (0);
while(true){
if((i__9150__auto___13841 < len__9149__auto___13840)){
args__9156__auto__.push((arguments[i__9150__auto___13841]));

var G__13842 = (i__9150__auto___13841 + (1));
i__9150__auto___13841 = G__13842;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13839))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13839){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13839);
});})(g__13625__auto___13839))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__13625__auto___13839){
return (function (seq13764){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13764));
});})(g__13625__auto___13839))
;


var g__13625__auto___13843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__13625__auto___13843){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13844 = arguments.length;
var i__9150__auto___13845 = (0);
while(true){
if((i__9150__auto___13845 < len__9149__auto___13844)){
args__9156__auto__.push((arguments[i__9150__auto___13845]));

var G__13846 = (i__9150__auto___13845 + (1));
i__9150__auto___13845 = G__13846;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13843))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13843){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13843);
});})(g__13625__auto___13843))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__13625__auto___13843){
return (function (seq13765){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13765));
});})(g__13625__auto___13843))
;


var g__13625__auto___13847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__13625__auto___13847){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13848 = arguments.length;
var i__9150__auto___13849 = (0);
while(true){
if((i__9150__auto___13849 < len__9149__auto___13848)){
args__9156__auto__.push((arguments[i__9150__auto___13849]));

var G__13850 = (i__9150__auto___13849 + (1));
i__9150__auto___13849 = G__13850;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});})(g__13625__auto___13847))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13625__auto___13847){
return (function (args){
return cljs.core.deref.call(null,g__13625__auto___13847);
});})(g__13625__auto___13847))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__13625__auto___13847){
return (function (seq13766){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13766));
});})(g__13625__auto___13847))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9156__auto__ = [];
var len__9149__auto___13853 = arguments.length;
var i__9150__auto___13854 = (0);
while(true){
if((i__9150__auto___13854 < len__9149__auto___13853)){
args__9156__auto__.push((arguments[i__9150__auto___13854]));

var G__13855 = (i__9150__auto___13854 + (1));
i__9150__auto___13854 = G__13855;
continue;
} else {
}
break;
}

var argseq__9157__auto__ = ((((0) < args__9156__auto__.length))?(new cljs.core.IndexedSeq(args__9156__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9157__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13851_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13851_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq13852){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13852));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__13856_SHARP_){
return (new Date(p1__13856_SHARP_));
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
