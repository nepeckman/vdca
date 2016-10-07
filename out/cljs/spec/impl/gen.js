// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10429__auto__,writer__10430__auto__,opt__10431__auto__){
return cljs.core._write.call(null,writer__10430__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__10905__auto__ = [];
var len__10898__auto___12956 = arguments.length;
var i__10899__auto___12957 = (0);
while(true){
if((i__10899__auto___12957 < len__10898__auto___12956)){
args__10905__auto__.push((arguments[i__10899__auto___12957]));

var G__12958 = (i__10899__auto___12957 + (1));
i__10899__auto___12957 = G__12958;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12955){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12955));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__10905__auto__ = [];
var len__10898__auto___12960 = arguments.length;
var i__10899__auto___12961 = (0);
while(true){
if((i__10899__auto___12961 < len__10898__auto___12960)){
args__10905__auto__.push((arguments[i__10899__auto___12961]));

var G__12962 = (i__10899__auto___12961 + (1));
i__10899__auto___12961 = G__12962;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12959){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12959));
});

var g_QMARK__12963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12964 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12963){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12963))
,null));
var mkg_12965 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12963,g_12964){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12963,g_12964))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12963,g_12964,mkg_12965){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12963).call(null,x);
});})(g_QMARK__12963,g_12964,mkg_12965))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12963,g_12964,mkg_12965){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12965).call(null,gfn);
});})(g_QMARK__12963,g_12964,mkg_12965))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12963,g_12964,mkg_12965){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12964).call(null,generator);
});})(g_QMARK__12963,g_12964,mkg_12965))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10974__auto___12984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__10974__auto___12984){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10905__auto__ = [];
var len__10898__auto___12985 = arguments.length;
var i__10899__auto___12986 = (0);
while(true){
if((i__10899__auto___12986 < len__10898__auto___12985)){
args__10905__auto__.push((arguments[i__10899__auto___12986]));

var G__12987 = (i__10899__auto___12986 + (1));
i__10899__auto___12986 = G__12987;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___12984))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___12984){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___12984),args);
});})(g__10974__auto___12984))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__10974__auto___12984){
return (function (seq12966){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12966));
});})(g__10974__auto___12984))
;


var g__10974__auto___12988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__10974__auto___12988){
return (function cljs$spec$impl$gen$list(var_args){
var args__10905__auto__ = [];
var len__10898__auto___12989 = arguments.length;
var i__10899__auto___12990 = (0);
while(true){
if((i__10899__auto___12990 < len__10898__auto___12989)){
args__10905__auto__.push((arguments[i__10899__auto___12990]));

var G__12991 = (i__10899__auto___12990 + (1));
i__10899__auto___12990 = G__12991;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___12988))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___12988){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___12988),args);
});})(g__10974__auto___12988))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__10974__auto___12988){
return (function (seq12967){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12967));
});})(g__10974__auto___12988))
;


var g__10974__auto___12992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__10974__auto___12992){
return (function cljs$spec$impl$gen$map(var_args){
var args__10905__auto__ = [];
var len__10898__auto___12993 = arguments.length;
var i__10899__auto___12994 = (0);
while(true){
if((i__10899__auto___12994 < len__10898__auto___12993)){
args__10905__auto__.push((arguments[i__10899__auto___12994]));

var G__12995 = (i__10899__auto___12994 + (1));
i__10899__auto___12994 = G__12995;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___12992))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___12992){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___12992),args);
});})(g__10974__auto___12992))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__10974__auto___12992){
return (function (seq12968){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12968));
});})(g__10974__auto___12992))
;


var g__10974__auto___12996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__10974__auto___12996){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10905__auto__ = [];
var len__10898__auto___12997 = arguments.length;
var i__10899__auto___12998 = (0);
while(true){
if((i__10899__auto___12998 < len__10898__auto___12997)){
args__10905__auto__.push((arguments[i__10899__auto___12998]));

var G__12999 = (i__10899__auto___12998 + (1));
i__10899__auto___12998 = G__12999;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___12996))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___12996){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___12996),args);
});})(g__10974__auto___12996))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__10974__auto___12996){
return (function (seq12969){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12969));
});})(g__10974__auto___12996))
;


