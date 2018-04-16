this.GuidePitchController = RouteController.extend({
	template: "Guide",
	

	yieldTemplates: {
		'GuidePitch': { to: 'GuideSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("Guide"); this.render("loading", { to: "GuideSubcontent" });}
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