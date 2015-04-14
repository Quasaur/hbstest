// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,(0));
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){
var walk = (function walk(queue){
var temp__4126__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4126__auto__)){
var node = temp__4126__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4126__auto__){
return (function (){
return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4126__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function propagate_STAR_(pri_map){
while(true){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4126__auto__)){
var next = temp__4126__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4124__auto__ = next.thunk;
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__11882 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__11880_SHARP_,p2__11881_SHARP_){
return cljs.core.assoc.call(null,p1__11880_SHARP_,p2__11881_SHARP_,p2__11881_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__11882;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e11884){if((e11884 instanceof Error)){
var _ = e11884;
return null;
} else {
throw e11884;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__11887 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__11887);

return G__11887;
} else {
var G__11888 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__11888));

return G__11888;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.destroy_cell_BANG_ = (function() { 
var destroy_cell_BANG___delegate = function (this$,p__11889){
var vec__11895 = p__11889;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__11895,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__11896 = cljs.core.seq.call(null,srcs);
var chunk__11897 = null;
var count__11898 = (0);
var i__11899 = (0);
while(true){
if((i__11899 < count__11898)){
var src = cljs.core._nth.call(null,chunk__11897,i__11899);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__11900 = seq__11896;
var G__11901 = chunk__11897;
var G__11902 = count__11898;
var G__11903 = (i__11899 + (1));
seq__11896 = G__11900;
chunk__11897 = G__11901;
count__11898 = G__11902;
i__11899 = G__11903;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11896);
if(temp__4126__auto__){
var seq__11896__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11896__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__11896__$1);
var G__11904 = cljs.core.chunk_rest.call(null,seq__11896__$1);
var G__11905 = c__4369__auto__;
var G__11906 = cljs.core.count.call(null,c__4369__auto__);
var G__11907 = (0);
seq__11896 = G__11904;
chunk__11897 = G__11905;
count__11898 = G__11906;
i__11899 = G__11907;
continue;
} else {
var src = cljs.core.first.call(null,seq__11896__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__11908 = cljs.core.next.call(null,seq__11896__$1);
var G__11909 = null;
var G__11910 = (0);
var G__11911 = (0);
seq__11896 = G__11908;
chunk__11897 = G__11909;
count__11898 = G__11910;
i__11899 = G__11911;
continue;
}
} else {
return null;
}
}
break;
}
};
var destroy_cell_BANG_ = function (this$,var_args){
var p__11889 = null;
if (arguments.length > 1) {
var G__11912__i = 0, G__11912__a = new Array(arguments.length -  1);
while (G__11912__i < G__11912__a.length) {G__11912__a[G__11912__i] = arguments[G__11912__i + 1]; ++G__11912__i;}
  p__11889 = new cljs.core.IndexedSeq(G__11912__a,0);
} 
return destroy_cell_BANG___delegate.call(this,this$,p__11889);};
destroy_cell_BANG_.cljs$lang$maxFixedArity = 1;
destroy_cell_BANG_.cljs$lang$applyTo = (function (arglist__11913){
var this$ = cljs.core.first(arglist__11913);
var p__11889 = cljs.core.rest(arglist__11913);
return destroy_cell_BANG___delegate(this$,p__11889);
});
destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = destroy_cell_BANG___delegate;
return destroy_cell_BANG_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__11916){
var vec__11930 = p__11916;
var f = cljs.core.nth.call(null,vec__11930,(0),null);
var sources = cljs.core.nth.call(null,vec__11930,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__11931_11943 = cljs.core.seq.call(null,this$.sources);
var chunk__11932_11944 = null;
var count__11933_11945 = (0);
var i__11934_11946 = (0);
while(true){
if((i__11934_11946 < count__11933_11945)){
var source_11947 = cljs.core._nth.call(null,chunk__11932_11944,i__11934_11946);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_11947))){
source_11947.sinks = cljs.core.conj.call(null,source_11947.sinks,this$);

if((source_11947.rank > this$.rank)){
var seq__11935_11948 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__11931_11943,chunk__11932_11944,count__11933_11945,i__11934_11946,source_11947,vec__11930,f,sources){
return (function (p1__11914_SHARP_){
return p1__11914_SHARP_.sinks;
});})(seq__11931_11943,chunk__11932_11944,count__11933_11945,i__11934_11946,source_11947,vec__11930,f,sources))
,source_11947));
var chunk__11936_11949 = null;
var count__11937_11950 = (0);
var i__11938_11951 = (0);
while(true){
if((i__11938_11951 < count__11937_11950)){
var dep_11952 = cljs.core._nth.call(null,chunk__11936_11949,i__11938_11951);
dep_11952.rank = tailrecursion.javelin.next_rank.call(null);

var G__11953 = seq__11935_11948;
var G__11954 = chunk__11936_11949;
var G__11955 = count__11937_11950;
var G__11956 = (i__11938_11951 + (1));
seq__11935_11948 = G__11953;
chunk__11936_11949 = G__11954;
count__11937_11950 = G__11955;
i__11938_11951 = G__11956;
continue;
} else {
var temp__4126__auto___11957 = cljs.core.seq.call(null,seq__11935_11948);
if(temp__4126__auto___11957){
var seq__11935_11958__$1 = temp__4126__auto___11957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11935_11958__$1)){
var c__4369__auto___11959 = cljs.core.chunk_first.call(null,seq__11935_11958__$1);
var G__11960 = cljs.core.chunk_rest.call(null,seq__11935_11958__$1);
var G__11961 = c__4369__auto___11959;
var G__11962 = cljs.core.count.call(null,c__4369__auto___11959);
var G__11963 = (0);
seq__11935_11948 = G__11960;
chunk__11936_11949 = G__11961;
count__11937_11950 = G__11962;
i__11938_11951 = G__11963;
continue;
} else {
var dep_11964 = cljs.core.first.call(null,seq__11935_11958__$1);
dep_11964.rank = tailrecursion.javelin.next_rank.call(null);

var G__11965 = cljs.core.next.call(null,seq__11935_11958__$1);
var G__11966 = null;
var G__11967 = (0);
var G__11968 = (0);
seq__11935_11948 = G__11965;
chunk__11936_11949 = G__11966;
count__11937_11950 = G__11967;
i__11938_11951 = G__11968;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__11969 = seq__11931_11943;
var G__11970 = chunk__11932_11944;
var G__11971 = count__11933_11945;
var G__11972 = (i__11934_11946 + (1));
seq__11931_11943 = G__11969;
chunk__11932_11944 = G__11970;
count__11933_11945 = G__11971;
i__11934_11946 = G__11972;
continue;
} else {
var temp__4126__auto___11973 = cljs.core.seq.call(null,seq__11931_11943);
if(temp__4126__auto___11973){
var seq__11931_11974__$1 = temp__4126__auto___11973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11931_11974__$1)){
var c__4369__auto___11975 = cljs.core.chunk_first.call(null,seq__11931_11974__$1);
var G__11976 = cljs.core.chunk_rest.call(null,seq__11931_11974__$1);
var G__11977 = c__4369__auto___11975;
var G__11978 = cljs.core.count.call(null,c__4369__auto___11975);
var G__11979 = (0);
seq__11931_11943 = G__11976;
chunk__11932_11944 = G__11977;
count__11933_11945 = G__11978;
i__11934_11946 = G__11979;
continue;
} else {
var source_11980 = cljs.core.first.call(null,seq__11931_11974__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_11980))){
source_11980.sinks = cljs.core.conj.call(null,source_11980.sinks,this$);

if((source_11980.rank > this$.rank)){
var seq__11939_11981 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__11931_11943,chunk__11932_11944,count__11933_11945,i__11934_11946,source_11980,seq__11931_11974__$1,temp__4126__auto___11973,vec__11930,f,sources){
return (function (p1__11914_SHARP_){
return p1__11914_SHARP_.sinks;
});})(seq__11931_11943,chunk__11932_11944,count__11933_11945,i__11934_11946,source_11980,seq__11931_11974__$1,temp__4126__auto___11973,vec__11930,f,sources))
,source_11980));
var chunk__11940_11982 = null;
var count__11941_11983 = (0);
var i__11942_11984 = (0);
while(true){
if((i__11942_11984 < count__11941_11983)){
var dep_11985 = cljs.core._nth.call(null,chunk__11940_11982,i__11942_11984);
dep_11985.rank = tailrecursion.javelin.next_rank.call(null);

var G__11986 = seq__11939_11981;
var G__11987 = chunk__11940_11982;
var G__11988 = count__11941_11983;
var G__11989 = (i__11942_11984 + (1));
seq__11939_11981 = G__11986;
chunk__11940_11982 = G__11987;
count__11941_11983 = G__11988;
i__11942_11984 = G__11989;
continue;
} else {
var temp__4126__auto___11990__$1 = cljs.core.seq.call(null,seq__11939_11981);
if(temp__4126__auto___11990__$1){
var seq__11939_11991__$1 = temp__4126__auto___11990__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11939_11991__$1)){
var c__4369__auto___11992 = cljs.core.chunk_first.call(null,seq__11939_11991__$1);
var G__11993 = cljs.core.chunk_rest.call(null,seq__11939_11991__$1);
var G__11994 = c__4369__auto___11992;
var G__11995 = cljs.core.count.call(null,c__4369__auto___11992);
var G__11996 = (0);
seq__11939_11981 = G__11993;
chunk__11940_11982 = G__11994;
count__11941_11983 = G__11995;
i__11942_11984 = G__11996;
continue;
} else {
var dep_11997 = cljs.core.first.call(null,seq__11939_11991__$1);
dep_11997.rank = tailrecursion.javelin.next_rank.call(null);

var G__11998 = cljs.core.next.call(null,seq__11939_11991__$1);
var G__11999 = null;
var G__12000 = (0);
var G__12001 = (0);
seq__11939_11981 = G__11998;
chunk__11940_11982 = G__11999;
count__11941_11983 = G__12000;
i__11942_11984 = G__12001;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__12002 = cljs.core.next.call(null,seq__11931_11974__$1);
var G__12003 = null;
var G__12004 = (0);
var G__12005 = (0);
seq__11931_11943 = G__12002;
chunk__11932_11944 = G__12003;
count__11933_11945 = G__12004;
i__11934_11946 = G__12005;
continue;
}
} else {
}
}
break;
}

