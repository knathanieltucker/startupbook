this.AuthorsAddAuthorsUpdateController = RouteController.extend({
	template: "Authors",
	

	yieldTemplates: {
		'AuthorsAddAuthorsUpdate': { to: 'AuthorsSubcontent'}
		
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
			Meteor.subscribe("author1", this.params.authorId)
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
			author1: Authors.findOne({_id:this.params.authorId}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});