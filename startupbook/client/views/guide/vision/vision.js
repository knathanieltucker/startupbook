Template.GuideVision.onCreated(function() {
	
});

Template.GuideVision.onDestroyed(function() {
	
});

Template.GuideVision.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideVision.events({
	
});

Template.GuideVision.helpers({
	
});

