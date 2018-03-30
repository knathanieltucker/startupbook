Template.GuideInterviews.onCreated(function() {
	
});

Template.GuideInterviews.onDestroyed(function() {
	
});

Template.GuideInterviews.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideInterviews.events({
	
});

Template.GuideInterviews.helpers({
	
});

