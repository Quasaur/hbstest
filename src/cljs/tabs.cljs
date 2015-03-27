(ns history.tabs
  (:require [tailrecursion.hoplon :as hl]))

(defn pBrowse []
  (hl/ul :class "nav nav-tabs"
    (hl/li :class "active" (hl/a :data-toggle "tab" :href "#secBrowse" "Browse"))
    (hl/li (hl/a :data-toggle "tab" :href "#" "Graph"))
    (hl/li (hl/a :data-toggle "tab" :href "#" "Map"))
    (hl/li (hl/a :data-toggle "tab" :href "#" "Chart"))
    (hl/li (hl/a :data-toggle "tab" :href "#" "Add"))
    (hl/li (hl/a :data-toggle "tab" :href "#" "Learn"))
    (hl/li (hl/a :data-toggle "tab" :href "#" "Changes"))
    (hl/li (hl/a :data-toggle "tab" :href "#" "Seek")))) ;end a, li, ul, defn
