Template.GuideIdeaValidation.onCreated(function() {
	
});

Template.GuideIdeaValidation.onDestroyed(function() {
	
});

Template.GuideIdeaValidation.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideIdeaValidation.events({
	
});

Template.GuideIdeaValidation.helpers({
	
});

