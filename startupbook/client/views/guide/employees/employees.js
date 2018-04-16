Template.GuideEmployees.onCreated(function() {
	
});

Template.GuideEmployees.onDestroyed(function() {
	
});

Template.GuideEmployees.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideEmployees.events({
	
});

Template.GuideEmployees.helpers({
	
});

