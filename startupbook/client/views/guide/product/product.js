Template.GuideProduct.onCreated(function() {
	
});

Template.GuideProduct.onDestroyed(function() {
	
});

Template.GuideProduct.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideProduct.events({
	
});

Template.GuideProduct.helpers({
	
});

