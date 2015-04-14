(set-env!
  ;; using the sonatype repo is sometimes useful when testing Clojurescript
  ;; versions that not yet propagated to Clojars
  ;;
  ;; :repositories #(conj % '["sonatype" {:url "http://oss.sonatype.org/content/repositories/releases"}])
  :project      'hbstest
  :version      "0.1.0-SNAPSHOT"
  :description  "History of the World bootstrap 3 tests (Hoplon)"
  :source-paths   #{"src"}
  :resource-paths #{"assets"}
  :dependencies  '[[adzerk/boot-cljs-repl     "0.1.9"]
                   [adzerk/boot-reload        "0.2.6"]
                   [pandeiro/boot-http        "0.6.2"]
                   [markdown-clj              "0.9.62"]
                   [adzerk/boot-cljs          "0.0-2814-0"]
                   [tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
                   [tailrecursion/hoplon      "6.0.0-SNAPSHOT"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[tailrecursion.boot-hoplon :refer [haml hoplon prerender html2cljs]])


(deftask production []
  (task-options! cljs {:optimizations :advanced
                       ;; pseudo-names true is currently required
                       ;; https://github.com/martinklepsch/pseudo-names-error
                       ;; hopefully fixed soon
                       :pseudo-names true})
  identity)

(deftask development []
  (task-options! watch {:quiet true}
                 hoplon {:pretty-print true}
                 cljs {:optimizations :none
                       :unified-mode true
                       :source-map true}
                 serve {:resource-root "resources/public" :reload true})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp
    (watch)
    (haml)
    (hoplon)
    (cljs)
    (serve)
    (speak)))

(task-options!
  pom  {:project     'quasaur/hbstest
        :version     "0.1.0-SNAPSHOT"
        :description "History of the World bootstrap 3 tests (Hoplon)"
        :url         "https://github.com/quasaur/hbstest"
        :scm         {:url "https://github.com/quasaur/hbstest"}
        :license     {"GNU Public License" "https://www.gnu.org/copyleft/gpl.html"}})
