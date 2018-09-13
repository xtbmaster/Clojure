// Compiled by ClojureScript 1.10.145 {}
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
var temp__5535__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__2920_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__2920_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__5535__auto__)){
var changed__$1 = temp__5535__auto__;
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
var seq__2921 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__2922 = null;
var count__2923 = (0);
var i__2924 = (0);
while(true){
if((i__2924 < count__2923)){
var s = cljs.core._nth.call(null,chunk__2922,i__2924);
var temp__5535__auto___2925 = (sheets[s]);
if(cljs.core.truth_(temp__5535__auto___2925)){
var sheet_2926 = temp__5535__auto___2925;
var temp__5535__auto___2927__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_2926.href,changed);
if(cljs.core.truth_(temp__5535__auto___2927__$1)){
var href_uri_2928 = temp__5535__auto___2927__$1;
sheet_2926.ownerNode.href = href_uri_2928.makeUnique().toString();
} else {
}
} else {
}


var G__2929 = seq__2921;
var G__2930 = chunk__2922;
var G__2931 = count__2923;
var G__2932 = (i__2924 + (1));
seq__2921 = G__2929;
chunk__2922 = G__2930;
count__2923 = G__2931;
i__2924 = G__2932;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq.call(null,seq__2921);
if(temp__5535__auto__){
var seq__2921__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2921__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2921__$1);
var G__2933 = cljs.core.chunk_rest.call(null,seq__2921__$1);
var G__2934 = c__4319__auto__;
var G__2935 = cljs.core.count.call(null,c__4319__auto__);
var G__2936 = (0);
seq__2921 = G__2933;
chunk__2922 = G__2934;
count__2923 = G__2935;
i__2924 = G__2936;
continue;
} else {
var s = cljs.core.first.call(null,seq__2921__$1);
var temp__5535__auto___2937__$1 = (sheets[s]);
if(cljs.core.truth_(temp__5535__auto___2937__$1)){
var sheet_2938 = temp__5535__auto___2937__$1;
var temp__5535__auto___2939__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_2938.href,changed);
if(cljs.core.truth_(temp__5535__auto___2939__$2)){
var href_uri_2940 = temp__5535__auto___2939__$2;
sheet_2938.ownerNode.href = href_uri_2940.makeUnique().toString();
} else {
}
} else {
}


var G__2941 = cljs.core.next.call(null,seq__2921__$1);
var G__2942 = null;
var G__2943 = (0);
var G__2944 = (0);
seq__2921 = G__2941;
chunk__2922 = G__2942;
count__2923 = G__2943;
i__2924 = G__2944;
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
var seq__2945 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__2946 = null;
var count__2947 = (0);
var i__2948 = (0);
while(true){
if((i__2948 < count__2947)){
var s = cljs.core._nth.call(null,chunk__2946,i__2948);
var temp__5535__auto___2949 = (images[s]);
if(cljs.core.truth_(temp__5535__auto___2949)){
var image_2950 = temp__5535__auto___2949;
var temp__5535__auto___2951__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_2950.src,changed);
if(cljs.core.truth_(temp__5535__auto___2951__$1)){
var href_uri_2952 = temp__5535__auto___2951__$1;
image_2950.src = href_uri_2952.makeUnique().toString();
} else {
}
} else {
}


var G__2953 = seq__2945;
var G__2954 = chunk__2946;
var G__2955 = count__2947;
var G__2956 = (i__2948 + (1));
seq__2945 = G__2953;
chunk__2946 = G__2954;
count__2947 = G__2955;
i__2948 = G__2956;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq.call(null,seq__2945);
if(temp__5535__auto__){
var seq__2945__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2945__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2945__$1);
var G__2957 = cljs.core.chunk_rest.call(null,seq__2945__$1);
var G__2958 = c__4319__auto__;
var G__2959 = cljs.core.count.call(null,c__4319__auto__);
var G__2960 = (0);
seq__2945 = G__2957;
chunk__2946 = G__2958;
count__2947 = G__2959;
i__2948 = G__2960;
continue;
} else {
var s = cljs.core.first.call(null,seq__2945__$1);
var temp__5535__auto___2961__$1 = (images[s]);
if(cljs.core.truth_(temp__5535__auto___2961__$1)){
var image_2962 = temp__5535__auto___2961__$1;
var temp__5535__auto___2963__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_2962.src,changed);
if(cljs.core.truth_(temp__5535__auto___2963__$2)){
var href_uri_2964 = temp__5535__auto___2963__$2;
image_2962.src = href_uri_2964.makeUnique().toString();
} else {
}
} else {
}


var G__2965 = cljs.core.next.call(null,seq__2945__$1);
var G__2966 = null;
var G__2967 = (0);
var G__2968 = (0);
seq__2945 = G__2965;
chunk__2946 = G__2966;
count__2947 = G__2967;
i__2948 = G__2968;
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
return (function (p1__2969_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__2969_SHARP_.toString());
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
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__2972){
var map__2973 = p__2972;
var map__2973__$1 = ((((!((map__2973 == null)))?(((((map__2973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2973):map__2973);
var on_jsload = cljs.core.get.call(null,map__2973__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__2973,map__2973__$1,on_jsload){
return (function (p1__2970_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__2970_SHARP_,".js");
});})(map__2973,map__2973__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__2973,map__2973__$1,on_jsload){
return (function (p1__2971_SHARP_){
return goog.Uri.parse(p1__2971_SHARP_).makeUnique();
});})(js_files,map__2973,map__2973__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__2973,map__2973__$1,on_jsload){
return (function() { 
var G__2975__delegate = function (_){
return on_jsload.call(null);
};
var G__2975 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__2976__i = 0, G__2976__a = new Array(arguments.length -  0);
while (G__2976__i < G__2976__a.length) {G__2976__a[G__2976__i] = arguments[G__2976__i + 0]; ++G__2976__i;}
  _ = new cljs.core.IndexedSeq(G__2976__a,0,null);
} 
return G__2975__delegate.call(this,_);};
G__2975.cljs$lang$maxFixedArity = 0;
G__2975.cljs$lang$applyTo = (function (arglist__2977){
var _ = cljs.core.seq(arglist__2977);
return G__2975__delegate(_);
});
G__2975.cljs$core$IFn$_invoke$arity$variadic = G__2975__delegate;
return G__2975;
})()
;})(js_files,map__2973,map__2973__$1,on_jsload))
,((function (js_files,map__2973,map__2973__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__2973,map__2973__$1,on_jsload))
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

var seq__2978_2982 = cljs.core.seq.call(null,things_to_log);
var chunk__2979_2983 = null;
var count__2980_2984 = (0);
var i__2981_2985 = (0);
while(true){
if((i__2981_2985 < count__2980_2984)){
var t_2986 = cljs.core._nth.call(null,chunk__2979_2983,i__2981_2985);
console.log(t_2986);


var G__2987 = seq__2978_2982;
var G__2988 = chunk__2979_2983;
var G__2989 = count__2980_2984;
var G__2990 = (i__2981_2985 + (1));
seq__2978_2982 = G__2987;
chunk__2979_2983 = G__2988;
count__2980_2984 = G__2989;
i__2981_2985 = G__2990;
continue;
} else {
var temp__5535__auto___2991 = cljs.core.seq.call(null,seq__2978_2982);
if(temp__5535__auto___2991){
var seq__2978_2992__$1 = temp__5535__auto___2991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2978_2992__$1)){
var c__4319__auto___2993 = cljs.core.chunk_first.call(null,seq__2978_2992__$1);
var G__2994 = cljs.core.chunk_rest.call(null,seq__2978_2992__$1);
var G__2995 = c__4319__auto___2993;
var G__2996 = cljs.core.count.call(null,c__4319__auto___2993);
var G__2997 = (0);
seq__2978_2982 = G__2994;
chunk__2979_2983 = G__2995;
count__2980_2984 = G__2996;
i__2981_2985 = G__2997;
continue;
} else {
var t_2998 = cljs.core.first.call(null,seq__2978_2992__$1);
console.log(t_2998);


var G__2999 = cljs.core.next.call(null,seq__2978_2992__$1);
var G__3000 = null;
var G__3001 = (0);
var G__3002 = (0);
seq__2978_2982 = G__2999;
chunk__2979_2983 = G__3000;
count__2980_2984 = G__3001;
i__2981_2985 = G__3002;
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
return ((typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined'));
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__3003_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3003_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__3004){
var map__3005 = p__3004;
var map__3005__$1 = ((((!((map__3005 == null)))?(((((map__3005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3005):map__3005);
var canonical_path = cljs.core.get.call(null,map__3005__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__3005__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__3007 = window;
var G__3007__$1 = (((G__3007 == null))?null:G__3007.location);
if((G__3007__$1 == null)){
return null;
} else {
return G__3007__$1.protocol;
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
var G__3008 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__3008);

adzerk.boot_reload.reload.reload_css.call(null,G__3008);

adzerk.boot_reload.reload.reload_img.call(null,G__3008);

return G__3008;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
