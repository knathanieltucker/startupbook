Template.GuidePhilosophy.onCreated(function() {
	
});

Template.GuidePhilosophy.onDestroyed(function() {
	
});

Template.GuidePhilosophy.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuidePhilosophy.events({
	
});

Template.GuidePhilosophy.helpers({
	
});

