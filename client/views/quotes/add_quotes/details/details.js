var pageSession = new ReactiveDict();

Template.QuotesAddQuotesDetails.onCreated(function() {
	
});

Template.QuotesAddQuotesDetails.onDestroyed(function() {
	
});

Template.QuotesAddQuotesDetails.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.QuotesAddQuotesDetails.events({
	
});

Template.QuotesAddQuotesDetails.helpers({
	
});

Template.QuotesAddQuotesDetailsForm.onCreated(function() {
	
});

Template.QuotesAddQuotesDetailsForm.onDestroyed(function() {
	
});

Template.QuotesAddQuotesDetailsForm.onRendered(function() {
	

	pageSession.set("quotesAddQuotesDetailsFormInfoMessage", "");
	pageSession.set("quotesAddQuotesDetailsFormErrorMessage", "");

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

Template.QuotesAddQuotesDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("quotesAddQuotesDetailsFormInfoMessage", "");
		pageSession.set("quotesAddQuotesDetailsFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var quotesAddQuotesDetailsFormMode = "read_only";
			if(!t.find("#form-cancel-button")) {
				switch(quotesAddQuotesDetailsFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("quotesAddQuotesDetailsFormInfoMessage", message);
					}; break;
				}
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("quotesAddQuotesDetailsFormErrorMessage", message);
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

		Router.go("quotes.add_quotes", mergeObjects(Router.currentRouteParams(), {}));
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		Router.go("quotes.add_quotes", mergeObjects(Router.currentRouteParams(), {}));
	}

	
});

Template.QuotesAddQuotesDetailsForm.helpers({
	"infoMessage": function() {
		return pageSession.get("quotesAddQuotesDetailsFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("quotesAddQuotesDetailsFormErrorMessage");
	}
	
});
