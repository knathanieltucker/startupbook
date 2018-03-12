Meteor.publish("quote_list", function() {
	return Quotes.publishJoinedCursors(Quotes.find({}, {}));
});

Meteor.publish("quotes_null", function() {
	return Quotes.publishJoinedCursors(Quotes.find({_id:null}, {}));
});

Meteor.publish("quote", function(quoteId) {
	return Quotes.publishJoinedCursors(Quotes.find({_id:quoteId}, {}));
});

