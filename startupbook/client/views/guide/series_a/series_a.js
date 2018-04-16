Template.GuideSeriesA.onCreated(function() {
	
});

Template.GuideSeriesA.onDestroyed(function() {
	
});

Template.GuideSeriesA.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideSeriesA.events({
	
});

Template.GuideSeriesA.helpers({
	
});