var g__10974__auto___13000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__10974__auto___13000){
return (function cljs$spec$impl$gen$set(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13001 = arguments.length;
var i__10899__auto___13002 = (0);
while(true){
if((i__10899__auto___13002 < len__10898__auto___13001)){
args__10905__auto__.push((arguments[i__10899__auto___13002]));

var G__13003 = (i__10899__auto___13002 + (1));
i__10899__auto___13002 = G__13003;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13000))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13000){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13000),args);
});})(g__10974__auto___13000))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__10974__auto___13000){
return (function (seq12970){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12970));
});})(g__10974__auto___13000))
;


var g__10974__auto___13004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__10974__auto___13004){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13005 = arguments.length;
var i__10899__auto___13006 = (0);
while(true){
if((i__10899__auto___13006 < len__10898__auto___13005)){
args__10905__auto__.push((arguments[i__10899__auto___13006]));

var G__13007 = (i__10899__auto___13006 + (1));
i__10899__auto___13006 = G__13007;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13004))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13004){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13004),args);
});})(g__10974__auto___13004))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__10974__auto___13004){
return (function (seq12971){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12971));
});})(g__10974__auto___13004))
;


var g__10974__auto___13008 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__10974__auto___13008){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13009 = arguments.length;
var i__10899__auto___13010 = (0);
while(true){
if((i__10899__auto___13010 < len__10898__auto___13009)){
args__10905__auto__.push((arguments[i__10899__auto___13010]));

var G__13011 = (i__10899__auto___13010 + (1));
i__10899__auto___13010 = G__13011;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13008))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13008){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13008),args);
});})(g__10974__auto___13008))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__10974__auto___13008){
return (function (seq12972){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12972));
});})(g__10974__auto___13008))
;


var g__10974__auto___13012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__10974__auto___13012){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13013 = arguments.length;
var i__10899__auto___13014 = (0);
while(true){
if((i__10899__auto___13014 < len__10898__auto___13013)){
args__10905__auto__.push((arguments[i__10899__auto___13014]));

var G__13015 = (i__10899__auto___13014 + (1));
i__10899__auto___13014 = G__13015;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13012))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13012){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13012),args);
});})(g__10974__auto___13012))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__10974__auto___13012){
return (function (seq12973){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12973));
});})(g__10974__auto___13012))
;


var g__10974__auto___13016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__10974__auto___13016){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13017 = arguments.length;
var i__10899__auto___13018 = (0);
while(true){
if((i__10899__auto___13018 < len__10898__auto___13017)){
args__10905__auto__.push((arguments[i__10899__auto___13018]));

var G__13019 = (i__10899__auto___13018 + (1));
i__10899__auto___13018 = G__13019;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13016))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13016){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13016),args);
});})(g__10974__auto___13016))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__10974__auto___13016){
return (function (seq12974){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12974));
});})(g__10974__auto___13016))
;


var g__10974__auto___13020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__10974__auto___13020){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13021 = arguments.length;
var i__10899__auto___13022 = (0);
while(true){
if((i__10899__auto___13022 < len__10898__auto___13021)){
args__10905__auto__.push((arguments[i__10899__auto___13022]));

var G__13023 = (i__10899__auto___13022 + (1));
i__10899__auto___13022 = G__13023;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13020))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13020){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13020),args);
});})(g__10974__auto___13020))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__10974__auto___13020){
return (function (seq12975){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12975));
});})(g__10974__auto___13020))
;


var g__10974__auto___13024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__10974__auto___13024){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13025 = arguments.length;
var i__10899__auto___13026 = (0);
while(true){
if((i__10899__auto___13026 < len__10898__auto___13025)){
args__10905__auto__.push((arguments[i__10899__auto___13026]));

var G__13027 = (i__10899__auto___13026 + (1));
i__10899__auto___13026 = G__13027;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13024))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13024){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13024),args);
});})(g__10974__auto___13024))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__10974__auto___13024){
return (function (seq12976){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12976));
});})(g__10974__auto___13024))
;


