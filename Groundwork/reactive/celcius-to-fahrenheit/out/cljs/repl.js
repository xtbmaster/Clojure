// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12778){
var map__12779 = p__12778;
var map__12779__$1 = ((((!((map__12779 == null)))?((((map__12779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12779):map__12779);
var m = map__12779__$1;
var n = cljs.core.get.call(null,map__12779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12781_12803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12782_12804 = null;
var count__12783_12805 = (0);
var i__12784_12806 = (0);
while(true){
if((i__12784_12806 < count__12783_12805)){
var f_12807 = cljs.core._nth.call(null,chunk__12782_12804,i__12784_12806);
cljs.core.println.call(null,"  ",f_12807);

var G__12808 = seq__12781_12803;
var G__12809 = chunk__12782_12804;
var G__12810 = count__12783_12805;
var G__12811 = (i__12784_12806 + (1));
seq__12781_12803 = G__12808;
chunk__12782_12804 = G__12809;
count__12783_12805 = G__12810;
i__12784_12806 = G__12811;
continue;
} else {
var temp__4657__auto___12812 = cljs.core.seq.call(null,seq__12781_12803);
if(temp__4657__auto___12812){
var seq__12781_12813__$1 = temp__4657__auto___12812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12781_12813__$1)){
var c__11587__auto___12814 = cljs.core.chunk_first.call(null,seq__12781_12813__$1);
var G__12815 = cljs.core.chunk_rest.call(null,seq__12781_12813__$1);
var G__12816 = c__11587__auto___12814;
var G__12817 = cljs.core.count.call(null,c__11587__auto___12814);
var G__12818 = (0);
seq__12781_12803 = G__12815;
chunk__12782_12804 = G__12816;
count__12783_12805 = G__12817;
i__12784_12806 = G__12818;
continue;
} else {
var f_12819 = cljs.core.first.call(null,seq__12781_12813__$1);
cljs.core.println.call(null,"  ",f_12819);

var G__12820 = cljs.core.next.call(null,seq__12781_12813__$1);
var G__12821 = null;
var G__12822 = (0);
var G__12823 = (0);
seq__12781_12803 = G__12820;
chunk__12782_12804 = G__12821;
count__12783_12805 = G__12822;
i__12784_12806 = G__12823;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12824 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10748__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10748__auto__)){
return or__10748__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12824);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12824)))?cljs.core.second.call(null,arglists_12824):arglists_12824));
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
var seq__12785_12825 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12786_12826 = null;
var count__12787_12827 = (0);
var i__12788_12828 = (0);
while(true){
if((i__12788_12828 < count__12787_12827)){
var vec__12789_12829 = cljs.core._nth.call(null,chunk__12786_12826,i__12788_12828);
var name_12830 = cljs.core.nth.call(null,vec__12789_12829,(0),null);
var map__12792_12831 = cljs.core.nth.call(null,vec__12789_12829,(1),null);
var map__12792_12832__$1 = ((((!((map__12792_12831 == null)))?((((map__12792_12831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12792_12831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12792_12831):map__12792_12831);
var doc_12833 = cljs.core.get.call(null,map__12792_12832__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12834 = cljs.core.get.call(null,map__12792_12832__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12830);

cljs.core.println.call(null," ",arglists_12834);

if(cljs.core.truth_(doc_12833)){
cljs.core.println.call(null," ",doc_12833);
} else {
}

var G__12835 = seq__12785_12825;
var G__12836 = chunk__12786_12826;
var G__12837 = count__12787_12827;
var G__12838 = (i__12788_12828 + (1));
seq__12785_12825 = G__12835;
chunk__12786_12826 = G__12836;
count__12787_12827 = G__12837;
i__12788_12828 = G__12838;
continue;
} else {
var temp__4657__auto___12839 = cljs.core.seq.call(null,seq__12785_12825);
if(temp__4657__auto___12839){
var seq__12785_12840__$1 = temp__4657__auto___12839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12785_12840__$1)){
var c__11587__auto___12841 = cljs.core.chunk_first.call(null,seq__12785_12840__$1);
var G__12842 = cljs.core.chunk_rest.call(null,seq__12785_12840__$1);
var G__12843 = c__11587__auto___12841;
var G__12844 = cljs.core.count.call(null,c__11587__auto___12841);
var G__12845 = (0);
seq__12785_12825 = G__12842;
chunk__12786_12826 = G__12843;
count__12787_12827 = G__12844;
i__12788_12828 = G__12845;
continue;
} else {
var vec__12794_12846 = cljs.core.first.call(null,seq__12785_12840__$1);
var name_12847 = cljs.core.nth.call(null,vec__12794_12846,(0),null);
var map__12797_12848 = cljs.core.nth.call(null,vec__12794_12846,(1),null);
var map__12797_12849__$1 = ((((!((map__12797_12848 == null)))?((((map__12797_12848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12797_12848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12797_12848):map__12797_12848);
var doc_12850 = cljs.core.get.call(null,map__12797_12849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12851 = cljs.core.get.call(null,map__12797_12849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12847);

cljs.core.println.call(null," ",arglists_12851);

if(cljs.core.truth_(doc_12850)){
cljs.core.println.call(null," ",doc_12850);
} else {
}

var G__12852 = cljs.core.next.call(null,seq__12785_12840__$1);
var G__12853 = null;
var G__12854 = (0);
var G__12855 = (0);
seq__12785_12825 = G__12852;
chunk__12786_12826 = G__12853;
count__12787_12827 = G__12854;
i__12788_12828 = G__12855;
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

var seq__12799 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12800 = null;
var count__12801 = (0);
var i__12802 = (0);
while(true){
if((i__12802 < count__12801)){
var role = cljs.core._nth.call(null,chunk__12800,i__12802);
var temp__4657__auto___12856__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12856__$1)){
var spec_12857 = temp__4657__auto___12856__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12857));
} else {
}

var G__12858 = seq__12799;
var G__12859 = chunk__12800;
var G__12860 = count__12801;
var G__12861 = (i__12802 + (1));
seq__12799 = G__12858;
chunk__12800 = G__12859;
count__12801 = G__12860;
i__12802 = G__12861;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12799);
if(temp__4657__auto____$1){
var seq__12799__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12799__$1)){
var c__11587__auto__ = cljs.core.chunk_first.call(null,seq__12799__$1);
var G__12862 = cljs.core.chunk_rest.call(null,seq__12799__$1);
var G__12863 = c__11587__auto__;
var G__12864 = cljs.core.count.call(null,c__11587__auto__);
var G__12865 = (0);
seq__12799 = G__12862;
chunk__12800 = G__12863;
count__12801 = G__12864;
i__12802 = G__12865;
continue;
} else {
var role = cljs.core.first.call(null,seq__12799__$1);
var temp__4657__auto___12866__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12866__$2)){
var spec_12867 = temp__4657__auto___12866__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12867));
} else {
}

var G__12868 = cljs.core.next.call(null,seq__12799__$1);
var G__12869 = null;
var G__12870 = (0);
var G__12871 = (0);
seq__12799 = G__12868;
chunk__12800 = G__12869;
count__12801 = G__12870;
i__12802 = G__12871;
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
