this.AuthorsAddAuthorsInsertController = RouteController.extend({
	template: "Authors",
	

	yieldTemplates: {
		'AuthorsAddAuthorsInsert': { to: 'AuthorsSubcontent'}
		
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
			Meteor.subscribe("authors_null1")
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
			authors_null1: Authors.findOne({_id:null}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});