var g__10974__auto___13028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__10974__auto___13028){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13029 = arguments.length;
var i__10899__auto___13030 = (0);
while(true){
if((i__10899__auto___13030 < len__10898__auto___13029)){
args__10905__auto__.push((arguments[i__10899__auto___13030]));

var G__13031 = (i__10899__auto___13030 + (1));
i__10899__auto___13030 = G__13031;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13028))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13028){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13028),args);
});})(g__10974__auto___13028))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__10974__auto___13028){
return (function (seq12977){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12977));
});})(g__10974__auto___13028))
;


var g__10974__auto___13032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__10974__auto___13032){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13033 = arguments.length;
var i__10899__auto___13034 = (0);
while(true){
if((i__10899__auto___13034 < len__10898__auto___13033)){
args__10905__auto__.push((arguments[i__10899__auto___13034]));

var G__13035 = (i__10899__auto___13034 + (1));
i__10899__auto___13034 = G__13035;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13032))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13032){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13032),args);
});})(g__10974__auto___13032))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__10974__auto___13032){
return (function (seq12978){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12978));
});})(g__10974__auto___13032))
;


var g__10974__auto___13036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__10974__auto___13036){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13037 = arguments.length;
var i__10899__auto___13038 = (0);
while(true){
if((i__10899__auto___13038 < len__10898__auto___13037)){
args__10905__auto__.push((arguments[i__10899__auto___13038]));

var G__13039 = (i__10899__auto___13038 + (1));
i__10899__auto___13038 = G__13039;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13036))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13036){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13036),args);
});})(g__10974__auto___13036))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__10974__auto___13036){
return (function (seq12979){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12979));
});})(g__10974__auto___13036))
;


var g__10974__auto___13040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__10974__auto___13040){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13041 = arguments.length;
var i__10899__auto___13042 = (0);
while(true){
if((i__10899__auto___13042 < len__10898__auto___13041)){
args__10905__auto__.push((arguments[i__10899__auto___13042]));

var G__13043 = (i__10899__auto___13042 + (1));
i__10899__auto___13042 = G__13043;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13040))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13040){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13040),args);
});})(g__10974__auto___13040))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__10974__auto___13040){
return (function (seq12980){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12980));
});})(g__10974__auto___13040))
;


var g__10974__auto___13044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__10974__auto___13044){
return (function cljs$spec$impl$gen$return(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13045 = arguments.length;
var i__10899__auto___13046 = (0);
while(true){
if((i__10899__auto___13046 < len__10898__auto___13045)){
args__10905__auto__.push((arguments[i__10899__auto___13046]));

var G__13047 = (i__10899__auto___13046 + (1));
i__10899__auto___13046 = G__13047;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13044))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13044){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13044),args);
});})(g__10974__auto___13044))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__10974__auto___13044){
return (function (seq12981){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12981));
});})(g__10974__auto___13044))
;


var g__10974__auto___13048 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__10974__auto___13048){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13049 = arguments.length;
var i__10899__auto___13050 = (0);
while(true){
if((i__10899__auto___13050 < len__10898__auto___13049)){
args__10905__auto__.push((arguments[i__10899__auto___13050]));

var G__13051 = (i__10899__auto___13050 + (1));
i__10899__auto___13050 = G__13051;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13048))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13048){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13048),args);
});})(g__10974__auto___13048))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10974__auto___13048){
return (function (seq12982){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12982));
});})(g__10974__auto___13048))
;


var g__10974__auto___13052 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__10974__auto___13052){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13053 = arguments.length;
var i__10899__auto___13054 = (0);
while(true){
if((i__10899__auto___13054 < len__10898__auto___13053)){
args__10905__auto__.push((arguments[i__10899__auto___13054]));

var G__13055 = (i__10899__auto___13054 + (1));
i__10899__auto___13054 = G__13055;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10974__auto___13052))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10974__auto___13052){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10974__auto___13052),args);
});})(g__10974__auto___13052))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__10974__auto___13052){
return (function (seq12983){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12983));
});})(g__10974__auto___13052))
;

