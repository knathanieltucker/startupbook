var pageSession = new ReactiveDict();

Template.AuthorsAddAuthors.onCreated(function() {
	
});

Template.AuthorsAddAuthors.onDestroyed(function() {
	
});

Template.AuthorsAddAuthors.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.AuthorsAddAuthors.events({
	
});

Template.AuthorsAddAuthors.helpers({
	
});

var AuthorsAddAuthorsViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("AuthorsAddAuthorsViewSearchString");
	var sortBy = pageSession.get("AuthorsAddAuthorsViewSortBy");
	var sortAscending = pageSession.get("AuthorsAddAuthorsViewSortAscending");
	if(typeof(sortAscending) == "undefined") sortAscending = true;

	var raw = cursor.fetch();

	// filter
	var filtered = [];
	if(!searchString || searchString == "") {
		filtered = raw;
	} else {
		searchString = searchString.replace(".", "\\.");
		var regEx = new RegExp(searchString, "i");
		var searchFields = ["name", "authorTags", "usedTags", "description"];
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

var AuthorsAddAuthorsViewExport = function(cursor, fileType) {
	var data = AuthorsAddAuthorsViewItems(cursor);
	var exportFields = [];

	var str = exportArrayOfObjects(data, exportFields, fileType);

	var filename = "export." + fileType;

	downloadLocalResource(str, filename, "application/octet-stream");
}

Template.AuthorsAddAuthorsView.onCreated(function() {
	
});

Template.AuthorsAddAuthorsView.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsView.onRendered(function() {
	pageSession.set("AuthorsAddAuthorsViewStyle", "table");
	
});

Template.AuthorsAddAuthorsView.events({
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
				pageSession.set("AuthorsAddAuthorsViewSearchString", searchString);
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
					pageSession.set("AuthorsAddAuthorsViewSearchString", searchString);
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
					pageSession.set("AuthorsAddAuthorsViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();
		Router.go("authors.add_authors.insert", mergeObjects(Router.currentRouteParams(), {}));
	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		AuthorsAddAuthorsViewExport(this.author_list1, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		AuthorsAddAuthorsViewExport(this.author_list1, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		AuthorsAddAuthorsViewExport(this.author_list1, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		AuthorsAddAuthorsViewExport(this.author_list1, "json");
	}

	
});

Template.AuthorsAddAuthorsView.helpers({

	

	"isEmpty": function() {
		return !this.author_list1 || this.author_list1.count() == 0;
	},
	"isNotEmpty": function() {
		return this.author_list1 && this.author_list1.count() > 0;
	},
	"isNotFound": function() {
		return this.author_list1 && pageSession.get("AuthorsAddAuthorsViewSearchString") && AuthorsAddAuthorsViewItems(this.author_list1).length == 0;
	},
	"searchString": function() {
		return pageSession.get("AuthorsAddAuthorsViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("AuthorsAddAuthorsViewStyle") == "table";
	},
	"viewAsBlog": function() {
		return pageSession.get("AuthorsAddAuthorsViewStyle") == "blog";
	},
	"viewAsList": function() {
		return pageSession.get("AuthorsAddAuthorsViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("AuthorsAddAuthorsViewStyle") == "gallery";
	}

	
});


Template.AuthorsAddAuthorsViewTable.onCreated(function() {
	
});

Template.AuthorsAddAuthorsViewTable.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsViewTable.onRendered(function() {
	
});

Template.AuthorsAddAuthorsViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("AuthorsAddAuthorsViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("AuthorsAddAuthorsViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("AuthorsAddAuthorsViewSortAscending") || false;
			pageSession.set("AuthorsAddAuthorsViewSortAscending", !sortAscending);
		} else {
			pageSession.set("AuthorsAddAuthorsViewSortAscending", true);
		}
	}
});

Template.AuthorsAddAuthorsViewTable.helpers({
	"tableItems": function() {
		return AuthorsAddAuthorsViewItems(this.author_list1);
	}
});


Template.AuthorsAddAuthorsViewTableItems.onCreated(function() {
	
});

Template.AuthorsAddAuthorsViewTableItems.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsViewTableItems.onRendered(function() {
	
});

Template.AuthorsAddAuthorsViewTableItems.events({
	

	"click td": function(e, t) {
		e.preventDefault();
		
		Router.go("authors.add_authors.details", mergeObjects(Router.currentRouteParams(), {authorId: this._id}));
		return false;
	},

	"click .inline-checkbox": function(e, t) {
		e.preventDefault();

		if(!this || !this._id) return false;

		var fieldName = $(e.currentTarget).attr("data-field");
		if(!fieldName) return false;

		var values = {};
		values[fieldName] = !this[fieldName];

		Meteor.call("authorsUpdate", this._id, values, function(err, res) {
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
						Meteor.call("authorsRemove", me._id, function(err, res) {
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
		Router.go("authors.add_authors.update", mergeObjects(Router.currentRouteParams(), {authorId: this._id}));
		return false;
	}
});

Template.AuthorsAddAuthorsViewTableItems.helpers({
	

	"checked": function(value) { return value ? "checked" : "" }
	

	
});
