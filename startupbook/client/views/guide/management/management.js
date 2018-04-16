Template.GuideManagement.onCreated(function() {
	
});

Template.GuideManagement.onDestroyed(function() {
	
});

Template.GuideManagement.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideManagement.events({
	
});

Template.GuideManagement.helpers({
	
});

