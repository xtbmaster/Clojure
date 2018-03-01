// Compiled by ClojureScript 1.9.946 {}
goog.provide('converter.app');
goog.require('cljs.core');
goog.require('reagent.core');
converter.app.c__GT_f = (function converter$app$c__GT_f(myc){
return ((myc * 1.8) + (32));
});
converter.app.celsius_v = reagent.core.atom.call(null,(30));
converter.app.celcius = (function converter$app$celcius(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"celsius"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,converter.app.celsius_v),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15900_SHARP_){
return cljs.core.reset_BANG_.call(null,converter.app.celsius_v,p1__15900_SHARP_.target.value);
})], null)], null)], null);
});
converter.app.fahrenheit = (function converter$app$fahrenheit(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"fahrenheit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),converter.app.c__GT_f.call(null,cljs.core.deref.call(null,converter.app.celsius_v))], null)], null)], null);
});
converter.app.temperature = (function converter$app$temperature(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Temperature Converter"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converter.app.celcius], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converter.app.fahrenheit], null)], null);
});
converter.app.init = (function converter$app$init(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converter.app.temperature], null),document.getElementById("container"));
});
