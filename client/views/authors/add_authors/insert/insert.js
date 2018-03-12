var pageSession = new ReactiveDict();

Template.AuthorsAddAuthorsInsert.onCreated(function() {
	
});

Template.AuthorsAddAuthorsInsert.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsInsert.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.AuthorsAddAuthorsInsert.events({
	
});

Template.AuthorsAddAuthorsInsert.helpers({
	
});

Template.AuthorsAddAuthorsInsertForm.onCreated(function() {
	
});

Template.AuthorsAddAuthorsInsertForm.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsInsertForm.onRendered(function() {
	

	pageSession.set("authorsAddAuthorsInsertFormInfoMessage", "");
	pageSession.set("authorsAddAuthorsInsertFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
});

Template.AuthorsAddAuthorsInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("authorsAddAuthorsInsertFormInfoMessage", "");
		pageSession.set("authorsAddAuthorsInsertFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var authorsAddAuthorsInsertFormMode = "insert";
			if(!t.find("#form-cancel-button")) {
				switch(authorsAddAuthorsInsertFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("authorsAddAuthorsInsertFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("authors.add_authors", mergeObjects(Router.currentRouteParams(), {}));
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("authorsAddAuthorsInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call("authorsInsert", values, function(e, r) { if(e) errorAction(e); else submitAction(r); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("authors.add_authors", mergeObjects(Router.currentRouteParams(), {}));
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.AuthorsAddAuthorsInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("authorsAddAuthorsInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("authorsAddAuthorsInsertFormErrorMessage");
	}
	
});
