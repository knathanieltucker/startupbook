Template.GuideEquity.onCreated(function() {
	
});

Template.GuideEquity.onDestroyed(function() {
	
});

Template.GuideEquity.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideEquity.events({
	
});

Template.GuideEquity.helpers({
	
});

