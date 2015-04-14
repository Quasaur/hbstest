// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12234_SHARP_){
return (p1__12234_SHARP_ instanceof Node);
}):(function (p1__12235_SHARP_){
try{return p1__12235_SHARP_.nodeType;
}catch (e12236){if((e12236 instanceof Error)){
var _ = e12236;
return null;
} else {
throw e12236;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12237_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__12237_SHARP_);
}catch (e12238){if((e12238 instanceof Error)){
var _ = e12238;
return null;
} else {
throw e12238;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12239_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__12239_SHARP_);
}catch (e12240){if((e12240 instanceof Error)){
var _ = e12240;
return null;
} else {
throw e12240;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__12241_SHARP_){
if(cljs.core.truth_((function (){var and__3570__auto__ = console;
if(cljs.core.truth_(and__3570__auto__)){
return console.log;
} else {
return and__3570__auto__;
}
})())){
return console.log(p1__12241_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){
return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e12243){if((e12243 instanceof Error)){
var _ = e12243;
return not_found;
} else {
throw e12243;

}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){
return timeout.call(null,f,(0));
});
var timeout__2 = (function (f,t){
return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){
return cljs.core.mapcat.call(null,(function (p1__12244_SHARP_){
if(cljs.core.truth_((function (){var or__3582__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__12244_SHARP_);
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__12244_SHARP_);
}
})())){
return unsplice.call(null,p1__12244_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12244_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,(function doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__12247){
var vec__12249 = p__12247;
var head = cljs.core.nth.call(null,vec__12249,(0),null);
var tail = cljs.core.nthnext.call(null,vec__12249,(1));
var args = vec__12249;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__12249,head,tail,args){
return (function (p1__12245_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__12245_SHARP_)));
});})(kw1_QMARK_,vec__12249,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__12249,head,tail,args){
return (function (p1__12246_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__12246_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__12249,head,tail,args))
;
if(cljs.core.map_QMARK_.call(null,head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice.call(null,tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),tailrecursion.hoplon.unsplice.call(null,drkw.call(null,args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice.call(null,args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__12251_SHARP_,p2__12250_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__12250_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__12250_SHARP_),((!(cljs.core._EQ_.call(null,p1__12251_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__12252_SHARP_,p2__12253_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__12252_SHARP_,/ /)),clojure.string.split.call(null,p2__12253_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__12276_12294 = cljs.core.seq.call(null,attr);
var chunk__12277_12295 = null;
var count__12278_12296 = (0);
var i__12279_12297 = (0);
while(true){
if((i__12279_12297 < count__12278_12296)){
var vec__12280_12298 = cljs.core._nth.call(null,chunk__12277_12295,i__12279_12297);
var k_12299 = cljs.core.nth.call(null,vec__12280_12298,(0),null);
var v_12300 = cljs.core.nth.call(null,vec__12280_12298,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_12300))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_12299),v_12300);
} else {
if(cljs.core.fn_QMARK_.call(null,v_12300)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_12299),v_12300);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_12299),v_12300);

}
}

var G__12301 = seq__12276_12294;
var G__12302 = chunk__12277_12295;
var G__12303 = count__12278_12296;
var G__12304 = (i__12279_12297 + (1));
seq__12276_12294 = G__12301;
chunk__12277_12295 = G__12302;
count__12278_12296 = G__12303;
i__12279_12297 = G__12304;
continue;
} else {
var temp__4126__auto___12305 = cljs.core.seq.call(null,seq__12276_12294);
if(temp__4126__auto___12305){
var seq__12276_12306__$1 = temp__4126__auto___12305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12276_12306__$1)){
var c__4369__auto___12307 = cljs.core.chunk_first.call(null,seq__12276_12306__$1);
var G__12308 = cljs.core.chunk_rest.call(null,seq__12276_12306__$1);
var G__12309 = c__4369__auto___12307;
var G__12310 = cljs.core.count.call(null,c__4369__auto___12307);
var G__12311 = (0);
seq__12276_12294 = G__12308;
chunk__12277_12295 = G__12309;
count__12278_12296 = G__12310;
i__12279_12297 = G__12311;
continue;
} else {
var vec__12281_12312 = cljs.core.first.call(null,seq__12276_12306__$1);
var k_12313 = cljs.core.nth.call(null,vec__12281_12312,(0),null);
var v_12314 = cljs.core.nth.call(null,vec__12281_12312,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_12314))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_12313),v_12314);
} else {
if(cljs.core.fn_QMARK_.call(null,v_12314)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_12313),v_12314);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_12313),v_12314);

}
}