var compute_12006 = ((function (vec__11930,f,sources){
return (function (p1__11915_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__11915_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__11915_SHARP_)));
});})(vec__11930,f,sources))
;
this$.thunk = ((function (compute_12006,vec__11930,f,sources){
return (function (){
return this$.state = compute_12006.call(null,this$.sources);
});})(compute_12006,vec__11930,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
};
var set_formula_BANG_ = function (this$,var_args){
var p__11916 = null;
if (arguments.length > 1) {
var G__12007__i = 0, G__12007__a = new Array(arguments.length -  1);
while (G__12007__i < G__12007__a.length) {G__12007__a[G__12007__i] = arguments[G__12007__i + 1]; ++G__12007__i;}
  p__11916 = new cljs.core.IndexedSeq(G__12007__a,0);
} 
return set_formula_BANG___delegate.call(this,this$,p__11916);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__12008){
var this$ = cljs.core.first(arglist__12008);
var p__11916 = cljs.core.rest(arglist__12008);
return set_formula_BANG___delegate(this$,p__11916);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__12009 = cljs.core.seq.call(null,self__.watches);
var chunk__12010 = null;
var count__12011 = (0);
var i__12012 = (0);
while(true){
if((i__12012 < count__12011)){
var vec__12013 = cljs.core._nth.call(null,chunk__12010,i__12012);
var key = cljs.core.nth.call(null,vec__12013,(0),null);
var f = cljs.core.nth.call(null,vec__12013,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12015 = seq__12009;
var G__12016 = chunk__12010;
var G__12017 = count__12011;
var G__12018 = (i__12012 + (1));
seq__12009 = G__12015;
chunk__12010 = G__12016;
count__12011 = G__12017;
i__12012 = G__12018;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12009);
if(temp__4126__auto__){
var seq__12009__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12009__$1)){
var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12009__$1);
var G__12019 = cljs.core.chunk_rest.call(null,seq__12009__$1);
var G__12020 = c__4369__auto__;
var G__12021 = cljs.core.count.call(null,c__4369__auto__);
var G__12022 = (0);
seq__12009 = G__12019;
chunk__12010 = G__12020;
count__12011 = G__12021;
i__12012 = G__12022;
continue;
} else {
var vec__12014 = cljs.core.first.call(null,seq__12009__$1);
var key = cljs.core.nth.call(null,vec__12014,(0),null);
var f = cljs.core.nth.call(null,vec__12014,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12023 = cljs.core.next.call(null,seq__12009__$1);
var G__12024 = null;
var G__12025 = (0);
var G__12026 = (0);
seq__12009 = G__12023;
chunk__12010 = G__12024;
count__12011 = G__12025;
i__12012 = G__12026;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4169__auto__,writer__4170__auto__,opt__4171__auto__){
return cljs.core._write.call(null,writer__4170__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__3570__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3570__auto__)){
return c.thunk;
} else {
return and__3570__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__3570__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3570__auto__)){
return c.update;
} else {
return and__3570__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){
if(cljs.core.truth_((function (){var and__3570__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3570__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
} else {
return and__3570__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function formula(f){
return (function() { 
var G__12027__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__12027 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__12028__i = 0, G__12028__a = new Array(arguments.length -  0);
while (G__12028__i < G__12028__a.length) {G__12028__a[G__12028__i] = arguments[G__12028__i + 0]; ++G__12028__i;}
  sources = new cljs.core.IndexedSeq(G__12028__a,0);
} 
return G__12027__delegate.call(this,sources);};
G__12027.cljs$lang$maxFixedArity = 0;
G__12027.cljs$lang$applyTo = (function (arglist__12029){
var sources = cljs.core.seq(arglist__12029);
return G__12027__delegate(sources);
});
G__12027.cljs$core$IFn$_invoke$arity$variadic = G__12027__delegate;
return G__12027;
})()
;
});
tailrecursion.javelin.lens = (function lens(c,f){
var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function dosync_STAR_(thunk){
var bind = (function (p1__12030_SHARP_){
var _STAR_tx_STAR_12033 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__12030_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12033;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_12034 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12034;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__12035_SHARP_,p2__12036_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__12035_SHARP_,p2__12036_SHARP_),p2__12036_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__12038_SHARP_,p2__12037_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__12038_SHARP_,p2__12037_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12040__delegate = function (rest__12039_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__12039_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__12039_SHARP_);

return news;
};
var G__12040 = function (var_args){
var rest__12039_SHARP_ = null;
if (arguments.length > 0) {
var G__12041__i = 0, G__12041__a = new Array(arguments.length -  0);
while (G__12041__i < G__12041__a.length) {G__12041__a[G__12041__i] = arguments[G__12041__i + 0]; ++G__12041__i;}
  rest__12039_SHARP_ = new cljs.core.IndexedSeq(G__12041__a,0);
} 
return G__12040__delegate.call(this,rest__12039_SHARP_);};
G__12040.cljs$lang$maxFixedArity = 0;
G__12040.cljs$lang$applyTo = (function (arglist__12042){
var rest__12039_SHARP_ = cljs.core.seq(arglist__12042);
return G__12040__delegate(rest__12039_SHARP_);
});
G__12040.cljs$core$IFn$_invoke$arity$variadic = G__12040__delegate;
return G__12040;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;
if (arguments.length > 0) {
var G__12043__i = 0, G__12043__a = new Array(arguments.length -  0);
while (G__12043__i < G__12043__a.length) {G__12043__a[G__12043__i] = arguments[G__12043__i + 0]; ++G__12043__i;}
  cells = new cljs.core.IndexedSeq(G__12043__a,0);
} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12044){
var cells = cljs.core.seq(arglist__12044);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__12045_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__12045_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__12046_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__12046_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__12051_12055 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__12052_12056 = null;
var count__12053_12057 = (0);
var i__12054_12058 = (0);
while(true){
if((i__12054_12058 < count__12053_12057)){
var i_12059 = cljs.core._nth.call(null,chunk__12052_12056,i__12054_12058);
f__$1.call(null,ith_item__$1.call(null,i_12059));

var G__12060 = seq__12051_12055;
var G__12061 = chunk__12052_12056;
var G__12062 = count__12053_12057;
var G__12063 = (i__12054_12058 + (1));
seq__12051_12055 = G__12060;
chunk__12052_12056 = G__12061;
count__12053_12057 = G__12062;
i__12054_12058 = G__12063;
continue;
} else {
var temp__4126__auto___12064 = cljs.core.seq.call(null,seq__12051_12055);
if(temp__4126__auto___12064){
var seq__12051_12065__$1 = temp__4126__auto___12064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12051_12065__$1)){
var c__4369__auto___12066 = cljs.core.chunk_first.call(null,seq__12051_12065__$1);
var G__12067 = cljs.core.chunk_rest.call(null,seq__12051_12065__$1);
var G__12068 = c__4369__auto___12066;
var G__12069 = cljs.core.count.call(null,c__4369__auto___12066);
var G__12070 = (0);
seq__12051_12055 = G__12067;
chunk__12052_12056 = G__12068;
count__12053_12057 = G__12069;
i__12054_12058 = G__12070;
continue;
} else {
var i_12071 = cljs.core.first.call(null,seq__12051_12065__$1);
f__$1.call(null,ith_item__$1.call(null,i_12071));

var G__12072 = cljs.core.next.call(null,seq__12051_12065__$1);
var G__12073 = null;
var G__12074 = (0);
var G__12075 = (0);
seq__12051_12055 = G__12072;
chunk__12052_12056 = G__12073;
count__12053_12057 = G__12074;
i__12054_12058 = G__12075;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});
