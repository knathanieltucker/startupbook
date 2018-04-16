Template.GuideVc.onCreated(function() {
	
});

Template.GuideVc.onDestroyed(function() {
	
});

Template.GuideVc.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideVc.events({
	
});

Template.GuideVc.helpers({
	
});

