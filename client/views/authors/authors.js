Template.Authors.onCreated(function() {
	
});

Template.Authors.onDestroyed(function() {
	
});

Template.Authors.onRendered(function() {
	

	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.Authors.events({
	
});

Template.Authors.helpers({
	
});

Template.AuthorsMenu.onCreated(function() {
	
});

Template.AuthorsMenu.onDestroyed(function() {
	
});

Template.AuthorsMenu.onRendered(function() {
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

Template.AuthorsMenu.events({
	"click .toggle-text": function(e, t) {
		e.preventDefault();
		$(e.target).closest("ul").toggleClass("menu-hide-text");
	}
	
});

Template.AuthorsMenu.helpers({
	
});
