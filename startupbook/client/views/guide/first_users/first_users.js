Template.GuideFirstUsers.onCreated(function() {
	
});

Template.GuideFirstUsers.onDestroyed(function() {
	
});

Template.GuideFirstUsers.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideFirstUsers.events({
	
});

Template.GuideFirstUsers.helpers({
	
});

