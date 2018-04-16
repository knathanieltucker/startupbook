Template.GuidePitch.onCreated(function() {
	
});

Template.GuidePitch.onDestroyed(function() {
	
});

Template.GuidePitch.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuidePitch.events({
	
});

Template.GuidePitch.helpers({
	
});

