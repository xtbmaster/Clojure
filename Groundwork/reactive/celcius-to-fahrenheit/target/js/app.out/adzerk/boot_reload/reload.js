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
return (function (p1__13459_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__13459_SHARP_),path);
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
var seq__13460 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__13461 = null;
var count__13462 = (0);
var i__13463 = (0);
while(true){
if((i__13463 < count__13462)){
var s = cljs.core._nth.call(null,chunk__13461,i__13463);
var temp__4657__auto___13464 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___13464)){
var sheet_13465 = temp__4657__auto___13464;
var temp__4657__auto___13466__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13465.href,changed);
if(cljs.core.truth_(temp__4657__auto___13466__$1)){
var href_uri_13467 = temp__4657__auto___13466__$1;
sheet_13465.ownerNode.href = href_uri_13467.makeUnique().toString();
} else {
}
} else {
}

var G__13468 = seq__13460;
var G__13469 = chunk__13461;
var G__13470 = count__13462;
var G__13471 = (i__13463 + (1));
seq__13460 = G__13468;
chunk__13461 = G__13469;
count__13462 = G__13470;
i__13463 = G__13471;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13460);
if(temp__4657__auto__){
var seq__13460__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13460__$1)){
var c__8817__auto__ = cljs.core.chunk_first.call(null,seq__13460__$1);
var G__13472 = cljs.core.chunk_rest.call(null,seq__13460__$1);
var G__13473 = c__8817__auto__;
var G__13474 = cljs.core.count.call(null,c__8817__auto__);
var G__13475 = (0);
seq__13460 = G__13472;
chunk__13461 = G__13473;
count__13462 = G__13474;
i__13463 = G__13475;
continue;
} else {
var s = cljs.core.first.call(null,seq__13460__$1);
var temp__4657__auto___13476__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___13476__$1)){
var sheet_13477 = temp__4657__auto___13476__$1;
var temp__4657__auto___13478__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13477.href,changed);
if(cljs.core.truth_(temp__4657__auto___13478__$2)){
var href_uri_13479 = temp__4657__auto___13478__$2;
sheet_13477.ownerNode.href = href_uri_13479.makeUnique().toString();
} else {
}
} else {
}

var G__13480 = cljs.core.next.call(null,seq__13460__$1);
var G__13481 = null;
var G__13482 = (0);
var G__13483 = (0);
seq__13460 = G__13480;
chunk__13461 = G__13481;
count__13462 = G__13482;
i__13463 = G__13483;
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
var seq__13484 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__13485 = null;
var count__13486 = (0);
var i__13487 = (0);
while(true){
if((i__13487 < count__13486)){
var s = cljs.core._nth.call(null,chunk__13485,i__13487);
var temp__4657__auto___13488 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___13488)){
var image_13489 = temp__4657__auto___13488;
var temp__4657__auto___13490__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_13489.src,changed);
if(cljs.core.truth_(temp__4657__auto___13490__$1)){
var href_uri_13491 = temp__4657__auto___13490__$1;
image_13489.src = href_uri_13491.makeUnique().toString();
} else {
}
} else {
}

var G__13492 = seq__13484;
var G__13493 = chunk__13485;
var G__13494 = count__13486;
var G__13495 = (i__13487 + (1));
seq__13484 = G__13492;
chunk__13485 = G__13493;
count__13486 = G__13494;
i__13487 = G__13495;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13484);
if(temp__4657__auto__){
var seq__13484__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13484__$1)){
var c__8817__auto__ = cljs.core.chunk_first.call(null,seq__13484__$1);
var G__13496 = cljs.core.chunk_rest.call(null,seq__13484__$1);
var G__13497 = c__8817__auto__;
var G__13498 = cljs.core.count.call(null,c__8817__auto__);
var G__13499 = (0);
seq__13484 = G__13496;
chunk__13485 = G__13497;
count__13486 = G__13498;
i__13487 = G__13499;
continue;
} else {
var s = cljs.core.first.call(null,seq__13484__$1);
var temp__4657__auto___13500__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___13500__$1)){
var image_13501 = temp__4657__auto___13500__$1;
var temp__4657__auto___13502__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_13501.src,changed);
if(cljs.core.truth_(temp__4657__auto___13502__$2)){
var href_uri_13503 = temp__4657__auto___13502__$2;
image_13501.src = href_uri_13503.makeUnique().toString();
} else {
}
} else {
}

