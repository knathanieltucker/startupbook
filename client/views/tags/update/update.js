var pageSession = new ReactiveDict();

Template.TagsUpdate.onCreated(function() {
	
});

Template.TagsUpdate.onDestroyed(function() {
	
});

Template.TagsUpdate.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.TagsUpdate.events({
	
});

Template.TagsUpdate.helpers({
	
});

Template.TagsUpdateForm.onCreated(function() {
	
});

Template.TagsUpdateForm.onDestroyed(function() {
	
});

Template.TagsUpdateForm.onRendered(function() {
	

	pageSession.set("tagsUpdateFormInfoMessage", "");
	pageSession.set("tagsUpdateFormErrorMessage", "");

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

Template.TagsUpdateForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("tagsUpdateFormInfoMessage", "");
		pageSession.set("tagsUpdateFormErrorMessage", "");

		var self = this;

		function submitAction(result, msg) {
			var tagsUpdateFormMode = "update";
			if(!t.find("#form-cancel-button")) {
				switch(tagsUpdateFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("tagsUpdateFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("tags", mergeObjects(Router.currentRouteParams(), {}));
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("tagsUpdateFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Meteor.call("tagsUpdate", t.data.tag._id, values, function(e, r) { if(e) errorAction(e); else submitAction(r); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("tags", mergeObjects(Router.currentRouteParams(), {}));
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

Template.TagsUpdateForm.helpers({
	"infoMessage": function() {
		return pageSession.get("tagsUpdateFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("tagsUpdateFormErrorMessage");
	}
	
});
