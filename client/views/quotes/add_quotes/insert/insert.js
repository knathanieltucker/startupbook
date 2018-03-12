var pageSession = new ReactiveDict();

Template.QuotesAddQuotesInsert.onCreated(function() {
	
});

Template.QuotesAddQuotesInsert.onDestroyed(function() {
	
});

Template.QuotesAddQuotesInsert.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.QuotesAddQuotesInsert.events({
	
});

Template.QuotesAddQuotesInsert.helpers({
	
});

Template.QuotesAddQuotesInsertForm.onCreated(function() {
	
});

Template.QuotesAddQuotesInsertForm.onDestroyed(function() {
	
});

Template.QuotesAddQuotesInsertForm.onRendered(function() {
	

	pageSession.set("quotesAddQuotesInsertFormInfoMessage", "");
	pageSession.set("quotesAddQuotesInsertFormErrorMessage", "");

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

Template.QuotesAddQuotesInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("quotesAddQuotesInsertFormInfoMessage", "");
		pageSession.set("quotesAddQuotesInsertFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var quotesAddQuotesInsertFormMode = "insert";
			if(!t.find("#form-cancel-button")) {
				switch(quotesAddQuotesInsertFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("quotesAddQuotesInsertFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("quotes.add_quotes", mergeObjects(Router.currentRouteParams(), {}));
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("quotesAddQuotesInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call("quotesInsert", values, function(e, r) { if(e) errorAction(e); else submitAction(r); });
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

Template.QuotesAddQuotesInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("quotesAddQuotesInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("quotesAddQuotesInsertFormErrorMessage");
	}
	
});
