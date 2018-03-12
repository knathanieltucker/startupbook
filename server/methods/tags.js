Meteor.methods({
	"tagsInsert": function(data) {
		if(!Tags.userCanInsert(this.userId, data)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		return Tags.insert(data);
	},

	"tagsUpdate": function(id, data) {
		var doc = Tags.findOne({ _id: id });
		if(!Tags.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Tags.update({ _id: id }, { $set: data });
	},

	"tagsRemove": function(id) {
		var doc = Tags.findOne({ _id: id });
		if(!Tags.userCanRemove(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Tags.remove({ _id: id });
	}
});
