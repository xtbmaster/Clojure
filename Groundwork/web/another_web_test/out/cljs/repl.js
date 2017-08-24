// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12213){
var map__12214 = p__12213;
var map__12214__$1 = ((((!((map__12214 == null)))?((((map__12214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12214):map__12214);
var m = map__12214__$1;
var n = cljs.core.get.call(null,map__12214__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12214__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12216_12238 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12217_12239 = null;
var count__12218_12240 = (0);
var i__12219_12241 = (0);
while(true){
if((i__12219_12241 < count__12218_12240)){
var f_12242 = cljs.core._nth.call(null,chunk__12217_12239,i__12219_12241);
cljs.core.println.call(null,"  ",f_12242);

var G__12243 = seq__12216_12238;
var G__12244 = chunk__12217_12239;
var G__12245 = count__12218_12240;
var G__12246 = (i__12219_12241 + (1));
seq__12216_12238 = G__12243;
chunk__12217_12239 = G__12244;
count__12218_12240 = G__12245;
i__12219_12241 = G__12246;
continue;
} else {
var temp__4657__auto___12247 = cljs.core.seq.call(null,seq__12216_12238);
if(temp__4657__auto___12247){
var seq__12216_12248__$1 = temp__4657__auto___12247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12216_12248__$1)){
var c__9217__auto___12249 = cljs.core.chunk_first.call(null,seq__12216_12248__$1);
var G__12250 = cljs.core.chunk_rest.call(null,seq__12216_12248__$1);
var G__12251 = c__9217__auto___12249;
var G__12252 = cljs.core.count.call(null,c__9217__auto___12249);
var G__12253 = (0);
seq__12216_12238 = G__12250;
chunk__12217_12239 = G__12251;
count__12218_12240 = G__12252;
i__12219_12241 = G__12253;
continue;
} else {
var f_12254 = cljs.core.first.call(null,seq__12216_12248__$1);
cljs.core.println.call(null,"  ",f_12254);

var G__12255 = cljs.core.next.call(null,seq__12216_12248__$1);
var G__12256 = null;
var G__12257 = (0);
var G__12258 = (0);
seq__12216_12238 = G__12255;
chunk__12217_12239 = G__12256;
count__12218_12240 = G__12257;
i__12219_12241 = G__12258;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12259 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8383__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8383__auto__)){
return or__8383__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12259);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12259)))?cljs.core.second.call(null,arglists_12259):arglists_12259));
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
var seq__12220_12260 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12221_12261 = null;
var count__12222_12262 = (0);
var i__12223_12263 = (0);
while(true){
if((i__12223_12263 < count__12222_12262)){
var vec__12224_12264 = cljs.core._nth.call(null,chunk__12221_12261,i__12223_12263);
var name_12265 = cljs.core.nth.call(null,vec__12224_12264,(0),null);
var map__12227_12266 = cljs.core.nth.call(null,vec__12224_12264,(1),null);
var map__12227_12267__$1 = ((((!((map__12227_12266 == null)))?((((map__12227_12266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12227_12266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12227_12266):map__12227_12266);
var doc_12268 = cljs.core.get.call(null,map__12227_12267__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12269 = cljs.core.get.call(null,map__12227_12267__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12265);

cljs.core.println.call(null," ",arglists_12269);

if(cljs.core.truth_(doc_12268)){
cljs.core.println.call(null," ",doc_12268);
} else {
}

var G__12270 = seq__12220_12260;
var G__12271 = chunk__12221_12261;
var G__12272 = count__12222_12262;
var G__12273 = (i__12223_12263 + (1));
seq__12220_12260 = G__12270;
chunk__12221_12261 = G__12271;
count__12222_12262 = G__12272;
i__12223_12263 = G__12273;
continue;
} else {
var temp__4657__auto___12274 = cljs.core.seq.call(null,seq__12220_12260);
if(temp__4657__auto___12274){
var seq__12220_12275__$1 = temp__4657__auto___12274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12220_12275__$1)){
var c__9217__auto___12276 = cljs.core.chunk_first.call(null,seq__12220_12275__$1);
var G__12277 = cljs.core.chunk_rest.call(null,seq__12220_12275__$1);
var G__12278 = c__9217__auto___12276;
var G__12279 = cljs.core.count.call(null,c__9217__auto___12276);
var G__12280 = (0);
seq__12220_12260 = G__12277;
chunk__12221_12261 = G__12278;
count__12222_12262 = G__12279;
i__12223_12263 = G__12280;
continue;
} else {
var vec__12229_12281 = cljs.core.first.call(null,seq__12220_12275__$1);
var name_12282 = cljs.core.nth.call(null,vec__12229_12281,(0),null);
var map__12232_12283 = cljs.core.nth.call(null,vec__12229_12281,(1),null);
var map__12232_12284__$1 = ((((!((map__12232_12283 == null)))?((((map__12232_12283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12232_12283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12232_12283):map__12232_12283);
var doc_12285 = cljs.core.get.call(null,map__12232_12284__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12286 = cljs.core.get.call(null,map__12232_12284__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12282);

cljs.core.println.call(null," ",arglists_12286);

if(cljs.core.truth_(doc_12285)){
cljs.core.println.call(null," ",doc_12285);
} else {
}

var G__12287 = cljs.core.next.call(null,seq__12220_12275__$1);
var G__12288 = null;
var G__12289 = (0);
var G__12290 = (0);
seq__12220_12260 = G__12287;
chunk__12221_12261 = G__12288;
count__12222_12262 = G__12289;
i__12223_12263 = G__12290;
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

var seq__12234 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12235 = null;
var count__12236 = (0);
var i__12237 = (0);
while(true){
if((i__12237 < count__12236)){
var role = cljs.core._nth.call(null,chunk__12235,i__12237);
var temp__4657__auto___12291__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12291__$1)){
var spec_12292 = temp__4657__auto___12291__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_12292));
} else {
}

var G__12293 = seq__12234;
var G__12294 = chunk__12235;
var G__12295 = count__12236;
var G__12296 = (i__12237 + (1));
seq__12234 = G__12293;
chunk__12235 = G__12294;
count__12236 = G__12295;
i__12237 = G__12296;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12234);
if(temp__4657__auto____$1){
var seq__12234__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12234__$1)){
var c__9217__auto__ = cljs.core.chunk_first.call(null,seq__12234__$1);
var G__12297 = cljs.core.chunk_rest.call(null,seq__12234__$1);
var G__12298 = c__9217__auto__;
var G__12299 = cljs.core.count.call(null,c__9217__auto__);
var G__12300 = (0);
seq__12234 = G__12297;
chunk__12235 = G__12298;
count__12236 = G__12299;
i__12237 = G__12300;
continue;
} else {
var role = cljs.core.first.call(null,seq__12234__$1);
var temp__4657__auto___12301__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12301__$2)){
var spec_12302 = temp__4657__auto___12301__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_12302));
} else {
}

var G__12303 = cljs.core.next.call(null,seq__12234__$1);
var G__12304 = null;
var G__12305 = (0);
var G__12306 = (0);
seq__12234 = G__12303;
chunk__12235 = G__12304;
count__12236 = G__12305;
i__12237 = G__12306;
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

//# sourceMappingURL=repl.js.map
