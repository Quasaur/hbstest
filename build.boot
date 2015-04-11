#!/usr/bin/env boot


(set-env!
  ;; using the sonatype repo is sometimes useful when testing Clojurescript
  ;; versions that not yet propagated to Clojars
  ;;
  ;; :repositories #(conj % '["sonatype" {:url "http://oss.sonatype.org/content/repositories/releases"}])
  :project      'hbstest
  :version      "0.1.0-SNAPSHOT"
  :description  "History of the World bootstrap 3 tests (Hoplon)"
  :source-paths   #{"src/hoplon" "src/cljs" "src/js"}
  :resource-paths #{"resources"}
  :target-path    #{"resources/public"}
  :dependencies  '[[adzerk/boot-cljs          "0.0-2814-0"]
                   [adzerk/boot-cljs-repl     "0.1.9"]
                   [adzerk/boot-reload        "0.2.6"]
                   [pandeiro/boot-http        "0.6.2"]
                   [tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
                   [tailrecursion/hoplon      "6.0.0-SNAPSHOT"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[tailrecursion.boot-hoplon :refer [haml hoplon prerender html2cljs]])

(deftask build []
  (comp (speak) (cljs)))

(deftask run []
  (comp (serve)
        (watch :quiet true)
        (cljs-repl)
        (hoplon)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced
                       ;; pseudo-names true is currently required
                       ;; https://github.com/martinklepsch/pseudo-names-error
                       ;; hopefully fixed soon
                       :pseudo-names true})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none
                       :unified-mode true
                       :source-map true}
                 hoplon {:pretty-print  true
                         :prerender     false
                         :optimizations :none})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))


(task-options!
  pom  {:project     'quasaur/hbstest
        :version     +version+
        :description "History of the World bootstrap 3 tests (Hoplon)"
        :url         "https://github.com/quasaur/hbstest"
        :scm         {:url "https://github.com/quasaur/hbstest"}
        :license     {"GNU Public License" "https://www.gnu.org/copyleft/gpl.html"}})
