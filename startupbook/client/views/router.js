Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

Router.freeRoutes = [
	"authors",
	"authors.add_authors",
	"authors.add_authors.details",
	"authors.add_authors.insert",
	"authors.add_authors.update",
	"tags",
	"tags.details",
	"tags.insert",
	"tags.update",
	"quotes",
	"quotes.add_quotes",
	"quotes.add_quotes.details",
	"quotes.add_quotes.insert",
	"quotes.add_quotes.update",
	"guide",
	"guide.introduction",
	"guide.preparation",
	"guide.ideas"
];

Router.defaultFreeRoute = "authors";

Router.onBeforeAction(function() {
	// loading indicator here
	if(!this.ready()) {
		this.render('loading');
		$("body").addClass("wait");
	} else {
		$("body").removeClass("wait");
		this.next();
	}
});

Router.map(function () {
	
	this.route("/", {name: "authors", title: "", controller: "AuthorsController"});
	this.route("/add_authors", {name: "authors.add_authors", title: "", controller: "AuthorsAddAuthorsController"});
	this.route("/add_authors/details/:authorId", {name: "authors.add_authors.details", title: "", controller: "AuthorsAddAuthorsDetailsController"});
	this.route("/add_authors/insert", {name: "authors.add_authors.insert", title: "", controller: "AuthorsAddAuthorsInsertController"});
	this.route("/add_authors/update/:authorId", {name: "authors.add_authors.update", title: "", controller: "AuthorsAddAuthorsUpdateController"});
	this.route("/tags", {name: "tags", title: "", controller: "TagsController"});
	this.route("/tags/details/:tagId", {name: "tags.details", title: "", controller: "TagsDetailsController"});
	this.route("/tags/insert", {name: "tags.insert", title: "", controller: "TagsInsertController"});
	this.route("/tags/update/:tagId", {name: "tags.update", title: "", controller: "TagsUpdateController"});
	this.route("/quotes", {name: "quotes", title: "", controller: "QuotesController"});
	this.route("/quotes/add_quotes", {name: "quotes.add_quotes", title: "", controller: "QuotesAddQuotesController"});
	this.route("/quotes/add_quotes/details/:quoteId", {name: "quotes.add_quotes.details", title: "", controller: "QuotesAddQuotesDetailsController"});
	this.route("/quotes/add_quotes/insert", {name: "quotes.add_quotes.insert", title: "", controller: "QuotesAddQuotesInsertController"});
	this.route("/quotes/add_quotes/update/:quoteId", {name: "quotes.add_quotes.update", title: "", controller: "QuotesAddQuotesUpdateController"});
	this.route("/guide", {name: "guide", title: "", controller: "GuideController"});
	this.route("/guide/introduction", {name: "guide.introduction", title: "", controller: "GuideIntroductionController"});
	this.route("/guide/preparation", {name: "guide.preparation", title: "", controller: "GuidePreparationController"});
	this.route("/guide/ideas", {name: "guide.ideas", title: "", controller: "GuideIdeasController"});
});
