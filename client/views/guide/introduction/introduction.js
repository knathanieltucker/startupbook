Template.GuideIntroduction.onCreated(function() {
	
});

Template.GuideIntroduction.onDestroyed(function() {
	
});

Template.GuideIntroduction.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideIntroduction.events({
	
});

Template.GuideIntroduction.helpers({
	
});

