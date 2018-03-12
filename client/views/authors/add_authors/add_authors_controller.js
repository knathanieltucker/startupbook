this.AuthorsAddAuthorsController = RouteController.extend({
	template: "Authors",
	

	yieldTemplates: {
		'AuthorsAddAuthors': { to: 'AuthorsSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("Authors"); this.render("loading", { to: "AuthorsSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("author_list1")
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		var data = {
			params: this.params || {},
			author_list1: Authors.find({}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});