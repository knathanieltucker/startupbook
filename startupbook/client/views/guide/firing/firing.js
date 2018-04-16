Template.GuideFiring.onCreated(function() {
	
});

Template.GuideFiring.onDestroyed(function() {
	
});

Template.GuideFiring.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideFiring.events({
	
});

Template.GuideFiring.helpers({
	
});

