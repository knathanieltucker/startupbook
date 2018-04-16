Template.GuidePriorities.onCreated(function() {
	
});

Template.GuidePriorities.onDestroyed(function() {
	
});

Template.GuidePriorities.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuidePriorities.events({
	
});

Template.GuidePriorities.helpers({
	
});

