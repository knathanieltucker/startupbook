var pageSession = new ReactiveDict();

Template.QuotesAddQuotesUpdate.onCreated(function() {
	
});

Template.QuotesAddQuotesUpdate.onDestroyed(function() {
	
});

Template.QuotesAddQuotesUpdate.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.QuotesAddQuotesUpdate.events({
	
});

Template.QuotesAddQuotesUpdate.helpers({
	
});

Template.QuotesAddQuotesUpdateForm.onCreated(function() {
	
});

Template.QuotesAddQuotesUpdateForm.onDestroyed(function() {
	
});

Template.QuotesAddQuotesUpdateForm.onRendered(function() {
	

	pageSession.set("quotesAddQuotesUpdateFormInfoMessage", "");
	pageSession.set("quotesAddQuotesUpdateFormErrorMessage", "");

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

Template.QuotesAddQuotesUpdateForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("quotesAddQuotesUpdateFormInfoMessage", "");
		pageSession.set("quotesAddQuotesUpdateFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var quotesAddQuotesUpdateFormMode = "update";
			if(!t.find("#form-cancel-button")) {
				switch(quotesAddQuotesUpdateFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("quotesAddQuotesUpdateFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("quotes.add_quotes", mergeObjects(Router.currentRouteParams(), {}));
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("quotesAddQuotesUpdateFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call("quotesUpdate", t.data.quote._id, values, function(e, r) { if(e) errorAction(e); else submitAction(r); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("quotes.add_quotes", mergeObjects(Router.currentRouteParams(), {}));
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

Template.QuotesAddQuotesUpdateForm.helpers({
	"infoMessage": function() {
		return pageSession.get("quotesAddQuotesUpdateFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("quotesAddQuotesUpdateFormErrorMessage");
	}
	
});
