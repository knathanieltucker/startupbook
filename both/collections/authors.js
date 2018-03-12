this.Authors = new Mongo.Collection("authors");

this.Authors.userCanInsert = function(userId, doc) {
	return true;
};

this.Authors.userCanUpdate = function(userId, doc) {
	return true;
};

this.Authors.userCanRemove = function(userId, doc) {
	return true;
};
