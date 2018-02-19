var pageSession = new ReactiveDict();

Template.AuthorsAddAuthorsDetails.onCreated(function() {
	
});

Template.AuthorsAddAuthorsDetails.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsDetails.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.AuthorsAddAuthorsDetails.events({
	
});

Template.AuthorsAddAuthorsDetails.helpers({
	
});

Template.AuthorsAddAuthorsDetailsForm.onCreated(function() {
	
});

Template.AuthorsAddAuthorsDetailsForm.onDestroyed(function() {
	
});

Template.AuthorsAddAuthorsDetailsForm.onRendered(function() {
	

	pageSession.set("authorsAddAuthorsDetailsFormInfoMessage", "");
	pageSession.set("authorsAddAuthorsDetailsFormErrorMessage", "");

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

Template.AuthorsAddAuthorsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("authorsAddAuthorsDetailsFormInfoMessage", "");
		pageSession.set("authorsAddAuthorsDetailsFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var authorsAddAuthorsDetailsFormMode = "read_only";
			if(!t.find("#form-cancel-button")) {
				switch(authorsAddAuthorsDetailsFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("authorsAddAuthorsDetailsFormInfoMessage", message);
					}; break;
				}
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("authorsAddAuthorsDetailsFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		Router.go("authors.add_authors", mergeObjects(Router.currentRouteParams(), {}));
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		Router.go("authors.add_authors", mergeObjects(Router.currentRouteParams(), {}));
	}

	
});

Template.AuthorsAddAuthorsDetailsForm.helpers({
	"infoMessage": function() {
		return pageSession.get("authorsAddAuthorsDetailsFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("authorsAddAuthorsDetailsFormErrorMessage");
	}
	
});
