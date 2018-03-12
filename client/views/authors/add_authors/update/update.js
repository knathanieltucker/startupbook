var pageSession = new ReactiveDict();

Template.AuthorsAddAuthorsUpdate.onCreated(function() {
	
});

Template.AuthorsAddAuthorsUpdate.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsUpdate.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.AuthorsAddAuthorsUpdate.events({
	
});

Template.AuthorsAddAuthorsUpdate.helpers({
	
});

Template.AuthorsAddAuthorsUpdateForm.onCreated(function() {
	
});

Template.AuthorsAddAuthorsUpdateForm.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsUpdateForm.onRendered(function() {
	

	pageSession.set("authorsAddAuthorsUpdateFormInfoMessage", "");
	pageSession.set("authorsAddAuthorsUpdateFormErrorMessage", "");

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

Template.AuthorsAddAuthorsUpdateForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("authorsAddAuthorsUpdateFormInfoMessage", "");
		pageSession.set("authorsAddAuthorsUpdateFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var authorsAddAuthorsUpdateFormMode = "update";
			if(!t.find("#form-cancel-button")) {
				switch(authorsAddAuthorsUpdateFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("authorsAddAuthorsUpdateFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("authors.add_authors", mergeObjects(Router.currentRouteParams(), {}));
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("authorsAddAuthorsUpdateFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call("authorsUpdate", t.data.author1._id, values, function(e, r) { if(e) errorAction(e); else submitAction(r); });
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

Template.AuthorsAddAuthorsUpdateForm.helpers({
	"infoMessage": function() {
		return pageSession.get("authorsAddAuthorsUpdateFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("authorsAddAuthorsUpdateFormErrorMessage");
	}
	
});
