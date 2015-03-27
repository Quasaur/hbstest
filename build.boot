#!/usr/bin/env boot


(set-env!
  ;; using the sonatype repo is sometimes useful when testing Clojurescript
  ;; versions that not yet propagated to Clojars
  ;;
  :repositories #(conj % '["sonatype" {:url "http://oss.sonatype.org/content/repositories/releases"}])
  :project      'hbstest
  :version      "0.1.0-SNAPSHOT"
  :description "History of the World bootstrap 3 tests (Hoplon)"
  :dependencies  '[[clj-tagsoup               "0.3.0"]
                   [adzerk/boot-cljs-repl     "0.1.9"]
                   [adzerk/boot-reload        "0.2.6"]
                   [pandeiro/boot-http        "0.6.2"]
                   [markdown-clj              "0.9.63"]
                   [adzerk/boot-cljs          "0.0-2814-0"]
                   [tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
                   [tailrecursion/hoplon      "6.0.0-SNAPSHOT"]
                   [adzerk/bootlaces   "0.1.9" :scope "test"]
                   [cljsjs/boot-cljsjs "0.4.6" :scope "test"]
                   [cljsjs/jquery "1.9.0-0"]]
  :source-paths   #{"src/hoplon", "src/cljs", "src/js"}
  :resource-paths #{"resources/assets"}
  :target-path    "resources/public")

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[tailrecursion.boot-hoplon :refer [haml hoplon prerender html2cljs]
  '[adzerk.bootlaces :refer :all]
  '[cljsjs.boot-cljsjs.packaging :refer :all]])

(deftask dev
  "Build hbstest for local development."
  []
  (comp
    (watch)
    (speak)
    (haml)
    (hoplon)
    (reload)
    (cljs)))

(deftask prod
  "Build hbstest for production deployment."
  []
  (comp
    (hoplon :pretty-print true)
    (cljs :optimizations :advanced :source-map true)
    (prerender)))

(def +version+ "0.1.0-SNAPSHOT")

(task-options!
  pom  {:project     'quasaur/hbstest
        :version     +version+
        :description "History of the World bootstrap 3 tests (Hoplon)"
        :url         "https://github.com/quasaur/hbstest"
        :scm         {:url "https://github.com/quasaur/hbstest"}
        :license     {"GNU Public License" "https://www.gnu.org/copyleft/gpl.html"}})