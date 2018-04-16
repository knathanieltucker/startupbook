Template.GuideGrowth.onCreated(function() {
	
});

Template.GuideGrowth.onDestroyed(function() {
	
});

Template.GuideGrowth.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideGrowth.events({
	
});

Template.GuideGrowth.helpers({
	
});

