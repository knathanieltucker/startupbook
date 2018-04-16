Template.GuidePromotion.onCreated(function() {
	
});

Template.GuidePromotion.onDestroyed(function() {
	
});

Template.GuidePromotion.onRendered(function() {
	
	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.GuidePromotion.events({
	
});

Template.GuidePromotion.helpers({
	
});

