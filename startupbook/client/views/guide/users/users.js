Template.GuideUsers.onCreated(function() {
	
});

Template.GuideUsers.onDestroyed(function() {
	
});

Template.GuideUsers.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideUsers.events({
	
});

Template.GuideUsers.helpers({
	
});

