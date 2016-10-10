(set-env!
  :source-paths #{"src/clj" "src/cljs" "src/cljc"}
  :resource-paths #{"resources"}
  :dependencies '[
		  [nightlight "1.0.0" :scope "test"]
		  [adzerk/boot-cljs "1.7.228-1" :scope "test"]
                  [adzerk/boot-reload "0.4.12" :scope "test"]
                  [adzerk/boot-cljs-repl "0.3.2" :scope "test"]
                  [pandeiro/boot-http "0.7.0" :scope "test"]
                  ; for boot-cljs-repl
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  ; project deps
                  [org.clojure/clojure "1.9.0-alpha13"]
                  [org.clojure/clojurescript "1.9.229"]
                  [ring "1.4.0"]])

(task-options!
  pom {:project 'vdca
       :version "1.0.0-SNAPSHOT"
       :description "FIXME: write description"}
  aot {:namespace #{'vdca.core}}
  jar {:main 'vdca.core})

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[pandeiro.boot-http :refer [serve]]
  '[nightlight.boot :refer [night]]
  'vdca.core)

(deftask run []
  (comp
    (serve :dir "target/public")
    (night "--port" "4000")
    (watch)
    (reload :asset-path "public"
            :on-jsload 'vdca.core/init)
    (cljs-repl)
    (cljs :source-map true :optimizations :none)
    (target)))

(deftask edit []
  (comp
    (wait)
    (night "--port" "4000")))
(deftask build []
  (comp
    (cljs :optimizations :advanced)
    (aot)
    (pom)
    (uber)
    (jar)
    (target)))

