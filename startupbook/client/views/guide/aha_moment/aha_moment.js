Template.GuideAhaMoment.onCreated(function() {
	
});

Template.GuideAhaMoment.onDestroyed(function() {
	
});

Template.GuideAhaMoment.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideAhaMoment.events({
	
});

Template.GuideAhaMoment.helpers({
	
});

