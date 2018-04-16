Template.GuideCulture.onCreated(function() {
	
});

Template.GuideCulture.onDestroyed(function() {
	
});

Template.GuideCulture.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideCulture.events({
	
});

Template.GuideCulture.helpers({
	
});

