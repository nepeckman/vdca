// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11970){
var map__11995 = p__11970;
var map__11995__$1 = ((((!((map__11995 == null)))?((((map__11995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11995):map__11995);
var m = map__11995__$1;
var n = cljs.core.get.call(null,map__11995__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11997_12019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11998_12020 = null;
var count__11999_12021 = (0);
var i__12000_12022 = (0);
while(true){
if((i__12000_12022 < count__11999_12021)){
var f_12023 = cljs.core._nth.call(null,chunk__11998_12020,i__12000_12022);
cljs.core.println.call(null,"  ",f_12023);

var G__12024 = seq__11997_12019;
var G__12025 = chunk__11998_12020;
var G__12026 = count__11999_12021;
var G__12027 = (i__12000_12022 + (1));
seq__11997_12019 = G__12024;
chunk__11998_12020 = G__12025;
count__11999_12021 = G__12026;
i__12000_12022 = G__12027;
continue;
} else {
var temp__4657__auto___12028 = cljs.core.seq.call(null,seq__11997_12019);
if(temp__4657__auto___12028){
var seq__11997_12029__$1 = temp__4657__auto___12028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11997_12029__$1)){
var c__10634__auto___12030 = cljs.core.chunk_first.call(null,seq__11997_12029__$1);
var G__12031 = cljs.core.chunk_rest.call(null,seq__11997_12029__$1);
var G__12032 = c__10634__auto___12030;
var G__12033 = cljs.core.count.call(null,c__10634__auto___12030);
var G__12034 = (0);
seq__11997_12019 = G__12031;
chunk__11998_12020 = G__12032;
count__11999_12021 = G__12033;
i__12000_12022 = G__12034;
continue;
} else {
var f_12035 = cljs.core.first.call(null,seq__11997_12029__$1);
cljs.core.println.call(null,"  ",f_12035);

var G__12036 = cljs.core.next.call(null,seq__11997_12029__$1);
var G__12037 = null;
var G__12038 = (0);
var G__12039 = (0);
seq__11997_12019 = G__12036;
chunk__11998_12020 = G__12037;
count__11999_12021 = G__12038;
i__12000_12022 = G__12039;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12040 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9823__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9823__auto__)){
return or__9823__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12040);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12040)))?cljs.core.second.call(null,arglists_12040):arglists_12040));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__12001_12041 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12002_12042 = null;
var count__12003_12043 = (0);
var i__12004_12044 = (0);
while(true){
if((i__12004_12044 < count__12003_12043)){
var vec__12005_12045 = cljs.core._nth.call(null,chunk__12002_12042,i__12004_12044);
var name_12046 = cljs.core.nth.call(null,vec__12005_12045,(0),null);
var map__12008_12047 = cljs.core.nth.call(null,vec__12005_12045,(1),null);
var map__12008_12048__$1 = ((((!((map__12008_12047 == null)))?((((map__12008_12047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12008_12047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12008_12047):map__12008_12047);
var doc_12049 = cljs.core.get.call(null,map__12008_12048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12050 = cljs.core.get.call(null,map__12008_12048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12046);

cljs.core.println.call(null," ",arglists_12050);

if(cljs.core.truth_(doc_12049)){
cljs.core.println.call(null," ",doc_12049);
} else {
}

var G__12051 = seq__12001_12041;
var G__12052 = chunk__12002_12042;
var G__12053 = count__12003_12043;
var G__12054 = (i__12004_12044 + (1));
seq__12001_12041 = G__12051;
chunk__12002_12042 = G__12052;
count__12003_12043 = G__12053;
i__12004_12044 = G__12054;
continue;
} else {
var temp__4657__auto___12055 = cljs.core.seq.call(null,seq__12001_12041);
if(temp__4657__auto___12055){
var seq__12001_12056__$1 = temp__4657__auto___12055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12001_12056__$1)){
var c__10634__auto___12057 = cljs.core.chunk_first.call(null,seq__12001_12056__$1);
var G__12058 = cljs.core.chunk_rest.call(null,seq__12001_12056__$1);
var G__12059 = c__10634__auto___12057;
var G__12060 = cljs.core.count.call(null,c__10634__auto___12057);
var G__12061 = (0);
seq__12001_12041 = G__12058;
chunk__12002_12042 = G__12059;
count__12003_12043 = G__12060;
i__12004_12044 = G__12061;
continue;
} else {
var vec__12010_12062 = cljs.core.first.call(null,seq__12001_12056__$1);
var name_12063 = cljs.core.nth.call(null,vec__12010_12062,(0),null);
var map__12013_12064 = cljs.core.nth.call(null,vec__12010_12062,(1),null);
var map__12013_12065__$1 = ((((!((map__12013_12064 == null)))?((((map__12013_12064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12013_12064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12013_12064):map__12013_12064);
var doc_12066 = cljs.core.get.call(null,map__12013_12065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12067 = cljs.core.get.call(null,map__12013_12065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12063);

cljs.core.println.call(null," ",arglists_12067);

if(cljs.core.truth_(doc_12066)){
cljs.core.println.call(null," ",doc_12066);
} else {
}

var G__12068 = cljs.core.next.call(null,seq__12001_12056__$1);
var G__12069 = null;
var G__12070 = (0);
var G__12071 = (0);
seq__12001_12041 = G__12068;
chunk__12002_12042 = G__12069;
count__12003_12043 = G__12070;
i__12004_12044 = G__12071;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12015 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12016 = null;
var count__12017 = (0);
var i__12018 = (0);
while(true){
if((i__12018 < count__12017)){
var role = cljs.core._nth.call(null,chunk__12016,i__12018);
var temp__4657__auto___12072__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12072__$1)){
var spec_12073 = temp__4657__auto___12072__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12073));
} else {
}

var G__12074 = seq__12015;
var G__12075 = chunk__12016;
var G__12076 = count__12017;
var G__12077 = (i__12018 + (1));
seq__12015 = G__12074;
chunk__12016 = G__12075;
count__12017 = G__12076;
i__12018 = G__12077;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12015);
if(temp__4657__auto____$1){
var seq__12015__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12015__$1)){
var c__10634__auto__ = cljs.core.chunk_first.call(null,seq__12015__$1);
var G__12078 = cljs.core.chunk_rest.call(null,seq__12015__$1);
var G__12079 = c__10634__auto__;
var G__12080 = cljs.core.count.call(null,c__10634__auto__);
var G__12081 = (0);
seq__12015 = G__12078;
chunk__12016 = G__12079;
count__12017 = G__12080;
i__12018 = G__12081;
continue;
} else {
var role = cljs.core.first.call(null,seq__12015__$1);
var temp__4657__auto___12082__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12082__$2)){
var spec_12083 = temp__4657__auto___12082__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12083));
} else {
}

var G__12084 = cljs.core.next.call(null,seq__12015__$1);
var G__12085 = null;
var G__12086 = (0);
var G__12087 = (0);
seq__12015 = G__12084;
chunk__12016 = G__12085;
count__12017 = G__12086;
i__12018 = G__12087;
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