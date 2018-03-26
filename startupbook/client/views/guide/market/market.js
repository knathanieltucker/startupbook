Template.GuideMarket.onCreated(function() {
	
});

Template.GuideMarket.onDestroyed(function() {
	
});

Template.GuideMarket.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuideMarket.events({
	
});

Template.GuideMarket.helpers({
	
});

