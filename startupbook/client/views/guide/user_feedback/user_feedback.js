Template.GuideUserFeedback.onCreated(function() {
	
});

Template.GuideUserFeedback.onDestroyed(function() {
	
});

Template.GuideUserFeedback.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideUserFeedback.events({
	
});

Template.GuideUserFeedback.helpers({
	
});

