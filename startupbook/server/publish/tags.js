Meteor.publish("tag_list", function() {
	return Tags.find({}, {});
});

Meteor.publish("tags_null", function() {
	return Tags.find({_id:null}, {});
});

Meteor.publish("tag", function(tagId) {
	return Tags.find({_id:tagId}, {});
});

