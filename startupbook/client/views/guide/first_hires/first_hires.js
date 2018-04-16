Template.GuideFirstHires.onCreated(function() {
	
});

Template.GuideFirstHires.onDestroyed(function() {
	
});

Template.GuideFirstHires.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideFirstHires.events({
	
});

Template.GuideFirstHires.helpers({
	
});

