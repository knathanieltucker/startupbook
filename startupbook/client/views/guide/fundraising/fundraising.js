Template.GuideFundraising.onCreated(function() {
	
});

Template.GuideFundraising.onDestroyed(function() {
	
});

Template.GuideFundraising.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideFundraising.events({
	
});

Template.GuideFundraising.helpers({
	
});

