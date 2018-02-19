Template.Quotes.onCreated(function() {
	
});

Template.Quotes.onDestroyed(function() {
	
});

Template.Quotes.onRendered(function() {
	

	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.Quotes.events({
	
});

Template.Quotes.helpers({
	
});

Template.QuotesMenu.onCreated(function() {
	
});

Template.QuotesMenu.onDestroyed(function() {
	
});

Template.QuotesMenu.onRendered(function() {
	$(".menu-item-collapse .dropdown-toggle").each(function() {
		if($(this).find("li.active")) {
			$(this).removeClass("collapsed");
		}
		$(this).parent().find(".collapse").each(function() {
			if($(this).find("li.active").length) {
				$(this).addClass("in");
			}
		});
	});
	
});

Template.QuotesMenu.events({
	"click .toggle-text": function(e, t) {
		e.preventDefault();
		$(e.target).closest("ul").toggleClass("menu-hide-text");
	}
	
});

Template.QuotesMenu.helpers({
	
});
