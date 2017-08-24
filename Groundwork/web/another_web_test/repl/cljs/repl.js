// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14408){
var map__14409 = p__14408;
var map__14409__$1 = ((((!((map__14409 == null)))?((((map__14409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14409):map__14409);
var m = map__14409__$1;
var n = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14411_14433 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14412_14434 = null;
var count__14413_14435 = (0);
var i__14414_14436 = (0);
while(true){
if((i__14414_14436 < count__14413_14435)){
var f_14437 = cljs.core._nth.call(null,chunk__14412_14434,i__14414_14436);
cljs.core.println.call(null,"  ",f_14437);

var G__14438 = seq__14411_14433;
var G__14439 = chunk__14412_14434;
var G__14440 = count__14413_14435;
var G__14441 = (i__14414_14436 + (1));
seq__14411_14433 = G__14438;
chunk__14412_14434 = G__14439;
count__14413_14435 = G__14440;
i__14414_14436 = G__14441;
continue;
} else {
var temp__4657__auto___14442 = cljs.core.seq.call(null,seq__14411_14433);
if(temp__4657__auto___14442){
var seq__14411_14443__$1 = temp__4657__auto___14442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14411_14443__$1)){
var c__9217__auto___14444 = cljs.core.chunk_first.call(null,seq__14411_14443__$1);
var G__14445 = cljs.core.chunk_rest.call(null,seq__14411_14443__$1);
var G__14446 = c__9217__auto___14444;
var G__14447 = cljs.core.count.call(null,c__9217__auto___14444);
var G__14448 = (0);
seq__14411_14433 = G__14445;
chunk__14412_14434 = G__14446;
count__14413_14435 = G__14447;
i__14414_14436 = G__14448;
continue;
} else {
var f_14449 = cljs.core.first.call(null,seq__14411_14443__$1);
cljs.core.println.call(null,"  ",f_14449);

var G__14450 = cljs.core.next.call(null,seq__14411_14443__$1);
var G__14451 = null;
var G__14452 = (0);
var G__14453 = (0);
seq__14411_14433 = G__14450;
chunk__14412_14434 = G__14451;
count__14413_14435 = G__14452;
i__14414_14436 = G__14453;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14454 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8383__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8383__auto__)){
return or__8383__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14454);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14454)))?cljs.core.second.call(null,arglists_14454):arglists_14454));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__14415_14455 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14416_14456 = null;
var count__14417_14457 = (0);
var i__14418_14458 = (0);
while(true){
if((i__14418_14458 < count__14417_14457)){
var vec__14419_14459 = cljs.core._nth.call(null,chunk__14416_14456,i__14418_14458);
var name_14460 = cljs.core.nth.call(null,vec__14419_14459,(0),null);
var map__14422_14461 = cljs.core.nth.call(null,vec__14419_14459,(1),null);
var map__14422_14462__$1 = ((((!((map__14422_14461 == null)))?((((map__14422_14461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14422_14461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14422_14461):map__14422_14461);
var doc_14463 = cljs.core.get.call(null,map__14422_14462__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14464 = cljs.core.get.call(null,map__14422_14462__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14460);

cljs.core.println.call(null," ",arglists_14464);

if(cljs.core.truth_(doc_14463)){
cljs.core.println.call(null," ",doc_14463);
} else {
}

var G__14465 = seq__14415_14455;
var G__14466 = chunk__14416_14456;
var G__14467 = count__14417_14457;
var G__14468 = (i__14418_14458 + (1));
seq__14415_14455 = G__14465;
chunk__14416_14456 = G__14466;
count__14417_14457 = G__14467;
i__14418_14458 = G__14468;
continue;
} else {
var temp__4657__auto___14469 = cljs.core.seq.call(null,seq__14415_14455);
if(temp__4657__auto___14469){
var seq__14415_14470__$1 = temp__4657__auto___14469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14415_14470__$1)){
var c__9217__auto___14471 = cljs.core.chunk_first.call(null,seq__14415_14470__$1);
var G__14472 = cljs.core.chunk_rest.call(null,seq__14415_14470__$1);
var G__14473 = c__9217__auto___14471;
var G__14474 = cljs.core.count.call(null,c__9217__auto___14471);
var G__14475 = (0);
seq__14415_14455 = G__14472;
chunk__14416_14456 = G__14473;
count__14417_14457 = G__14474;
i__14418_14458 = G__14475;
continue;
} else {
var vec__14424_14476 = cljs.core.first.call(null,seq__14415_14470__$1);
var name_14477 = cljs.core.nth.call(null,vec__14424_14476,(0),null);
var map__14427_14478 = cljs.core.nth.call(null,vec__14424_14476,(1),null);
var map__14427_14479__$1 = ((((!((map__14427_14478 == null)))?((((map__14427_14478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14427_14478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14427_14478):map__14427_14478);
var doc_14480 = cljs.core.get.call(null,map__14427_14479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14481 = cljs.core.get.call(null,map__14427_14479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14477);

cljs.core.println.call(null," ",arglists_14481);

if(cljs.core.truth_(doc_14480)){
cljs.core.println.call(null," ",doc_14480);
} else {
}

var G__14482 = cljs.core.next.call(null,seq__14415_14470__$1);
var G__14483 = null;
var G__14484 = (0);
var G__14485 = (0);
seq__14415_14455 = G__14482;
chunk__14416_14456 = G__14483;
count__14417_14457 = G__14484;
i__14418_14458 = G__14485;
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

var seq__14429 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14430 = null;
var count__14431 = (0);
var i__14432 = (0);
while(true){
if((i__14432 < count__14431)){
var role = cljs.core._nth.call(null,chunk__14430,i__14432);
var temp__4657__auto___14486__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14486__$1)){
var spec_14487 = temp__4657__auto___14486__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_14487));
} else {
}

var G__14488 = seq__14429;
var G__14489 = chunk__14430;
var G__14490 = count__14431;
var G__14491 = (i__14432 + (1));
seq__14429 = G__14488;
chunk__14430 = G__14489;
count__14431 = G__14490;
i__14432 = G__14491;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__14429);
if(temp__4657__auto____$1){
var seq__14429__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14429__$1)){
var c__9217__auto__ = cljs.core.chunk_first.call(null,seq__14429__$1);
var G__14492 = cljs.core.chunk_rest.call(null,seq__14429__$1);
var G__14493 = c__9217__auto__;
var G__14494 = cljs.core.count.call(null,c__9217__auto__);
var G__14495 = (0);
seq__14429 = G__14492;
chunk__14430 = G__14493;
count__14431 = G__14494;
i__14432 = G__14495;
continue;
} else {
var role = cljs.core.first.call(null,seq__14429__$1);
var temp__4657__auto___14496__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14496__$2)){
var spec_14497 = temp__4657__auto___14496__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_14497));
} else {
}

var G__14498 = cljs.core.next.call(null,seq__14429__$1);
var G__14499 = null;
var G__14500 = (0);
var G__14501 = (0);
seq__14429 = G__14498;
chunk__14430 = G__14499;
count__14431 = G__14500;
i__14432 = G__14501;
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
