var pageSession = new ReactiveDict();

Template.QuotesAddQuotes.onCreated(function() {
	
});

Template.QuotesAddQuotes.onDestroyed(function() {
	
});

Template.QuotesAddQuotes.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.QuotesAddQuotes.events({
	
});

Template.QuotesAddQuotes.helpers({
	
});

var QuotesAddQuotesViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("QuotesAddQuotesViewSearchString");
	var sortBy = pageSession.get("QuotesAddQuotesViewSortBy");
	var sortAscending = pageSession.get("QuotesAddQuotesViewSortAscending");
	if(typeof(sortAscending) == "undefined") sortAscending = true;

	var raw = cursor.fetch();

	// filter
	var filtered = [];
	if(!searchString || searchString == "") {
		filtered = raw;
	} else {
		searchString = searchString.replace(".", "\\.");
		var regEx = new RegExp(searchString, "i");
		var searchFields = ["authorId", "tags"];
		filtered = _.filter(raw, function(item) {
			var match = false;
			_.each(searchFields, function(field) {
				var value = (getPropertyValue(field, item) || "") + "";

				match = match || (value && value.match(regEx));
				if(match) {
					return false;
				}
			})
			return match;
		});
	}

	// sort
	if(sortBy) {
		filtered = _.sortBy(filtered, sortBy);

		// descending?
		if(!sortAscending) {
			filtered = filtered.reverse();
		}
	}

	return filtered;
};

var QuotesAddQuotesViewExport = function(cursor, fileType) {
	var data = QuotesAddQuotesViewItems(cursor);
	var exportFields = [];

	var str = exportArrayOfObjects(data, exportFields, fileType);

	var filename = "export." + fileType;

	downloadLocalResource(str, filename, "application/octet-stream");
}

Template.QuotesAddQuotesView.onCreated(function() {
	
});

Template.QuotesAddQuotesView.onDestroyed(function() {
	
});

Template.QuotesAddQuotesView.onRendered(function() {
	pageSession.set("QuotesAddQuotesViewStyle", "table");
	
});

Template.QuotesAddQuotesView.events({
	"submit #dataview-controls": function(e, t) {
		return false;
	},

	"click #dataview-search-button": function(e, t) {
		e.preventDefault();
		var form = $(e.currentTarget).parent();
		if(form) {
			var searchInput = form.find("#dataview-search-input");
			if(searchInput) {
				searchInput.focus();
				var searchString = searchInput.val();
				pageSession.set("QuotesAddQuotesViewSearchString", searchString);
			}

		}
		return false;
	},

	"keydown #dataview-search-input": function(e, t) {
		if(e.which === 13)
		{
			e.preventDefault();
			var form = $(e.currentTarget).parent();
			if(form) {
				var searchInput = form.find("#dataview-search-input");
				if(searchInput) {
					var searchString = searchInput.val();
					pageSession.set("QuotesAddQuotesViewSearchString", searchString);
				}

			}
			return false;
		}

		if(e.which === 27)
		{
			e.preventDefault();
			var form = $(e.currentTarget).parent();
			if(form) {
				var searchInput = form.find("#dataview-search-input");
				if(searchInput) {
					searchInput.val("");
					pageSession.set("QuotesAddQuotesViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();
		Router.go("quotes.add_quotes.insert", mergeObjects(Router.currentRouteParams(), {}));
	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		QuotesAddQuotesViewExport(this.quote_list, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		QuotesAddQuotesViewExport(this.quote_list, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		QuotesAddQuotesViewExport(this.quote_list, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		QuotesAddQuotesViewExport(this.quote_list, "json");
	}

	
});

Template.QuotesAddQuotesView.helpers({

	

	"isEmpty": function() {
		return !this.quote_list || this.quote_list.count() == 0;
	},
	"isNotEmpty": function() {
		return this.quote_list && this.quote_list.count() > 0;
	},
	"isNotFound": function() {
		return this.quote_list && pageSession.get("QuotesAddQuotesViewSearchString") && QuotesAddQuotesViewItems(this.quote_list).length == 0;
	},
	"searchString": function() {
		return pageSession.get("QuotesAddQuotesViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("QuotesAddQuotesViewStyle") == "table";
	},
	"viewAsBlog": function() {
		return pageSession.get("QuotesAddQuotesViewStyle") == "blog";
	},
	"viewAsList": function() {
		return pageSession.get("QuotesAddQuotesViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("QuotesAddQuotesViewStyle") == "gallery";
	}

	
});


Template.QuotesAddQuotesViewTable.onCreated(function() {
	
});

Template.QuotesAddQuotesViewTable.onDestroyed(function() {
	
});

Template.QuotesAddQuotesViewTable.onRendered(function() {
	
});

Template.QuotesAddQuotesViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("QuotesAddQuotesViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("QuotesAddQuotesViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("QuotesAddQuotesViewSortAscending") || false;
			pageSession.set("QuotesAddQuotesViewSortAscending", !sortAscending);
		} else {
			pageSession.set("QuotesAddQuotesViewSortAscending", true);
		}
	}
});

Template.QuotesAddQuotesViewTable.helpers({
	"tableItems": function() {
		return QuotesAddQuotesViewItems(this.quote_list);
	}
});


Template.QuotesAddQuotesViewTableItems.onCreated(function() {
	
});

Template.QuotesAddQuotesViewTableItems.onDestroyed(function() {
	
});

Template.QuotesAddQuotesViewTableItems.onRendered(function() {
	
});

Template.QuotesAddQuotesViewTableItems.events({
	

	"click td": function(e, t) {
		e.preventDefault();
		
		Router.go("quotes.add_quotes.details", mergeObjects(Router.currentRouteParams(), {quoteId: this._id}));
		return false;
	},

	"click .inline-checkbox": function(e, t) {
		e.preventDefault();

		if(!this || !this._id) return false;

		var fieldName = $(e.currentTarget).attr("data-field");
		if(!fieldName) return false;

		var values = {};
		values[fieldName] = !this[fieldName];

		Meteor.call("quotesUpdate", this._id, values, function(err, res) {
			if(err) {
				alert(err.message);
			}
		});

		return false;
	},

	"click #delete-button": function(e, t) {
		e.preventDefault();
		var me = this;
		bootbox.dialog({
			message: "Delete? Are you sure?",
			title: "Delete",
			animate: false,
			buttons: {
				success: {
					label: "Yes",
					className: "btn-success",
					callback: function() {
						Meteor.call("quotesRemove", me._id, function(err, res) {
							if(err) {
								alert(err.message);
							}
						});
					}
				},
				danger: {
					label: "No",
					className: "btn-default"
				}
			}
		});
		return false;
	},
	"click #edit-button": function(e, t) {
		e.preventDefault();
		Router.go("quotes.add_quotes.update", mergeObjects(Router.currentRouteParams(), {quoteId: this._id}));
		return false;
	}
});

Template.QuotesAddQuotesViewTableItems.helpers({
	

	"checked": function(value) { return value ? "checked" : "" }
	

	
});
