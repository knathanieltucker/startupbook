Template.GuideCreativity.onCreated(function() {
	
});

Template.GuideCreativity.onDestroyed(function() {
	
});

Template.GuideCreativity.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideCreativity.events({
	
});

Template.GuideCreativity.helpers({
	
});

