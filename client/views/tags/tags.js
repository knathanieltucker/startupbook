var pageSession = new ReactiveDict();

Template.Tags.onCreated(function() {
	
});

Template.Tags.onDestroyed(function() {
	
});

Template.Tags.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.Tags.events({
	
});

Template.Tags.helpers({
	
});

var TagsViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("TagsViewSearchString");
	var sortBy = pageSession.get("TagsViewSortBy");
	var sortAscending = pageSession.get("TagsViewSortAscending");
	if(typeof(sortAscending) == "undefined") sortAscending = true;

	var raw = cursor.fetch();

	// filter
	var filtered = [];
	if(!searchString || searchString == "") {
		filtered = raw;
	} else {
		searchString = searchString.replace(".", "\\.");
		var regEx = new RegExp(searchString, "i");
		var searchFields = ["name", "count"];
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

var TagsViewExport = function(cursor, fileType) {
	var data = TagsViewItems(cursor);
	var exportFields = [];

	var str = exportArrayOfObjects(data, exportFields, fileType);

	var filename = "export." + fileType;

	downloadLocalResource(str, filename, "application/octet-stream");
}

Template.TagsView.onCreated(function() {
	
});

Template.TagsView.onDestroyed(function() {
	
});

Template.TagsView.onRendered(function() {
	pageSession.set("TagsViewStyle", "table");
	
});

Template.TagsView.events({
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
				pageSession.set("TagsViewSearchString", searchString);
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
					pageSession.set("TagsViewSearchString", searchString);
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
					pageSession.set("TagsViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();
		Router.go("tags.insert", mergeObjects(Router.currentRouteParams(), {}));
	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		TagsViewExport(this.tag_list, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		TagsViewExport(this.tag_list, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		TagsViewExport(this.tag_list, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		TagsViewExport(this.tag_list, "json");
	}

	
});

Template.TagsView.helpers({

	

	"isEmpty": function() {
		return !this.tag_list || this.tag_list.count() == 0;
	},
	"isNotEmpty": function() {
		return this.tag_list && this.tag_list.count() > 0;
	},
	"isNotFound": function() {
		return this.tag_list && pageSession.get("TagsViewSearchString") && TagsViewItems(this.tag_list).length == 0;
	},
	"searchString": function() {
		return pageSession.get("TagsViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("TagsViewStyle") == "table";
	},
	"viewAsBlog": function() {
		return pageSession.get("TagsViewStyle") == "blog";
	},
	"viewAsList": function() {
		return pageSession.get("TagsViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("TagsViewStyle") == "gallery";
	}

	
});


Template.TagsViewTable.onCreated(function() {
	
});

Template.TagsViewTable.onDestroyed(function() {
	
});

Template.TagsViewTable.onRendered(function() {
	
});

Template.TagsViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("TagsViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("TagsViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("TagsViewSortAscending") || false;
			pageSession.set("TagsViewSortAscending", !sortAscending);
		} else {
			pageSession.set("TagsViewSortAscending", true);
		}
	}
});

Template.TagsViewTable.helpers({
	"tableItems": function() {
		return TagsViewItems(this.tag_list);
	}
});


Template.TagsViewTableItems.onCreated(function() {
	
});

Template.TagsViewTableItems.onDestroyed(function() {
	
});

Template.TagsViewTableItems.onRendered(function() {
	
});

Template.TagsViewTableItems.events({
	

	"click td": function(e, t) {
		e.preventDefault();
		
		Router.go("tags.details", mergeObjects(Router.currentRouteParams(), {tagId: this._id}));
		return false;
	},

	"click .inline-checkbox": function(e, t) {
		e.preventDefault();

		if(!this || !this._id) return false;

		var fieldName = $(e.currentTarget).attr("data-field");
		if(!fieldName) return false;

		var values = {};
		values[fieldName] = !this[fieldName];

		Meteor.call("tagsUpdate", this._id, values, function(err, res) {
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
						Meteor.call("tagsRemove", me._id, function(err, res) {
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
		Router.go("tags.update", mergeObjects(Router.currentRouteParams(), {tagId: this._id}));
		return false;
	}
});

Template.TagsViewTableItems.helpers({
	

	"checked": function(value) { return value ? "checked" : "" }
	

	
});