var G__12315 = cljs.core.next.call(null,seq__12276_12306__$1);
var G__12316 = null;
var G__12317 = (0);
var G__12318 = (0);
seq__12276_12294 = G__12315;
chunk__12277_12295 = G__12316;
count__12278_12296 = G__12317;
i__12279_12297 = G__12318;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__12282 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__12283 = null;
var count__12284 = (0);
var i__12285 = (0);
while(true){
if((i__12285 < count__12284)){
var vec__12286 = cljs.core._nth.call(null,chunk__12283,i__12285);
var k = cljs.core.nth.call(null,vec__12286,(0),null);
var v = cljs.core.nth.call(null,vec__12286,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__12282,chunk__12283,count__12284,i__12285,vec__12286,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__12255_SHARP_,p2__12256_SHARP_,p3__12257_SHARP_,p4__12254_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__12254_SHARP_);
});})(seq__12282,chunk__12283,count__12284,i__12285,vec__12286,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__12319 = seq__12282;
var G__12320 = chunk__12283;
var G__12321 = count__12284;
var G__12322 = (i__12285 + (1));
seq__12282 = G__12319;
chunk__12283 = G__12320;
count__12284 = G__12321;
i__12285 = G__12322;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12282);
if(temp__4126__auto__){
var seq__12282__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12282__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12282__$1);
var G__12323 = cljs.core.chunk_rest.call(null,seq__12282__$1);
var G__12324 = c__4369__auto__;
var G__12325 = cljs.core.count.call(null,c__4369__auto__);
var G__12326 = (0);
seq__12282 = G__12323;
chunk__12283 = G__12324;
count__12284 = G__12325;
i__12285 = G__12326;
continue;
} else {
var vec__12287 = cljs.core.first.call(null,seq__12282__$1);
var k = cljs.core.nth.call(null,vec__12287,(0),null);
var v = cljs.core.nth.call(null,vec__12287,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__12282,chunk__12283,count__12284,i__12285,vec__12287,k,v,seq__12282__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__12255_SHARP_,p2__12256_SHARP_,p3__12257_SHARP_,p4__12254_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__12254_SHARP_);
});})(seq__12282,chunk__12283,count__12284,i__12285,vec__12287,k,v,seq__12282__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__12327 = cljs.core.next.call(null,seq__12282__$1);
var G__12328 = null;
var G__12329 = (0);
var G__12330 = (0);
seq__12282 = G__12327;
chunk__12283 = G__12328;
count__12284 = G__12329;
i__12285 = G__12330;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__12288 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__12289 = null;
var count__12290 = (0);
var i__12291 = (0);
while(true){
if((i__12291 < count__12290)){
var vec__12292 = cljs.core._nth.call(null,chunk__12289,i__12291);
var k = cljs.core.nth.call(null,vec__12292,(0),null);
var v = cljs.core.nth.call(null,vec__12292,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__12331 = seq__12288;
var G__12332 = chunk__12289;
var G__12333 = count__12290;
var G__12334 = (i__12291 + (1));
seq__12288 = G__12331;
chunk__12289 = G__12332;
count__12290 = G__12333;
i__12291 = G__12334;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12288);
if(temp__4126__auto__){
var seq__12288__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12288__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12288__$1);
var G__12335 = cljs.core.chunk_rest.call(null,seq__12288__$1);
var G__12336 = c__4369__auto__;
var G__12337 = cljs.core.count.call(null,c__4369__auto__);
var G__12338 = (0);
seq__12288 = G__12335;
chunk__12289 = G__12336;
count__12290 = G__12337;
i__12291 = G__12338;
continue;
} else {
var vec__12293 = cljs.core.first.call(null,seq__12288__$1);
var k = cljs.core.nth.call(null,vec__12293,(0),null);
var v = cljs.core.nth.call(null,vec__12293,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__12339 = cljs.core.next.call(null,seq__12288__$1);
var G__12340 = null;
var G__12341 = (0);
var G__12342 = (0);
seq__12288 = G__12339;
chunk__12289 = G__12340;
count__12290 = G__12341;
i__12291 = G__12342;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12343_SHARP_,p2__12344_SHARP_){
return p1__12343_SHARP_.appendChild(p2__12344_SHARP_);
}):(function (p1__12345_SHARP_,p2__12346_SHARP_){
try{return p1__12345_SHARP_.appendChild(p2__12346_SHARP_);
}catch (e12347){if((e12347 instanceof Error)){
var _ = e12347;
return null;
} else {
throw e12347;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__12353){
var vec__12359 = p__12353;
var child_cell = cljs.core.nth.call(null,vec__12359,(0),null);
var _ = cljs.core.nthnext.call(null,vec__12359,(1));
var kids = vec__12359;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__12359,child_cell,_,kids){
return (function (p1__12349_SHARP_,p2__12350_SHARP_,p3__12351_SHARP_,p4__12348_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__12348_SHARP_);
});})(vec__12359,child_cell,_,kids))
);
} else {
var node_12364 = ((function (vec__12359,child_cell,_,kids){
return (function (p1__12352_SHARP_){
if(typeof p1__12352_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__12352_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__12352_SHARP_))){
return p1__12352_SHARP_;
} else {
return null;
}
}
});})(vec__12359,child_cell,_,kids))
;
var seq__12360_12365 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_12364,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__12361_12366 = null;
var count__12362_12367 = (0);
var i__12363_12368 = (0);
while(true){
if((i__12363_12368 < count__12362_12367)){
var x_12369 = cljs.core._nth.call(null,chunk__12361_12366,i__12363_12368);
tailrecursion.hoplon.append_child.call(null,this$,x_12369);

var G__12370 = seq__12360_12365;
var G__12371 = chunk__12361_12366;
var G__12372 = count__12362_12367;
var G__12373 = (i__12363_12368 + (1));
seq__12360_12365 = G__12370;
chunk__12361_12366 = G__12371;
count__12362_12367 = G__12372;
i__12363_12368 = G__12373;
continue;
} else {
var temp__4126__auto___12374 = cljs.core.seq.call(null,seq__12360_12365);
if(temp__4126__auto___12374){
var seq__12360_12375__$1 = temp__4126__auto___12374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12360_12375__$1)){
var c__4369__auto___12376 = cljs.core.chunk_first.call(null,seq__12360_12375__$1);
var G__12377 = cljs.core.chunk_rest.call(null,seq__12360_12375__$1);
var G__12378 = c__4369__auto___12376;
var G__12379 = cljs.core.count.call(null,c__4369__auto___12376);
var G__12380 = (0);
seq__12360_12365 = G__12377;
chunk__12361_12366 = G__12378;
count__12362_12367 = G__12379;
i__12363_12368 = G__12380;
continue;
} else {
var x_12381 = cljs.core.first.call(null,seq__12360_12375__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_12381);

var G__12382 = cljs.core.next.call(null,seq__12360_12375__$1);
var G__12383 = null;
var G__12384 = (0);
var G__12385 = (0);
seq__12360_12365 = G__12382;
chunk__12361_12366 = G__12383;
count__12362_12367 = G__12384;
i__12363_12368 = G__12385;
continue;
}
} else {
}
}
break;
}
}

