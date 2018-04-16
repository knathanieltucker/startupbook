Template.GuideCustomerService.onCreated(function() {
	
});

Template.GuideCustomerService.onDestroyed(function() {
	
});

Template.GuideCustomerService.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideCustomerService.events({
	
});

Template.GuideCustomerService.helpers({
	
});

