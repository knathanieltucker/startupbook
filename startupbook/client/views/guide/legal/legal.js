Template.GuideLegal.onCreated(function() {
	
});

Template.GuideLegal.onDestroyed(function() {
	
});

Template.GuideLegal.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideLegal.events({
	
});

Template.GuideLegal.helpers({
	
});

