// Compiled by ClojureScript 1.10.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3995){
var map__3996 = p__3995;
var map__3996__$1 = ((((!((map__3996 == null)))?(((((map__3996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3996):map__3996);
var m = map__3996__$1;
var n = cljs.core.get.call(null,map__3996__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5535__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5535__auto__)){
var ns = temp__5535__auto__;
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
var seq__3998_4020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3999_4021 = null;
var count__4000_4022 = (0);
var i__4001_4023 = (0);
while(true){
if((i__4001_4023 < count__4000_4022)){
var f_4024 = cljs.core._nth.call(null,chunk__3999_4021,i__4001_4023);
cljs.core.println.call(null,"  ",f_4024);


var G__4025 = seq__3998_4020;
var G__4026 = chunk__3999_4021;
var G__4027 = count__4000_4022;
var G__4028 = (i__4001_4023 + (1));
seq__3998_4020 = G__4025;
chunk__3999_4021 = G__4026;
count__4000_4022 = G__4027;
i__4001_4023 = G__4028;
continue;
} else {
var temp__5535__auto___4029 = cljs.core.seq.call(null,seq__3998_4020);
if(temp__5535__auto___4029){
var seq__3998_4030__$1 = temp__5535__auto___4029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3998_4030__$1)){
var c__4319__auto___4031 = cljs.core.chunk_first.call(null,seq__3998_4030__$1);
var G__4032 = cljs.core.chunk_rest.call(null,seq__3998_4030__$1);
var G__4033 = c__4319__auto___4031;
var G__4034 = cljs.core.count.call(null,c__4319__auto___4031);
var G__4035 = (0);
seq__3998_4020 = G__4032;
chunk__3999_4021 = G__4033;
count__4000_4022 = G__4034;
i__4001_4023 = G__4035;
continue;
} else {
var f_4036 = cljs.core.first.call(null,seq__3998_4030__$1);
cljs.core.println.call(null,"  ",f_4036);


var G__4037 = cljs.core.next.call(null,seq__3998_4030__$1);
var G__4038 = null;
var G__4039 = (0);
var G__4040 = (0);
seq__3998_4020 = G__4037;
chunk__3999_4021 = G__4038;
count__4000_4022 = G__4039;
i__4001_4023 = G__4040;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4041 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4041);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4041)))?cljs.core.second.call(null,arglists_4041):arglists_4041));
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
var seq__4002_4042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4003_4043 = null;
var count__4004_4044 = (0);
var i__4005_4045 = (0);
while(true){
if((i__4005_4045 < count__4004_4044)){
var vec__4006_4046 = cljs.core._nth.call(null,chunk__4003_4043,i__4005_4045);
var name_4047 = cljs.core.nth.call(null,vec__4006_4046,(0),null);
var map__4009_4048 = cljs.core.nth.call(null,vec__4006_4046,(1),null);
var map__4009_4049__$1 = ((((!((map__4009_4048 == null)))?(((((map__4009_4048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4009_4048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4009_4048):map__4009_4048);
var doc_4050 = cljs.core.get.call(null,map__4009_4049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4051 = cljs.core.get.call(null,map__4009_4049__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4047);

cljs.core.println.call(null," ",arglists_4051);

if(cljs.core.truth_(doc_4050)){
cljs.core.println.call(null," ",doc_4050);
} else {
}


var G__4052 = seq__4002_4042;
var G__4053 = chunk__4003_4043;
var G__4054 = count__4004_4044;
var G__4055 = (i__4005_4045 + (1));
seq__4002_4042 = G__4052;
chunk__4003_4043 = G__4053;
count__4004_4044 = G__4054;
i__4005_4045 = G__4055;
continue;
} else {
var temp__5535__auto___4056 = cljs.core.seq.call(null,seq__4002_4042);
if(temp__5535__auto___4056){
var seq__4002_4057__$1 = temp__5535__auto___4056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4002_4057__$1)){
var c__4319__auto___4058 = cljs.core.chunk_first.call(null,seq__4002_4057__$1);
var G__4059 = cljs.core.chunk_rest.call(null,seq__4002_4057__$1);
var G__4060 = c__4319__auto___4058;
var G__4061 = cljs.core.count.call(null,c__4319__auto___4058);
var G__4062 = (0);
seq__4002_4042 = G__4059;
chunk__4003_4043 = G__4060;
count__4004_4044 = G__4061;
i__4005_4045 = G__4062;
continue;
} else {
var vec__4011_4063 = cljs.core.first.call(null,seq__4002_4057__$1);
var name_4064 = cljs.core.nth.call(null,vec__4011_4063,(0),null);
var map__4014_4065 = cljs.core.nth.call(null,vec__4011_4063,(1),null);
var map__4014_4066__$1 = ((((!((map__4014_4065 == null)))?(((((map__4014_4065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4014_4065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4014_4065):map__4014_4065);
var doc_4067 = cljs.core.get.call(null,map__4014_4066__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4068 = cljs.core.get.call(null,map__4014_4066__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4064);

cljs.core.println.call(null," ",arglists_4068);

if(cljs.core.truth_(doc_4067)){
cljs.core.println.call(null," ",doc_4067);
} else {
}


var G__4069 = cljs.core.next.call(null,seq__4002_4057__$1);
var G__4070 = null;
var G__4071 = (0);
var G__4072 = (0);
seq__4002_4042 = G__4069;
chunk__4003_4043 = G__4070;
count__4004_4044 = G__4071;
i__4005_4045 = G__4072;
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
var temp__5535__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5535__auto__)){
var fnspec = temp__5535__auto__;
cljs.core.print.call(null,"Spec");

var seq__4016 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__4017 = null;
var count__4018 = (0);
var i__4019 = (0);
while(true){
if((i__4019 < count__4018)){
var role = cljs.core._nth.call(null,chunk__4017,i__4019);
var temp__5535__auto___4073__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___4073__$1)){
var spec_4074 = temp__5535__auto___4073__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4074));
} else {
}


var G__4075 = seq__4016;
var G__4076 = chunk__4017;
var G__4077 = count__4018;
var G__4078 = (i__4019 + (1));
seq__4016 = G__4075;
chunk__4017 = G__4076;
count__4018 = G__4077;
i__4019 = G__4078;
continue;
} else {
var temp__5535__auto____$1 = cljs.core.seq.call(null,seq__4016);
if(temp__5535__auto____$1){
var seq__4016__$1 = temp__5535__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4016__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__4016__$1);
var G__4079 = cljs.core.chunk_rest.call(null,seq__4016__$1);
var G__4080 = c__4319__auto__;
var G__4081 = cljs.core.count.call(null,c__4319__auto__);
var G__4082 = (0);
seq__4016 = G__4079;
chunk__4017 = G__4080;
count__4018 = G__4081;
i__4019 = G__4082;
continue;
} else {
var role = cljs.core.first.call(null,seq__4016__$1);
var temp__5535__auto___4083__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___4083__$2)){
var spec_4084 = temp__5535__auto___4083__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4084));
} else {
}


var G__4085 = cljs.core.next.call(null,seq__4016__$1);
var G__4086 = null;
var G__4087 = (0);
var G__4088 = (0);
seq__4016 = G__4085;
chunk__4017 = G__4086;
count__4018 = G__4087;
i__4019 = G__4088;
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