var g__10987__auto___13077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__10987__auto___13077){
return (function cljs$spec$impl$gen$any(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13078 = arguments.length;
var i__10899__auto___13079 = (0);
while(true){
if((i__10899__auto___13079 < len__10898__auto___13078)){
args__10905__auto__.push((arguments[i__10899__auto___13079]));

var G__13080 = (i__10899__auto___13079 + (1));
i__10899__auto___13079 = G__13080;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13077))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13077){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13077);
});})(g__10987__auto___13077))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__10987__auto___13077){
return (function (seq13056){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13056));
});})(g__10987__auto___13077))
;


var g__10987__auto___13081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__10987__auto___13081){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13082 = arguments.length;
var i__10899__auto___13083 = (0);
while(true){
if((i__10899__auto___13083 < len__10898__auto___13082)){
args__10905__auto__.push((arguments[i__10899__auto___13083]));

var G__13084 = (i__10899__auto___13083 + (1));
i__10899__auto___13083 = G__13084;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13081))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13081){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13081);
});})(g__10987__auto___13081))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__10987__auto___13081){
return (function (seq13057){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13057));
});})(g__10987__auto___13081))
;


var g__10987__auto___13085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__10987__auto___13085){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13086 = arguments.length;
var i__10899__auto___13087 = (0);
while(true){
if((i__10899__auto___13087 < len__10898__auto___13086)){
args__10905__auto__.push((arguments[i__10899__auto___13087]));

var G__13088 = (i__10899__auto___13087 + (1));
i__10899__auto___13087 = G__13088;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13085))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13085){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13085);
});})(g__10987__auto___13085))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__10987__auto___13085){
return (function (seq13058){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13058));
});})(g__10987__auto___13085))
;


var g__10987__auto___13089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__10987__auto___13089){
return (function cljs$spec$impl$gen$char(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13090 = arguments.length;
var i__10899__auto___13091 = (0);
while(true){
if((i__10899__auto___13091 < len__10898__auto___13090)){
args__10905__auto__.push((arguments[i__10899__auto___13091]));

var G__13092 = (i__10899__auto___13091 + (1));
i__10899__auto___13091 = G__13092;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13089))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13089){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13089);
});})(g__10987__auto___13089))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__10987__auto___13089){
return (function (seq13059){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13059));
});})(g__10987__auto___13089))
;


var g__10987__auto___13093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__10987__auto___13093){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13094 = arguments.length;
var i__10899__auto___13095 = (0);
while(true){
if((i__10899__auto___13095 < len__10898__auto___13094)){
args__10905__auto__.push((arguments[i__10899__auto___13095]));

var G__13096 = (i__10899__auto___13095 + (1));
i__10899__auto___13095 = G__13096;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13093))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13093){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13093);
});})(g__10987__auto___13093))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__10987__auto___13093){
return (function (seq13060){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13060));
});})(g__10987__auto___13093))
;


var g__10987__auto___13097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__10987__auto___13097){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13098 = arguments.length;
var i__10899__auto___13099 = (0);
while(true){
if((i__10899__auto___13099 < len__10898__auto___13098)){
args__10905__auto__.push((arguments[i__10899__auto___13099]));

var G__13100 = (i__10899__auto___13099 + (1));
i__10899__auto___13099 = G__13100;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13097))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13097){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13097);
});})(g__10987__auto___13097))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__10987__auto___13097){
return (function (seq13061){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13061));
});})(g__10987__auto___13097))
;


var g__10987__auto___13101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__10987__auto___13101){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13102 = arguments.length;
var i__10899__auto___13103 = (0);
while(true){
if((i__10899__auto___13103 < len__10898__auto___13102)){
args__10905__auto__.push((arguments[i__10899__auto___13103]));

var G__13104 = (i__10899__auto___13103 + (1));
i__10899__auto___13103 = G__13104;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13101))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13101){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13101);
});})(g__10987__auto___13101))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__10987__auto___13101){
return (function (seq13062){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13062));
});})(g__10987__auto___13101))
;


var g__10987__auto___13105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__10987__auto___13105){
return (function cljs$spec$impl$gen$double(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13106 = arguments.length;
var i__10899__auto___13107 = (0);
while(true){
if((i__10899__auto___13107 < len__10898__auto___13106)){
args__10905__auto__.push((arguments[i__10899__auto___13107]));

var G__13108 = (i__10899__auto___13107 + (1));
i__10899__auto___13107 = G__13108;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13105))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13105){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13105);
});})(g__10987__auto___13105))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__10987__auto___13105){
return (function (seq13063){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13063));
});})(g__10987__auto___13105))
;


