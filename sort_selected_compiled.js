if(!lt.util.load.provided_QMARK_('lt.plugins.sortselected')) {
goog.provide('lt.plugins.sortselected');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
goog.require('lt.object');
lt.plugins.sortselected.sort_it = (function sort_it(selection,separator){return clojure.string.join.call(null,separator,cljs.core.sort.call(null,clojure.string.split.call(null,selection,separator)));
});
lt.plugins.sortselected.sort_things = (function sort_things(separator){var cm = lt.objs.editor.pool.last_active.call(null);var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,cm);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.replace_selection.call(null,ed,lt.plugins.sortselected.sort_it.call(null,lt.objs.editor.selection.call(null,ed),separator));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.sortselected","sort-lines","lt.plugins.sortselected/sort-lines",2226199682),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sort: Sort selected lines",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.sortselected.sort_things.call(null,"\n");
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.sortselected","sort-words","lt.plugins.sortselected/sort-words",2249134044),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sort: Sort selected words",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.sortselected.sort_things.call(null," ");
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.sortselected","sort-characters","lt.plugins.sortselected/sort-characters",644023449),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sort: Sort selected characters",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.sortselected.sort_things.call(null,"");
})], null));
}

//# sourceMappingURL=sort_selected_compiled.js.map