var G__13504 = cljs.core.next.call(null,seq__13484__$1);
var G__13505 = null;
var G__13506 = (0);
var G__13507 = (0);
seq__13484 = G__13504;
chunk__13485 = G__13505;
count__13486 = G__13506;
i__13487 = G__13507;
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
return (function (p1__13508_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__13508_SHARP_.toString());
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
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__13511){
var map__13512 = p__13511;
var map__13512__$1 = ((((!((map__13512 == null)))?((((map__13512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13512):map__13512);
var on_jsload = cljs.core.get.call(null,map__13512__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__13512,map__13512__$1,on_jsload){
return (function (p1__13509_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__13509_SHARP_,".js");
});})(map__13512,map__13512__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__13512,map__13512__$1,on_jsload){
return (function (p1__13510_SHARP_){
return goog.Uri.parse(p1__13510_SHARP_).makeUnique();
});})(js_files,map__13512,map__13512__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__13512,map__13512__$1,on_jsload){
return (function() { 
var G__13514__delegate = function (_){
return on_jsload.call(null);
};
var G__13514 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13515__i = 0, G__13515__a = new Array(arguments.length -  0);
while (G__13515__i < G__13515__a.length) {G__13515__a[G__13515__i] = arguments[G__13515__i + 0]; ++G__13515__i;}
  _ = new cljs.core.IndexedSeq(G__13515__a,0,null);
} 
return G__13514__delegate.call(this,_);};
G__13514.cljs$lang$maxFixedArity = 0;
G__13514.cljs$lang$applyTo = (function (arglist__13516){
var _ = cljs.core.seq(arglist__13516);
return G__13514__delegate(_);
});
G__13514.cljs$core$IFn$_invoke$arity$variadic = G__13514__delegate;
return G__13514;
})()
;})(js_files,map__13512,map__13512__$1,on_jsload))
,((function (js_files,map__13512,map__13512__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__13512,map__13512__$1,on_jsload))
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

var seq__13517_13521 = cljs.core.seq.call(null,things_to_log);
var chunk__13518_13522 = null;
var count__13519_13523 = (0);
var i__13520_13524 = (0);
while(true){
if((i__13520_13524 < count__13519_13523)){
var t_13525 = cljs.core._nth.call(null,chunk__13518_13522,i__13520_13524);
console.log(t_13525);

var G__13526 = seq__13517_13521;
var G__13527 = chunk__13518_13522;
var G__13528 = count__13519_13523;
var G__13529 = (i__13520_13524 + (1));
seq__13517_13521 = G__13526;
chunk__13518_13522 = G__13527;
count__13519_13523 = G__13528;
i__13520_13524 = G__13529;
continue;
} else {
var temp__4657__auto___13530 = cljs.core.seq.call(null,seq__13517_13521);
if(temp__4657__auto___13530){
var seq__13517_13531__$1 = temp__4657__auto___13530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13517_13531__$1)){
var c__8817__auto___13532 = cljs.core.chunk_first.call(null,seq__13517_13531__$1);
var G__13533 = cljs.core.chunk_rest.call(null,seq__13517_13531__$1);
var G__13534 = c__8817__auto___13532;
var G__13535 = cljs.core.count.call(null,c__8817__auto___13532);
var G__13536 = (0);
seq__13517_13521 = G__13533;
chunk__13518_13522 = G__13534;
count__13519_13523 = G__13535;
i__13520_13524 = G__13536;
continue;
} else {
var t_13537 = cljs.core.first.call(null,seq__13517_13531__$1);
console.log(t_13537);

var G__13538 = cljs.core.next.call(null,seq__13517_13531__$1);
var G__13539 = null;
var G__13540 = (0);
var G__13541 = (0);
seq__13517_13521 = G__13538;
chunk__13518_13522 = G__13539;
count__13519_13523 = G__13540;
i__13520_13524 = G__13541;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__13542_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13542_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__13543){
var map__13544 = p__13543;
var map__13544__$1 = ((((!((map__13544 == null)))?((((map__13544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13544):map__13544);
var canonical_path = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__13546 = window;
var G__13546__$1 = (((G__13546 == null))?null:G__13546.location);
if((G__13546__$1 == null)){
return null;
} else {
return G__13546__$1.protocol;
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
var G__13547 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__13547);

adzerk.boot_reload.reload.reload_css.call(null,G__13547);

adzerk.boot_reload.reload.reload_img.call(null,G__13547);

return G__13547;
} else {
return null;
}
});
