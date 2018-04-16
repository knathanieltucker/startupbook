Template.GuideBuildProducts.onCreated(function() {
	
});

Template.GuideBuildProducts.onDestroyed(function() {
	
});

Template.GuideBuildProducts.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideBuildProducts.events({
	
});

Template.GuideBuildProducts.helpers({
	
});

