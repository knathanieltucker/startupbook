var pageSession = new ReactiveDict();

Template.TagsDetails.onCreated(function() {
	
});

Template.TagsDetails.onDestroyed(function() {
	
});

Template.TagsDetails.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.TagsDetails.events({
	
});

Template.TagsDetails.helpers({
	
});

Template.TagsDetailsForm.onCreated(function() {
	
});

Template.TagsDetailsForm.onDestroyed(function() {
	
});

Template.TagsDetailsForm.onRendered(function() {
	

	pageSession.set("tagsDetailsFormInfoMessage", "");
	pageSession.set("tagsDetailsFormErrorMessage", "");

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

Template.TagsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("tagsDetailsFormInfoMessage", "");
		pageSession.set("tagsDetailsFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var tagsDetailsFormMode = "read_only";
			if(!t.find("#form-cancel-button")) {
				switch(tagsDetailsFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("tagsDetailsFormInfoMessage", message);
					}; break;
				}
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("tagsDetailsFormErrorMessage", message);
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

		Router.go("tags", mergeObjects(Router.currentRouteParams(), {}));
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		Router.go("tags", mergeObjects(Router.currentRouteParams(), {}));
	}

	
});

Template.TagsDetailsForm.helpers({
	"infoMessage": function() {
		return pageSession.get("tagsDetailsFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("tagsDetailsFormErrorMessage");
	}
	
});
