Template.GuideUserInterviews.onCreated(function() {
	
});

Template.GuideUserInterviews.onDestroyed(function() {
	
});

Template.GuideUserInterviews.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideUserInterviews.events({
	
});

Template.GuideUserInterviews.helpers({
	
});

