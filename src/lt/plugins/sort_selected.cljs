(ns lt.plugins.sortselected
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior]]))

(defn sort-it [selection separator]
  (clojure.string/join separator
    (sort
      (clojure.string/split selection separator))))

(defn sort-things [separator]
  (let [cm (pool/last-active)]
    (when-let [ed (editor/->cm-ed cm)]
      (editor/replace-selection ed
        (sort-it (editor/selection ed) separator)))))


;;**********************************************************
;; command list
;;**********************************************************

(cmd/command {:command ::sort-lines
              :desc "Sort: Sort selected lines"
              :exec (fn []
                      (sort-things "\n"))})

(cmd/command {:command ::sort-words
              :desc "Sort: Sort selected words"
              :exec (fn []
                      (sort-things " "))})

(cmd/command {:command ::sort-characters
              :desc "Sort: Sort selected characters"
              :exec (fn []
                      (sort-things ""))})
