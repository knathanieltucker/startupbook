Template.GuideFeatures.onCreated(function() {
	
});

Template.GuideFeatures.onDestroyed(function() {
	
});

Template.GuideFeatures.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideFeatures.events({
	
});

Template.GuideFeatures.helpers({
	
});

