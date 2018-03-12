Template.GuidePreparation.onCreated(function() {
	
});

Template.GuidePreparation.onDestroyed(function() {
	
});

Template.GuidePreparation.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuidePreparation.events({
	
});

Template.GuidePreparation.helpers({
	
});

