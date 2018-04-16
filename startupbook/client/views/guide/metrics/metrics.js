Template.GuideMetrics.onCreated(function() {
	
});

Template.GuideMetrics.onDestroyed(function() {
	
});

Template.GuideMetrics.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideMetrics.events({
	
});

Template.GuideMetrics.helpers({
	
});

