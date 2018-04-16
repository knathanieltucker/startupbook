Template.GuideSales.onCreated(function() {
	
});

Template.GuideSales.onDestroyed(function() {
	
});

Template.GuideSales.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideSales.events({
	
});

Template.GuideSales.helpers({
	
});