var g__10987__auto___13109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__10987__auto___13109){
return (function cljs$spec$impl$gen$int(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13110 = arguments.length;
var i__10899__auto___13111 = (0);
while(true){
if((i__10899__auto___13111 < len__10898__auto___13110)){
args__10905__auto__.push((arguments[i__10899__auto___13111]));

var G__13112 = (i__10899__auto___13111 + (1));
i__10899__auto___13111 = G__13112;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13109))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13109){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13109);
});})(g__10987__auto___13109))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__10987__auto___13109){
return (function (seq13064){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13064));
});})(g__10987__auto___13109))
;


var g__10987__auto___13113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__10987__auto___13113){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13114 = arguments.length;
var i__10899__auto___13115 = (0);
while(true){
if((i__10899__auto___13115 < len__10898__auto___13114)){
args__10905__auto__.push((arguments[i__10899__auto___13115]));

var G__13116 = (i__10899__auto___13115 + (1));
i__10899__auto___13115 = G__13116;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13113))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13113){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13113);
});})(g__10987__auto___13113))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__10987__auto___13113){
return (function (seq13065){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13065));
});})(g__10987__auto___13113))
;


var g__10987__auto___13117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__10987__auto___13117){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13118 = arguments.length;
var i__10899__auto___13119 = (0);
while(true){
if((i__10899__auto___13119 < len__10898__auto___13118)){
args__10905__auto__.push((arguments[i__10899__auto___13119]));

var G__13120 = (i__10899__auto___13119 + (1));
i__10899__auto___13119 = G__13120;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13117))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13117){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13117);
});})(g__10987__auto___13117))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__10987__auto___13117){
return (function (seq13066){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13066));
});})(g__10987__auto___13117))
;


var g__10987__auto___13121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__10987__auto___13121){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13122 = arguments.length;
var i__10899__auto___13123 = (0);
while(true){
if((i__10899__auto___13123 < len__10898__auto___13122)){
args__10905__auto__.push((arguments[i__10899__auto___13123]));

var G__13124 = (i__10899__auto___13123 + (1));
i__10899__auto___13123 = G__13124;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13121))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13121){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13121);
});})(g__10987__auto___13121))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__10987__auto___13121){
return (function (seq13067){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13067));
});})(g__10987__auto___13121))
;


var g__10987__auto___13125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__10987__auto___13125){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13126 = arguments.length;
var i__10899__auto___13127 = (0);
while(true){
if((i__10899__auto___13127 < len__10898__auto___13126)){
args__10905__auto__.push((arguments[i__10899__auto___13127]));

var G__13128 = (i__10899__auto___13127 + (1));
i__10899__auto___13127 = G__13128;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13125))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13125){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13125);
});})(g__10987__auto___13125))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__10987__auto___13125){
return (function (seq13068){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13068));
});})(g__10987__auto___13125))
;


var g__10987__auto___13129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__10987__auto___13129){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13130 = arguments.length;
var i__10899__auto___13131 = (0);
while(true){
if((i__10899__auto___13131 < len__10898__auto___13130)){
args__10905__auto__.push((arguments[i__10899__auto___13131]));

var G__13132 = (i__10899__auto___13131 + (1));
i__10899__auto___13131 = G__13132;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13129))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13129){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13129);
});})(g__10987__auto___13129))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__10987__auto___13129){
return (function (seq13069){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13069));
});})(g__10987__auto___13129))
;


var g__10987__auto___13133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__10987__auto___13133){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13134 = arguments.length;
var i__10899__auto___13135 = (0);
while(true){
if((i__10899__auto___13135 < len__10898__auto___13134)){
args__10905__auto__.push((arguments[i__10899__auto___13135]));

var G__13136 = (i__10899__auto___13135 + (1));
i__10899__auto___13135 = G__13136;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13133))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13133){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13133);
});})(g__10987__auto___13133))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__10987__auto___13133){
return (function (seq13070){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13070));
});})(g__10987__auto___13133))
;


