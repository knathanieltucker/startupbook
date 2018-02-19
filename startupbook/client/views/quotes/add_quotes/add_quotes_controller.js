this.QuotesAddQuotesController = RouteController.extend({
	template: "Quotes",
	

	yieldTemplates: {
		'QuotesAddQuotes': { to: 'QuotesSubcontent'}
		
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
			Meteor.subscribe("quote_list")
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
			quote_list: Quotes.find({}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});