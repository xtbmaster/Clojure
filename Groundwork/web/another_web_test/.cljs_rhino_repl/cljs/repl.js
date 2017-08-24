// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12053){
var map__12054 = p__12053;
var map__12054__$1 = ((((!((map__12054 == null)))?((((map__12054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12054):map__12054);
var m = map__12054__$1;
var n = cljs.core.get.call(null,map__12054__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12056_12078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12057_12079 = null;
var count__12058_12080 = (0);
var i__12059_12081 = (0);
while(true){
if((i__12059_12081 < count__12058_12080)){
var f_12082 = cljs.core._nth.call(null,chunk__12057_12079,i__12059_12081);
cljs.core.println.call(null,"  ",f_12082);

var G__12083 = seq__12056_12078;
var G__12084 = chunk__12057_12079;
var G__12085 = count__12058_12080;
var G__12086 = (i__12059_12081 + (1));
seq__12056_12078 = G__12083;
chunk__12057_12079 = G__12084;
count__12058_12080 = G__12085;
i__12059_12081 = G__12086;
continue;
} else {
var temp__4657__auto___12087 = cljs.core.seq.call(null,seq__12056_12078);
if(temp__4657__auto___12087){
var seq__12056_12088__$1 = temp__4657__auto___12087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12056_12088__$1)){
var c__9114__auto___12089 = cljs.core.chunk_first.call(null,seq__12056_12088__$1);
var G__12090 = cljs.core.chunk_rest.call(null,seq__12056_12088__$1);
var G__12091 = c__9114__auto___12089;
var G__12092 = cljs.core.count.call(null,c__9114__auto___12089);
var G__12093 = (0);
seq__12056_12078 = G__12090;
chunk__12057_12079 = G__12091;
count__12058_12080 = G__12092;
i__12059_12081 = G__12093;
continue;
} else {
var f_12094 = cljs.core.first.call(null,seq__12056_12088__$1);
cljs.core.println.call(null,"  ",f_12094);

var G__12095 = cljs.core.next.call(null,seq__12056_12088__$1);
var G__12096 = null;
var G__12097 = (0);
var G__12098 = (0);
seq__12056_12078 = G__12095;
chunk__12057_12079 = G__12096;
count__12058_12080 = G__12097;
i__12059_12081 = G__12098;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12099 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8280__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8280__auto__)){
return or__8280__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12099);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12099)))?cljs.core.second.call(null,arglists_12099):arglists_12099));
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
var seq__12060_12100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12061_12101 = null;
var count__12062_12102 = (0);
var i__12063_12103 = (0);
while(true){
if((i__12063_12103 < count__12062_12102)){
var vec__12064_12104 = cljs.core._nth.call(null,chunk__12061_12101,i__12063_12103);
var name_12105 = cljs.core.nth.call(null,vec__12064_12104,(0),null);
var map__12067_12106 = cljs.core.nth.call(null,vec__12064_12104,(1),null);
var map__12067_12107__$1 = ((((!((map__12067_12106 == null)))?((((map__12067_12106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12067_12106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12067_12106):map__12067_12106);
var doc_12108 = cljs.core.get.call(null,map__12067_12107__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12109 = cljs.core.get.call(null,map__12067_12107__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12105);

cljs.core.println.call(null," ",arglists_12109);

if(cljs.core.truth_(doc_12108)){
cljs.core.println.call(null," ",doc_12108);
} else {
}

var G__12110 = seq__12060_12100;
var G__12111 = chunk__12061_12101;
var G__12112 = count__12062_12102;
var G__12113 = (i__12063_12103 + (1));
seq__12060_12100 = G__12110;
chunk__12061_12101 = G__12111;
count__12062_12102 = G__12112;
i__12063_12103 = G__12113;
continue;
} else {
var temp__4657__auto___12114 = cljs.core.seq.call(null,seq__12060_12100);
if(temp__4657__auto___12114){
var seq__12060_12115__$1 = temp__4657__auto___12114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12060_12115__$1)){
var c__9114__auto___12116 = cljs.core.chunk_first.call(null,seq__12060_12115__$1);
var G__12117 = cljs.core.chunk_rest.call(null,seq__12060_12115__$1);
var G__12118 = c__9114__auto___12116;
var G__12119 = cljs.core.count.call(null,c__9114__auto___12116);
var G__12120 = (0);
seq__12060_12100 = G__12117;
chunk__12061_12101 = G__12118;
count__12062_12102 = G__12119;
i__12063_12103 = G__12120;
continue;
} else {
var vec__12069_12121 = cljs.core.first.call(null,seq__12060_12115__$1);
var name_12122 = cljs.core.nth.call(null,vec__12069_12121,(0),null);
var map__12072_12123 = cljs.core.nth.call(null,vec__12069_12121,(1),null);
var map__12072_12124__$1 = ((((!((map__12072_12123 == null)))?((((map__12072_12123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12072_12123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12072_12123):map__12072_12123);
var doc_12125 = cljs.core.get.call(null,map__12072_12124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12126 = cljs.core.get.call(null,map__12072_12124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12122);

cljs.core.println.call(null," ",arglists_12126);

if(cljs.core.truth_(doc_12125)){
cljs.core.println.call(null," ",doc_12125);
} else {
}

var G__12127 = cljs.core.next.call(null,seq__12060_12115__$1);
var G__12128 = null;
var G__12129 = (0);
var G__12130 = (0);
seq__12060_12100 = G__12127;
chunk__12061_12101 = G__12128;
count__12062_12102 = G__12129;
i__12063_12103 = G__12130;
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

var seq__12074 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12075 = null;
var count__12076 = (0);
var i__12077 = (0);
while(true){
if((i__12077 < count__12076)){
var role = cljs.core._nth.call(null,chunk__12075,i__12077);
var temp__4657__auto___12131__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12131__$1)){
var spec_12132 = temp__4657__auto___12131__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_12132));
} else {
}

var G__12133 = seq__12074;
var G__12134 = chunk__12075;
var G__12135 = count__12076;
var G__12136 = (i__12077 + (1));
seq__12074 = G__12133;
chunk__12075 = G__12134;
count__12076 = G__12135;
i__12077 = G__12136;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12074);
if(temp__4657__auto____$1){
var seq__12074__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12074__$1)){
var c__9114__auto__ = cljs.core.chunk_first.call(null,seq__12074__$1);
var G__12137 = cljs.core.chunk_rest.call(null,seq__12074__$1);
var G__12138 = c__9114__auto__;
var G__12139 = cljs.core.count.call(null,c__9114__auto__);
var G__12140 = (0);
seq__12074 = G__12137;
chunk__12075 = G__12138;
count__12076 = G__12139;
i__12077 = G__12140;
continue;
} else {
var role = cljs.core.first.call(null,seq__12074__$1);
var temp__4657__auto___12141__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12141__$2)){
var spec_12142 = temp__4657__auto___12141__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_12142));
} else {
}

var G__12143 = cljs.core.next.call(null,seq__12074__$1);
var G__12144 = null;
var G__12145 = (0);
var G__12146 = (0);
seq__12074 = G__12143;
chunk__12075 = G__12144;
count__12076 = G__12145;
i__12077 = G__12146;
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
