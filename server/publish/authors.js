Meteor.publish("all_authors", function() {
	return Authors.find({}, {});
});

Meteor.publish("author_list", function() {
	return Authors.find({}, {});
});

Meteor.publish("authors_null", function() {
	return Authors.find({_id:null}, {});
});

Meteor.publish("author", function(authorId) {
	return Authors.find({_id:authorId}, {});
});

Meteor.publish("author_list1", function() {
	return Authors.find({}, {});
});

Meteor.publish("authors_null1", function() {
	return Authors.find({_id:null}, {});
});

Meteor.publish("author1", function(authorId) {
	return Authors.find({_id:authorId}, {});
});

