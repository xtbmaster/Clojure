// Compiled by ClojureScript 1.9.946 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.html.legacyconversions');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9614_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9614_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9615 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9616 = null;
var count__9617 = (0);
var i__9618 = (0);
while(true){
if((i__9618 < count__9617)){
var s = cljs.core._nth.call(null,chunk__9616,i__9618);
var temp__4657__auto___9619 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9619)){
var sheet_9620 = temp__4657__auto___9619;
var temp__4657__auto___9621__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9620.href,changed);
if(cljs.core.truth_(temp__4657__auto___9621__$1)){
var href_uri_9622 = temp__4657__auto___9621__$1;
sheet_9620.ownerNode.href = href_uri_9622.makeUnique().toString();
} else {
}
} else {
}

var G__9623 = seq__9615;
var G__9624 = chunk__9616;
var G__9625 = count__9617;
var G__9626 = (i__9618 + (1));
seq__9615 = G__9623;
chunk__9616 = G__9624;
count__9617 = G__9625;
i__9618 = G__9626;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9615);
if(temp__4657__auto__){
var seq__9615__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9615__$1)){
var c__8817__auto__ = cljs.core.chunk_first.call(null,seq__9615__$1);
var G__9627 = cljs.core.chunk_rest.call(null,seq__9615__$1);
var G__9628 = c__8817__auto__;
var G__9629 = cljs.core.count.call(null,c__8817__auto__);
var G__9630 = (0);
seq__9615 = G__9627;
chunk__9616 = G__9628;
count__9617 = G__9629;
i__9618 = G__9630;
continue;
} else {
var s = cljs.core.first.call(null,seq__9615__$1);
var temp__4657__auto___9631__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9631__$1)){
var sheet_9632 = temp__4657__auto___9631__$1;
var temp__4657__auto___9633__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9632.href,changed);
if(cljs.core.truth_(temp__4657__auto___9633__$2)){
var href_uri_9634 = temp__4657__auto___9633__$2;
sheet_9632.ownerNode.href = href_uri_9634.makeUnique().toString();
} else {
}
} else {
}

var G__9635 = cljs.core.next.call(null,seq__9615__$1);
var G__9636 = null;
var G__9637 = (0);
var G__9638 = (0);
seq__9615 = G__9635;
chunk__9616 = G__9636;
count__9617 = G__9637;
i__9618 = G__9638;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9639 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9640 = null;
var count__9641 = (0);
var i__9642 = (0);
while(true){
if((i__9642 < count__9641)){
var s = cljs.core._nth.call(null,chunk__9640,i__9642);
var temp__4657__auto___9643 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9643)){
var image_9644 = temp__4657__auto___9643;
var temp__4657__auto___9645__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9644.src,changed);
if(cljs.core.truth_(temp__4657__auto___9645__$1)){
var href_uri_9646 = temp__4657__auto___9645__$1;
image_9644.src = href_uri_9646.makeUnique().toString();
} else {
}
} else {
}

var G__9647 = seq__9639;
var G__9648 = chunk__9640;
var G__9649 = count__9641;
var G__9650 = (i__9642 + (1));
seq__9639 = G__9647;
chunk__9640 = G__9648;
count__9641 = G__9649;
i__9642 = G__9650;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9639);
if(temp__4657__auto__){
var seq__9639__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9639__$1)){
var c__8817__auto__ = cljs.core.chunk_first.call(null,seq__9639__$1);
var G__9651 = cljs.core.chunk_rest.call(null,seq__9639__$1);
var G__9652 = c__8817__auto__;
var G__9653 = cljs.core.count.call(null,c__8817__auto__);
var G__9654 = (0);
seq__9639 = G__9651;
chunk__9640 = G__9652;
count__9641 = G__9653;
i__9642 = G__9654;
continue;
} else {
var s = cljs.core.first.call(null,seq__9639__$1);
var temp__4657__auto___9655__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9655__$1)){
var image_9656 = temp__4657__auto___9655__$1;
var temp__4657__auto___9657__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9656.src,changed);
if(cljs.core.truth_(temp__4657__auto___9657__$2)){
var href_uri_9658 = temp__4657__auto___9657__$2;
image_9656.src = href_uri_9658.makeUnique().toString();
} else {
}
} else {
}

