Meteor.methods({
	"quotesInsert": function(data) {
		if(!Quotes.userCanInsert(this.userId, data)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		return Quotes.insert(data);
	},

	"quotesUpdate": function(id, data) {
		var doc = Quotes.findOne({ _id: id });
		if(!Quotes.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Quotes.update({ _id: id }, { $set: data });
	},

	"quotesRemove": function(id) {
		var doc = Quotes.findOne({ _id: id });
		if(!Quotes.userCanRemove(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Quotes.remove({ _id: id });
	}
});
