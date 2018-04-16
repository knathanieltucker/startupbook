Template.GuideMvp.onCreated(function() {
	
});

Template.GuideMvp.onDestroyed(function() {
	
});

Template.GuideMvp.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideMvp.events({
	
});

Template.GuideMvp.helpers({
	
});

