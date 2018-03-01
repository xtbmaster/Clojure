// Compiled by ClojureScript 1.9.946 {}
goog.provide('frontend.utils');
goog.require('cljs.core');
frontend.utils.by_id = (function frontend$utils$by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
frontend.utils.set_attribute = (function frontend$utils$set_attribute(dom,attr,value){
return (dom[attr] = value);
});

//# sourceMappingURL=utils.js.map
