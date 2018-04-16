Template.GuideEnterprise.onCreated(function() {
	
});

Template.GuideEnterprise.onDestroyed(function() {
	
});

Template.GuideEnterprise.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideEnterprise.events({
	
});

Template.GuideEnterprise.helpers({
	
});