var g__10987__auto___13137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__10987__auto___13137){
return (function cljs$spec$impl$gen$string(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13138 = arguments.length;
var i__10899__auto___13139 = (0);
while(true){
if((i__10899__auto___13139 < len__10898__auto___13138)){
args__10905__auto__.push((arguments[i__10899__auto___13139]));

var G__13140 = (i__10899__auto___13139 + (1));
i__10899__auto___13139 = G__13140;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13137))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13137){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13137);
});})(g__10987__auto___13137))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__10987__auto___13137){
return (function (seq13071){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13071));
});})(g__10987__auto___13137))
;


var g__10987__auto___13141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__10987__auto___13141){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13142 = arguments.length;
var i__10899__auto___13143 = (0);
while(true){
if((i__10899__auto___13143 < len__10898__auto___13142)){
args__10905__auto__.push((arguments[i__10899__auto___13143]));

var G__13144 = (i__10899__auto___13143 + (1));
i__10899__auto___13143 = G__13144;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13141))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13141){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13141);
});})(g__10987__auto___13141))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__10987__auto___13141){
return (function (seq13072){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13072));
});})(g__10987__auto___13141))
;


var g__10987__auto___13145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__10987__auto___13145){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13146 = arguments.length;
var i__10899__auto___13147 = (0);
while(true){
if((i__10899__auto___13147 < len__10898__auto___13146)){
args__10905__auto__.push((arguments[i__10899__auto___13147]));

var G__13148 = (i__10899__auto___13147 + (1));
i__10899__auto___13147 = G__13148;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13145))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13145){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13145);
});})(g__10987__auto___13145))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__10987__auto___13145){
return (function (seq13073){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13073));
});})(g__10987__auto___13145))
;


var g__10987__auto___13149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__10987__auto___13149){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13150 = arguments.length;
var i__10899__auto___13151 = (0);
while(true){
if((i__10899__auto___13151 < len__10898__auto___13150)){
args__10905__auto__.push((arguments[i__10899__auto___13151]));

var G__13152 = (i__10899__auto___13151 + (1));
i__10899__auto___13151 = G__13152;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13149))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13149){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13149);
});})(g__10987__auto___13149))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__10987__auto___13149){
return (function (seq13074){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13074));
});})(g__10987__auto___13149))
;


var g__10987__auto___13153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__10987__auto___13153){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13154 = arguments.length;
var i__10899__auto___13155 = (0);
while(true){
if((i__10899__auto___13155 < len__10898__auto___13154)){
args__10905__auto__.push((arguments[i__10899__auto___13155]));

var G__13156 = (i__10899__auto___13155 + (1));
i__10899__auto___13155 = G__13156;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13153))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13153){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13153);
});})(g__10987__auto___13153))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__10987__auto___13153){
return (function (seq13075){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13075));
});})(g__10987__auto___13153))
;


var g__10987__auto___13157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__10987__auto___13157){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13158 = arguments.length;
var i__10899__auto___13159 = (0);
while(true){
if((i__10899__auto___13159 < len__10898__auto___13158)){
args__10905__auto__.push((arguments[i__10899__auto___13159]));

var G__13160 = (i__10899__auto___13159 + (1));
i__10899__auto___13159 = G__13160;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});})(g__10987__auto___13157))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10987__auto___13157){
return (function (args){
return cljs.core.deref.call(null,g__10987__auto___13157);
});})(g__10987__auto___13157))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__10987__auto___13157){
return (function (seq13076){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13076));
});})(g__10987__auto___13157))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10905__auto__ = [];
var len__10898__auto___13163 = arguments.length;
var i__10899__auto___13164 = (0);
while(true){
if((i__10899__auto___13164 < len__10898__auto___13163)){
args__10905__auto__.push((arguments[i__10899__auto___13164]));

var G__13165 = (i__10899__auto___13164 + (1));
i__10899__auto___13164 = G__13165;
continue;
} else {
}
break;
}

var argseq__10906__auto__ = ((((0) < args__10905__auto__.length))?(new cljs.core.IndexedSeq(args__10905__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10906__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13161_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13161_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13162){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13162));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13166_SHARP_){
return (new Date(p1__13166_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map