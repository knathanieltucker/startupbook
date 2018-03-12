Template.Guide.onCreated(function() {
	
});

Template.Guide.onDestroyed(function() {
	
});

Template.Guide.onRendered(function() {
	

	Meteor.defer(function() {
		globalOnRendered();
		$("input[autofocus]").focus();
	});
});

Template.Guide.events({
	
});

Template.Guide.helpers({
	
});

Template.GuideMenu.onCreated(function() {
	
});

Template.GuideMenu.onDestroyed(function() {
	
});

Template.GuideMenu.onRendered(function() {
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

Template.GuideMenu.events({
	"click .toggle-text": function(e, t) {
		e.preventDefault();
		$(e.target).closest("ul").toggleClass("menu-hide-text");
	}
	
});

Template.GuideMenu.helpers({
	
});
