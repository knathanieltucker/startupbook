Template.GuideLateStage.onCreated(function() {
	
});

Template.GuideLateStage.onDestroyed(function() {
	
});

Template.GuideLateStage.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideLateStage.events({
	
});

Template.GuideLateStage.helpers({
	
});

