Template.GuideIdeas.onCreated(function() {
	
});

Template.GuideIdeas.onDestroyed(function() {
	
});

Template.GuideIdeas.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideIdeas.events({
	
});

Template.GuideIdeas.helpers({
	
});

