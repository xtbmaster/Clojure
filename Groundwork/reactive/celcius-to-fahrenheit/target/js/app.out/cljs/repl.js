// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15303){
var map__15304 = p__15303;
var map__15304__$1 = ((((!((map__15304 == null)))?((((map__15304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15304):map__15304);
var m = map__15304__$1;
var n = cljs.core.get.call(null,map__15304__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15306_15328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15307_15329 = null;
var count__15308_15330 = (0);
var i__15309_15331 = (0);
while(true){
if((i__15309_15331 < count__15308_15330)){
var f_15332 = cljs.core._nth.call(null,chunk__15307_15329,i__15309_15331);
cljs.core.println.call(null,"  ",f_15332);

var G__15333 = seq__15306_15328;
var G__15334 = chunk__15307_15329;
var G__15335 = count__15308_15330;
var G__15336 = (i__15309_15331 + (1));
seq__15306_15328 = G__15333;
chunk__15307_15329 = G__15334;
count__15308_15330 = G__15335;
i__15309_15331 = G__15336;
continue;
} else {
var temp__4657__auto___15337 = cljs.core.seq.call(null,seq__15306_15328);
if(temp__4657__auto___15337){
var seq__15306_15338__$1 = temp__4657__auto___15337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15306_15338__$1)){
var c__8817__auto___15339 = cljs.core.chunk_first.call(null,seq__15306_15338__$1);
var G__15340 = cljs.core.chunk_rest.call(null,seq__15306_15338__$1);
var G__15341 = c__8817__auto___15339;
var G__15342 = cljs.core.count.call(null,c__8817__auto___15339);
var G__15343 = (0);
seq__15306_15328 = G__15340;
chunk__15307_15329 = G__15341;
count__15308_15330 = G__15342;
i__15309_15331 = G__15343;
continue;
} else {
var f_15344 = cljs.core.first.call(null,seq__15306_15338__$1);
cljs.core.println.call(null,"  ",f_15344);

var G__15345 = cljs.core.next.call(null,seq__15306_15338__$1);
var G__15346 = null;
var G__15347 = (0);
var G__15348 = (0);
seq__15306_15328 = G__15345;
chunk__15307_15329 = G__15346;
count__15308_15330 = G__15347;
i__15309_15331 = G__15348;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15349 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7978__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7978__auto__)){
return or__7978__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15349);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15349)))?cljs.core.second.call(null,arglists_15349):arglists_15349));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15310_15350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15311_15351 = null;
var count__15312_15352 = (0);
var i__15313_15353 = (0);
while(true){
if((i__15313_15353 < count__15312_15352)){
var vec__15314_15354 = cljs.core._nth.call(null,chunk__15311_15351,i__15313_15353);
var name_15355 = cljs.core.nth.call(null,vec__15314_15354,(0),null);
var map__15317_15356 = cljs.core.nth.call(null,vec__15314_15354,(1),null);
var map__15317_15357__$1 = ((((!((map__15317_15356 == null)))?((((map__15317_15356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15317_15356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15317_15356):map__15317_15356);
var doc_15358 = cljs.core.get.call(null,map__15317_15357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15359 = cljs.core.get.call(null,map__15317_15357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15355);

cljs.core.println.call(null," ",arglists_15359);

if(cljs.core.truth_(doc_15358)){
cljs.core.println.call(null," ",doc_15358);
} else {
}

var G__15360 = seq__15310_15350;
var G__15361 = chunk__15311_15351;
var G__15362 = count__15312_15352;
var G__15363 = (i__15313_15353 + (1));
seq__15310_15350 = G__15360;
chunk__15311_15351 = G__15361;
count__15312_15352 = G__15362;
i__15313_15353 = G__15363;
continue;
} else {
var temp__4657__auto___15364 = cljs.core.seq.call(null,seq__15310_15350);
if(temp__4657__auto___15364){
var seq__15310_15365__$1 = temp__4657__auto___15364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15310_15365__$1)){
var c__8817__auto___15366 = cljs.core.chunk_first.call(null,seq__15310_15365__$1);
var G__15367 = cljs.core.chunk_rest.call(null,seq__15310_15365__$1);
var G__15368 = c__8817__auto___15366;
var G__15369 = cljs.core.count.call(null,c__8817__auto___15366);
var G__15370 = (0);
seq__15310_15350 = G__15367;
chunk__15311_15351 = G__15368;
count__15312_15352 = G__15369;
i__15313_15353 = G__15370;
continue;
} else {
var vec__15319_15371 = cljs.core.first.call(null,seq__15310_15365__$1);
var name_15372 = cljs.core.nth.call(null,vec__15319_15371,(0),null);
var map__15322_15373 = cljs.core.nth.call(null,vec__15319_15371,(1),null);
var map__15322_15374__$1 = ((((!((map__15322_15373 == null)))?((((map__15322_15373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15322_15373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15322_15373):map__15322_15373);
var doc_15375 = cljs.core.get.call(null,map__15322_15374__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15376 = cljs.core.get.call(null,map__15322_15374__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15372);

cljs.core.println.call(null," ",arglists_15376);

if(cljs.core.truth_(doc_15375)){
cljs.core.println.call(null," ",doc_15375);
} else {
}

var G__15377 = cljs.core.next.call(null,seq__15310_15365__$1);
var G__15378 = null;
var G__15379 = (0);
var G__15380 = (0);
seq__15310_15350 = G__15377;
chunk__15311_15351 = G__15378;
count__15312_15352 = G__15379;
i__15313_15353 = G__15380;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__15324 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15325 = null;
var count__15326 = (0);
var i__15327 = (0);
while(true){
if((i__15327 < count__15326)){
var role = cljs.core._nth.call(null,chunk__15325,i__15327);
var temp__4657__auto___15381__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15381__$1)){
var spec_15382 = temp__4657__auto___15381__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15382));
} else {
}

var G__15383 = seq__15324;
var G__15384 = chunk__15325;
var G__15385 = count__15326;
var G__15386 = (i__15327 + (1));
seq__15324 = G__15383;
chunk__15325 = G__15384;
count__15326 = G__15385;
i__15327 = G__15386;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__15324);
if(temp__4657__auto____$1){
var seq__15324__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15324__$1)){
var c__8817__auto__ = cljs.core.chunk_first.call(null,seq__15324__$1);
var G__15387 = cljs.core.chunk_rest.call(null,seq__15324__$1);
var G__15388 = c__8817__auto__;
var G__15389 = cljs.core.count.call(null,c__8817__auto__);
var G__15390 = (0);
seq__15324 = G__15387;
chunk__15325 = G__15388;
count__15326 = G__15389;
i__15327 = G__15390;
continue;
} else {
var role = cljs.core.first.call(null,seq__15324__$1);
var temp__4657__auto___15391__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15391__$2)){
var spec_15392 = temp__4657__auto___15391__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15392));
} else {
}

var G__15393 = cljs.core.next.call(null,seq__15324__$1);
var G__15394 = null;
var G__15395 = (0);
var G__15396 = (0);
seq__15324 = G__15393;
chunk__15325 = G__15394;
count__15326 = G__15395;
i__15327 = G__15396;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
