(ns lt.plugins.sort-selected
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:h1 "Hello from sort-selected"])

(object/object* ::sort-selected.hello
                :tags [:sort-selected.hello]
                :name "sort-selected"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::sort-selected.hello))

(cmd/command {:command ::say-hello
              :desc "Sort: Sort Selected lines"
              :exec (fn []
                      (tabs/add-or-focus! hello))})
