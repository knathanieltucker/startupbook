this.QuotesAddQuotesInsertController = RouteController.extend({
	template: "Quotes",
	

	yieldTemplates: {
		'QuotesAddQuotesInsert': { to: 'QuotesSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("Quotes"); this.render("loading", { to: "QuotesSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("all_authors"),
			Meteor.subscribe("quotes_null")
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
			all_authors: Authors.find({}, {}),
			quotes_null: Quotes.findOne({_id:null}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});