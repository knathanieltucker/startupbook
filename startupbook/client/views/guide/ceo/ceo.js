Template.GuideCeo.onCreated(function() {
	
});

Template.GuideCeo.onDestroyed(function() {
	
});

Template.GuideCeo.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideCeo.events({
	
});

Template.GuideCeo.helpers({
	
});

