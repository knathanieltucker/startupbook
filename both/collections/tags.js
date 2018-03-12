this.Tags = new Mongo.Collection("tags");

this.Tags.userCanInsert = function(userId, doc) {
	return true;
};

this.Tags.userCanUpdate = function(userId, doc) {
	return true;
};

this.Tags.userCanRemove = function(userId, doc) {
	return true;
};
