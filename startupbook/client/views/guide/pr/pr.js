Template.GuidePr.onCreated(function() {
	
});

Template.GuidePr.onDestroyed(function() {
	
});

Template.GuidePr.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuidePr.events({
	
});

Template.GuidePr.helpers({
	
});