return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){
return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__12393__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12387 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12387,(0),null);
var kids = cljs.core.nth.call(null,vec__12387,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12388 = this$;
G__12388.hoplonIFn(attr,kids);

return G__12388;
} else {
var G__12389 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12389,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12389,kids);

return G__12389;
}
};
var G__12393 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12394__i = 0, G__12394__a = new Array(arguments.length -  1);
while (G__12394__i < G__12394__a.length) {G__12394__a[G__12394__i] = arguments[G__12394__i + 1]; ++G__12394__i;}
  args = new cljs.core.IndexedSeq(G__12394__a,0);
} 
return G__12393__delegate.call(this,self__,args);};
G__12393.cljs$lang$maxFixedArity = 1;
G__12393.cljs$lang$applyTo = (function (arglist__12395){
var self__ = cljs.core.first(arglist__12395);
var args = cljs.core.rest(arglist__12395);
return G__12393__delegate(self__,args);
});
G__12393.cljs$core$IFn$_invoke$arity$variadic = G__12393__delegate;
return G__12393;
})()
;

Element.prototype.apply = (function (self__,args12386){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12386)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12396__delegate = function (args){
var this$ = this;
var vec__12390 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12390,(0),null);
var kids = cljs.core.nth.call(null,vec__12390,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12391 = this$;
G__12391.hoplonIFn(attr,kids);

return G__12391;
} else {
var G__12392 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12392,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12392,kids);

return G__12392;
}
};
var G__12396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12397__i = 0, G__12397__a = new Array(arguments.length -  0);
while (G__12397__i < G__12397__a.length) {G__12397__a[G__12397__i] = arguments[G__12397__i + 0]; ++G__12397__i;}
  args = new cljs.core.IndexedSeq(G__12397__a,0);
} 
return G__12396__delegate.call(this,args);};
G__12396.cljs$lang$maxFixedArity = 0;
G__12396.cljs$lang$applyTo = (function (arglist__12398){
var args = cljs.core.seq(arglist__12398);
return G__12396__delegate(args);
});
G__12396.cljs$core$IFn$_invoke$arity$variadic = G__12396__delegate;
return G__12396;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){
return (function() { 
var G__12409__delegate = function (args){
var vec__12404 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__12404,(0),null);
var kids = cljs.core.nth.call(null,vec__12404,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__12405 = cljs.core.seq.call(null,kids);
var chunk__12406 = null;
var count__12407 = (0);
var i__12408 = (0);
while(true){
if((i__12408 < count__12407)){
var k = cljs.core._nth.call(null,chunk__12406,i__12408);
elem.appendChild(k);

var G__12410 = seq__12405;
var G__12411 = chunk__12406;
var G__12412 = count__12407;
var G__12413 = (i__12408 + (1));
seq__12405 = G__12410;
chunk__12406 = G__12411;
count__12407 = G__12412;
i__12408 = G__12413;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12405);
if(temp__4126__auto__){
var seq__12405__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12405__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12405__$1);
var G__12414 = cljs.core.chunk_rest.call(null,seq__12405__$1);
var G__12415 = c__4369__auto__;
var G__12416 = cljs.core.count.call(null,c__4369__auto__);
var G__12417 = (0);
seq__12405 = G__12414;
chunk__12406 = G__12415;
count__12407 = G__12416;
i__12408 = G__12417;
continue;
} else {
var k = cljs.core.first.call(null,seq__12405__$1);
elem.appendChild(k);

var G__12418 = cljs.core.next.call(null,seq__12405__$1);
var G__12419 = null;
var G__12420 = (0);
var G__12421 = (0);
seq__12405 = G__12418;
chunk__12406 = G__12419;
count__12407 = G__12420;
i__12408 = G__12421;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__12409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12422__i = 0, G__12422__a = new Array(arguments.length -  0);
while (G__12422__i < G__12422__a.length) {G__12422__a[G__12422__i] = arguments[G__12422__i + 0]; ++G__12422__i;}
  args = new cljs.core.IndexedSeq(G__12422__a,0);
} 
return G__12409__delegate.call(this,args);};
G__12409.cljs$lang$maxFixedArity = 0;
G__12409.cljs$lang$applyTo = (function (arglist__12423){
var args = cljs.core.seq(arglist__12423);
return G__12409__delegate(args);
});
G__12409.cljs$core$IFn$_invoke$arity$variadic = G__12409__delegate;
return G__12409;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){
return (function() { 
var G__12424__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__12424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12425__i = 0, G__12425__a = new Array(arguments.length -  0);
while (G__12425__i < G__12425__a.length) {G__12425__a[G__12425__i] = arguments[G__12425__i + 0]; ++G__12425__i;}
  args = new cljs.core.IndexedSeq(G__12425__a,0);
} 
return G__12424__delegate.call(this,args);};
G__12424.cljs$lang$maxFixedArity = 0;
G__12424.cljs$lang$applyTo = (function (arglist__12426){
var args = cljs.core.seq(arglist__12426);
return G__12424__delegate(args);
});
G__12424.cljs$core$IFn$_invoke$arity$variadic = G__12424__delegate;
return G__12424;
})()
;
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.html = (function() { 
var html__delegate = function (args){
var vec__12428 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__12428,(0),null);
var _ = cljs.core.nth.call(null,vec__12428,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
};
var html = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12429__i = 0, G__12429__a = new Array(arguments.length -  0);
while (G__12429__i < G__12429__a.length) {G__12429__a[G__12429__i] = arguments[G__12429__i + 0]; ++G__12429__i;}
  args = new cljs.core.IndexedSeq(G__12429__a,0);
} 
return html__delegate.call(this,args);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__12430){
var args = cljs.core.seq(arglist__12430);
return html__delegate(args);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor.call(null,"main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__12431_SHARP_){
return document.createTextNode(p1__12431_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__12432_SHARP_){
return document.createComment(p1__12432_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__12433_SHARP_){
var e = jQuery(p1__12433_SHARP_.target);
if(cljs.core.truth_((function (){var or__3582__auto__ = e.attr("action");
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__12433_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){
return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",305978217));
});
tailrecursion.hoplon.rel = (function rel(other,event){
var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());
var ox = os.call(null,"left");
var oy = os.call(null,"top");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",-1757859776),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));

return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){
return e.val();
});
var text_val_BANG___2 = (function (e,v){
return e.val([cljs.core.str(v)].join(''));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){
return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__4479__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4480__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4481__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4482__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4483__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__){
return (function (elem,key,val){
return key;
});})(method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__4483__auto__,method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__12434__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__12434 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__12435__i = 0, G__12435__a = new Array(arguments.length -  2);
while (G__12435__i < G__12435__a.length) {G__12435__a[G__12435__i] = arguments[G__12435__i + 2]; ++G__12435__i;}
  args = new cljs.core.IndexedSeq(G__12435__a,0);
} 
return G__12434__delegate.call(this,elem,_,args);};
G__12434.cljs$lang$maxFixedArity = 2;
G__12434.cljs$lang$applyTo = (function (arglist__12436){
var elem = cljs.core.first(arglist__12436);
arglist__12436 = cljs.core.next(arglist__12436);
var _ = cljs.core.first(arglist__12436);
var args = cljs.core.rest(arglist__12436);
return G__12434__delegate(elem,_,args);
});
G__12434.cljs$core$IFn$_invoke$arity$variadic = G__12434__delegate;
return G__12434;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12437 = cljs.core.seq.call(null,kvs);
var chunk__12438 = null;
var count__12439 = (0);
var i__12440 = (0);
while(true){
if((i__12440 < count__12439)){
var vec__12441 = cljs.core._nth.call(null,chunk__12438,i__12440);
var k = cljs.core.nth.call(null,vec__12441,(0),null);
var v = cljs.core.nth.call(null,vec__12441,(1),null);
var k_12443__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_12443__$1);
} else {
e.attr(k_12443__$1,((cljs.core._EQ_.call(null,true,v))?k_12443__$1:v));
}

var G__12444 = seq__12437;
var G__12445 = chunk__12438;
var G__12446 = count__12439;
var G__12447 = (i__12440 + (1));
seq__12437 = G__12444;
chunk__12438 = G__12445;
count__12439 = G__12446;
i__12440 = G__12447;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12437);
if(temp__4126__auto__){
var seq__12437__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12437__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12437__$1);
var G__12448 = cljs.core.chunk_rest.call(null,seq__12437__$1);
var G__12449 = c__4369__auto__;
var G__12450 = cljs.core.count.call(null,c__4369__auto__);
var G__12451 = (0);
seq__12437 = G__12448;
chunk__12438 = G__12449;
count__12439 = G__12450;
i__12440 = G__12451;
continue;
} else {
var vec__12442 = cljs.core.first.call(null,seq__12437__$1);
var k = cljs.core.nth.call(null,vec__12442,(0),null);
var v = cljs.core.nth.call(null,vec__12442,(1),null);
var k_12452__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_12452__$1);
} else {
e.attr(k_12452__$1,((cljs.core._EQ_.call(null,true,v))?k_12452__$1:v));
}

var G__12453 = cljs.core.next.call(null,seq__12437__$1);
var G__12454 = null;
var G__12455 = (0);
var G__12456 = (0);
seq__12437 = G__12453;
chunk__12438 = G__12454;
count__12439 = G__12455;
i__12440 = G__12456;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__12457_SHARP_){
return cljs.core.zipmap.call(null,p1__12457_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__12458 = cljs.core.seq.call(null,clmap);
var chunk__12459 = null;
var count__12460 = (0);
var i__12461 = (0);
while(true){
if((i__12461 < count__12460)){
var vec__12462 = cljs.core._nth.call(null,chunk__12459,i__12461);
var c = cljs.core.nth.call(null,vec__12462,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__12462,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__12464 = seq__12458;
var G__12465 = chunk__12459;
var G__12466 = count__12460;
var G__12467 = (i__12461 + (1));
seq__12458 = G__12464;
chunk__12459 = G__12465;
count__12460 = G__12466;
i__12461 = G__12467;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12458);
if(temp__4126__auto__){
var seq__12458__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12458__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12458__$1);
var G__12468 = cljs.core.chunk_rest.call(null,seq__12458__$1);
var G__12469 = c__4369__auto__;
var G__12470 = cljs.core.count.call(null,c__4369__auto__);
var G__12471 = (0);
seq__12458 = G__12468;
chunk__12459 = G__12469;
count__12460 = G__12470;
i__12461 = G__12471;
continue;
} else {
var vec__12463 = cljs.core.first.call(null,seq__12458__$1);
var c = cljs.core.nth.call(null,vec__12463,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__12463,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__12472 = cljs.core.next.call(null,seq__12458__$1);
var G__12473 = null;
var G__12474 = (0);
var G__12475 = (0);
seq__12458 = G__12472;
chunk__12459 = G__12473;
count__12460 = G__12474;
i__12461 = G__12475;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12476 = cljs.core.seq.call(null,kvs);
var chunk__12477 = null;
var count__12478 = (0);
var i__12479 = (0);
while(true){
if((i__12479 < count__12478)){
var vec__12480 = cljs.core._nth.call(null,chunk__12477,i__12479);
var k = cljs.core.nth.call(null,vec__12480,(0),null);
var v = cljs.core.nth.call(null,vec__12480,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__12482 = seq__12476;
var G__12483 = chunk__12477;
var G__12484 = count__12478;
var G__12485 = (i__12479 + (1));
seq__12476 = G__12482;
chunk__12477 = G__12483;
count__12478 = G__12484;
i__12479 = G__12485;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12476);
if(temp__4126__auto__){
var seq__12476__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12476__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12476__$1);
var G__12486 = cljs.core.chunk_rest.call(null,seq__12476__$1);
var G__12487 = c__4369__auto__;
var G__12488 = cljs.core.count.call(null,c__4369__auto__);
var G__12489 = (0);
seq__12476 = G__12486;
chunk__12477 = G__12487;
count__12478 = G__12488;
i__12479 = G__12489;
continue;
} else {
var vec__12481 = cljs.core.first.call(null,seq__12476__$1);
var k = cljs.core.nth.call(null,vec__12481,(0),null);
var v = cljs.core.nth.call(null,vec__12481,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__12490 = cljs.core.next.call(null,seq__12476__$1);
var G__12491 = null;
var G__12492 = (0);
var G__12493 = (0);
seq__12476 = G__12490;
chunk__12477 = G__12491;
count__12478 = G__12492;
i__12479 = G__12493;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__4479__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4480__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4481__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4482__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4483__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__,hierarchy__4483__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__4483__auto__,method_table__4479__auto__,prefer_table__4480__auto__,method_cache__4481__auto__,cached_hierarchy__4482__auto__));
})();
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,event,callback){
return tailrecursion.hoplon.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var items_seq = tailrecursion.javelin.formula.call(null,((function (pool_size){
return (function (G__12519,G__12520){
return G__12519.call(null,G__12520);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__12522,G__12521){
return G__12521.call(null,G__12522);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__12494_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__12524,G__12523){
return (G__12523 < G__12524);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__12494_SHARP_);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__12495_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__12526,G__12527,G__12525){
return G__12525.call(null,G__12526,G__12527);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__12495_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__12541,G__12539,G__12534,G__12532,G__12533,G__12538,G__12540,G__12535,G__12537,G__12536){
if(cljs.core.truth_((G__12532 < G__12533))){
var seq__12528_12542 = cljs.core.seq.call(null,G__12534.call(null,G__12532,G__12533));
var chunk__12529_12543 = null;
var count__12530_12544 = (0);
var i__12531_12545 = (0);
while(true){
if(cljs.core.truth_((i__12531_12545 < count__12530_12544))){
var i_12546 = cljs.core._nth.call(null,chunk__12529_12543,i__12531_12545);
var e_12547 = G__12535.call(null,G__12536.call(null,i_12546)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__12537.call(null,i_12546));
if(cljs.core.not.call(null,G__12538)){
G__12539.appendChild(e_12547);
} else {
G__12539.insertBefore(e_12547,G__12539.firstChild);
}

var G__12548 = seq__12528_12542;
var G__12549 = chunk__12529_12543;
var G__12550 = count__12530_12544;
var G__12551 = (i__12531_12545 + (1));
seq__12528_12542 = G__12548;
chunk__12529_12543 = G__12549;
count__12530_12544 = G__12550;
i__12531_12545 = G__12551;
continue;
} else {
var temp__4126__auto___12552 = cljs.core.seq.call(null,seq__12528_12542);
if(temp__4126__auto___12552){
var seq__12528_12553__$1 = temp__4126__auto___12552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12528_12553__$1)){
var c__4369__auto___12554 = cljs.core.chunk_first.call(null,seq__12528_12553__$1);
var G__12555 = cljs.core.chunk_rest.call(null,seq__12528_12553__$1);
var G__12556 = c__4369__auto___12554;
var G__12557 = cljs.core.count.call(null,c__4369__auto___12554);
var G__12558 = (0);
seq__12528_12542 = G__12555;
chunk__12529_12543 = G__12556;
count__12530_12544 = G__12557;
i__12531_12545 = G__12558;
continue;
} else {
var i_12559 = cljs.core.first.call(null,seq__12528_12553__$1);
var e_12560 = G__12535.call(null,G__12536.call(null,i_12559)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__12537.call(null,i_12559));
if(cljs.core.not.call(null,G__12538)){
G__12539.appendChild(e_12560);
} else {
G__12539.insertBefore(e_12560,G__12539.firstChild);
}

var G__12561 = cljs.core.next.call(null,seq__12528_12553__$1);
var G__12562 = null;
var G__12563 = (0);
var G__12564 = (0);
seq__12528_12542 = G__12561;
chunk__12529_12543 = G__12562;
count__12530_12544 = G__12563;
i__12531_12545 = G__12564;
continue;
}
} else {
}
}
break;
}

return G__12540.call(null,G__12541,G__12533);
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);

return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){
var r = (function (){var ret__5300__auto__ = tailrecursion.javelin.cell.call(null,window.location.hash);
setInterval(((function (ret__5300__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,ret__5300__auto__,window.location.hash);
});})(ret__5300__auto__))
,(100));

return tailrecursion.javelin.formula.call(null,((function (ret__5300__auto__){
return (function (G__12574){
return G__12574;
});})(ret__5300__auto__))
).call(null,ret__5300__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__12576,G__12575){
if(cljs.core.truth_(G__12575.call(null,"",G__12576))){
return G__12576;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});
var route_cell__1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,setter_or_dfl))){
var setter__5301__auto__ = setter_or_dfl;
var callback__5302__auto__ = (function (){var or__3582__auto__ = null;
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5301__auto__,callback__5302__auto__){
return (function (G__12578,G__12577){
return G__12577.location.hash = G__12578;
});})(setter__5301__auto__,callback__5302__auto__))
).call(null,setter__5301__auto__,window);

setInterval(((function (setter__5301__auto__,callback__5302__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5301__auto__),window.location.hash)){
callback__5302__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5301__auto__);
} else {
return null;
}
});})(setter__5301__auto__,callback__5302__auto__))
,(100));

return setter__5301__auto__;
} else {
var r = route_cell.call(null);
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__12579,G__12580){
var or__3582__auto__ = G__12579;
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return G__12580;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});
var route_cell__2 = (function (setter,callback){
var setter__5301__auto__ = setter;
var callback__5302__auto__ = (function (){var or__3582__auto__ = callback;
if(cljs.core.truth_(or__3582__auto__)){
return or__3582__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5301__auto__,callback__5302__auto__){
return (function (G__12582,G__12581){
return G__12581.location.hash = G__12582;
});})(setter__5301__auto__,callback__5302__auto__))
).call(null,setter__5301__auto__,window);

setInterval(((function (setter__5301__auto__,callback__5302__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5301__auto__),window.location.hash)){
callback__5302__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5301__auto__);
} else {
return null;
}
});})(setter__5301__auto__,callback__5302__auto__))
,(100));

return setter__5301__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