var G__9659 = cljs.core.next.call(null,seq__9639__$1);
var G__9660 = null;
var G__9661 = (0);
var G__9662 = (0);
seq__9639 = G__9659;
chunk__9640 = G__9660;
count__9641 = G__9661;
i__9642 = G__9662;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.load_files = (function adzerk$boot_reload$reload$load_files(urls){
var opts = ({"cleanupWhenDone": true});
if(typeof goog.net.jsloader.safeLoadMany !== 'undefined'){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (opts){
return (function (p1__9663_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__9663_SHARP_.toString());
});})(opts))
,urls)),opts);
} else {
if(typeof goog.net.jsloader.loadMany !== 'undefined'){
return goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,urls),opts);
} else {
throw cljs.core.ex_info.call(null,"jsloader/safeLoadMany not found",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9666){
var map__9667 = p__9666;
var map__9667__$1 = ((((!((map__9667 == null)))?((((map__9667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9667):map__9667);
var on_jsload = cljs.core.get.call(null,map__9667__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9667,map__9667__$1,on_jsload){
return (function (p1__9664_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9664_SHARP_,".js");
});})(map__9667,map__9667__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__9667,map__9667__$1,on_jsload){
return (function (p1__9665_SHARP_){
return goog.Uri.parse(p1__9665_SHARP_).makeUnique();
});})(js_files,map__9667,map__9667__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__9667,map__9667__$1,on_jsload){
return (function() { 
var G__9669__delegate = function (_){
return on_jsload.call(null);
};
var G__9669 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9670__i = 0, G__9670__a = new Array(arguments.length -  0);
while (G__9670__i < G__9670__a.length) {G__9670__a[G__9670__i] = arguments[G__9670__i + 0]; ++G__9670__i;}
  _ = new cljs.core.IndexedSeq(G__9670__a,0,null);
} 
return G__9669__delegate.call(this,_);};
G__9669.cljs$lang$maxFixedArity = 0;
G__9669.cljs$lang$applyTo = (function (arglist__9671){
var _ = cljs.core.seq(arglist__9671);
return G__9669__delegate(_);
});
G__9669.cljs$core$IFn$_invoke$arity$variadic = G__9669__delegate;
return G__9669;
})()
;})(js_files,map__9667,map__9667__$1,on_jsload))
,((function (js_files,map__9667,map__9667__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9667,map__9667__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9672_9676 = cljs.core.seq.call(null,things_to_log);
var chunk__9673_9677 = null;
var count__9674_9678 = (0);
var i__9675_9679 = (0);
while(true){
if((i__9675_9679 < count__9674_9678)){
var t_9680 = cljs.core._nth.call(null,chunk__9673_9677,i__9675_9679);
console.log(t_9680);

var G__9681 = seq__9672_9676;
var G__9682 = chunk__9673_9677;
var G__9683 = count__9674_9678;
var G__9684 = (i__9675_9679 + (1));
seq__9672_9676 = G__9681;
chunk__9673_9677 = G__9682;
count__9674_9678 = G__9683;
i__9675_9679 = G__9684;
continue;
} else {
var temp__4657__auto___9685 = cljs.core.seq.call(null,seq__9672_9676);
if(temp__4657__auto___9685){
var seq__9672_9686__$1 = temp__4657__auto___9685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9672_9686__$1)){
var c__8817__auto___9687 = cljs.core.chunk_first.call(null,seq__9672_9686__$1);
var G__9688 = cljs.core.chunk_rest.call(null,seq__9672_9686__$1);
var G__9689 = c__8817__auto___9687;
var G__9690 = cljs.core.count.call(null,c__8817__auto___9687);
var G__9691 = (0);
seq__9672_9676 = G__9688;
chunk__9673_9677 = G__9689;
count__9674_9678 = G__9690;
i__9675_9679 = G__9691;
continue;
} else {
var t_9692 = cljs.core.first.call(null,seq__9672_9686__$1);
console.log(t_9692);

var G__9693 = cljs.core.next.call(null,seq__9672_9686__$1);
var G__9694 = null;
var G__9695 = (0);
var G__9696 = (0);
seq__9672_9676 = G__9693;
chunk__9673_9677 = G__9694;
count__9674_9678 = G__9695;
i__9675_9679 = G__9696;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9697_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9697_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__9698){
var map__9699 = p__9698;
var map__9699__$1 = ((((!((map__9699 == null)))?((((map__9699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9699):map__9699);
var canonical_path = cljs.core.get.call(null,map__9699__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__9699__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__9701 = window;
var G__9701__$1 = (((G__9701 == null))?null:G__9701.location);
if((G__9701__$1 == null)){
return null;
} else {
return G__9701__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9702 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9702);

adzerk.boot_reload.reload.reload_css.call(null,G__9702);

adzerk.boot_reload.reload.reload_img.call(null,G__9702);

return G__9702;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
