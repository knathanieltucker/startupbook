Template.GuideFounders.onCreated(function() {
	
});

Template.GuideFounders.onDestroyed(function() {
	
});

Template.GuideFounders.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideFounders.events({
	
});

Template.GuideFounders.helpers({
	
});

