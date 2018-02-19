Meteor.startup(function() {
	// read environment variables from Meteor.settings
	if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
		for(var variableName in Meteor.settings.env) {
			process.env[variableName] = Meteor.settings.env[variableName];
		}
	}

	
import _ from 'underscore';
import readYaml from 'read-yaml';
import fs from 'fs';

const dirs = fs.readdirSync('./assets/app/authors');

Authors.remove({});
Quotes.remove({});
Tags.remove({});

let authorQuotes;
let author;
let tags;
_.each(dirs, (dir) => {
  authorQuotes = readYaml.sync(`./assets/app/authors/${dir}`);
  authorId = Authors.insert({
    name: authorQuotes.name,
    description: authorQuotes.description || '',
    authorTags: authorQuotes.tags || '',
  });

  _.each(authorQuotes.advise, (quote) => {
    Quotes.insert({
    quote: quote.quote,
    authorId: authorId,
    tags: Array.isArray(quote.tags) ? quote.tags : [quote.tags],
    mdId: quote.id,});
    
    
    tags = Array.isArray(quote.tags) ? quote.tags : [quote.tags];
    _.each(tags, (tag) => {
      Tags.upsert({
          name: tag
      	}, {
          $setOnInsert: {
              name: tag
          },
          $inc: {
              count: 1
          }
      });

    });
    
  });
});
});

Meteor.methods({
	"sendMail": function(options) {
		this.unblock();

		Email.send(options);
	}
});