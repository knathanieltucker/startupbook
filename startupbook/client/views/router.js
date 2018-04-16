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
	"guide.build_products",
	"guide.ceo",
	"guide.compensation",
	"guide.creativity",
	"guide.culture",
	"guide.customer_service",
	"guide.employee_feedback",
	"guide.employees",
	"guide.enterprise",
	"guide.equity",
	"guide.features",
	"guide.firing",
	"guide.first_users",
	"guide.first_hires",
	"guide.founders",
	"guide.fundraising",
	"guide.growth",
	"guide.hiring",
	"guide.ideas",
	"guide.idea_validation",
	"guide.interviews",
	"guide.investor_meetings",
	"guide.late_stage",
	"guide.legal",
	"guide.management",
	"guide.market",
	"guide.metrics",
	"guide.mvp",
	"guide.philosophy",
	"guide.pitch",
	"guide.pr",
	"guide.preparation",
	"guide.priorities",
	"guide.product",
	"guide.product_market_fit",
	"guide.promotion",
	"guide.sales",
	"guide.series_a",
	"guide.user_feedback",
	"guide.user_interviews",
	"guide.users",
	"guide.vc",
	"guide.vision",
	"guide.aha_moment"
];

Router.defaultFreeRoute = "authors";

Router.onBeforeAction(function() {
	// add unique class to body element for each route
	if(Router.current()) {
		var currentRouteName = Router.current().route.getName();
		var prevRouteName = Session.get("currentRouteName");
		if(prevRouteName && prevRouteName != currentRouteName) {
			$("body").removeClass("page-" + toKebabCase(prevRouteName));
		}
		Session.set("currentRouteName", currentRouteName);
		$("body").addClass("page-" + toKebabCase(currentRouteName));
	}

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
	this.route("/guide/build_products", {name: "guide.build_products", title: "", controller: "GuideBuildProductsController"});
	this.route("/guide/ceo", {name: "guide.ceo", title: "", controller: "GuideCeoController"});
	this.route("/guide/compensation", {name: "guide.compensation", title: "", controller: "GuideCompensationController"});
	this.route("/guide/creativity", {name: "guide.creativity", title: "", controller: "GuideCreativityController"});
	this.route("/guide/culture", {name: "guide.culture", title: "", controller: "GuideCultureController"});
	this.route("/guide/customer_service", {name: "guide.customer_service", title: "", controller: "GuideCustomerServiceController"});
	this.route("/guide/employee_feedback", {name: "guide.employee_feedback", title: "", controller: "GuideEmployeeFeedbackController"});
	this.route("/guide/employees", {name: "guide.employees", title: "", controller: "GuideEmployeesController"});
	this.route("/guide/enterprise", {name: "guide.enterprise", title: "", controller: "GuideEnterpriseController"});
	this.route("/guide/equity", {name: "guide.equity", title: "", controller: "GuideEquityController"});
	this.route("/guide/features", {name: "guide.features", title: "", controller: "GuideFeaturesController"});
	this.route("/guide/firing", {name: "guide.firing", title: "", controller: "GuideFiringController"});
	this.route("/guide/first_users", {name: "guide.first_users", title: "", controller: "GuideFirstUsersController"});
	this.route("/guide/first_hires", {name: "guide.first_hires", title: "", controller: "GuideFirstHiresController"});
	this.route("/guide/founders", {name: "guide.founders", title: "", controller: "GuideFoundersController"});
	this.route("/guide/fundraising", {name: "guide.fundraising", title: "", controller: "GuideFundraisingController"});
	this.route("/guide/growth", {name: "guide.growth", title: "", controller: "GuideGrowthController"});
	this.route("/guide/hiring", {name: "guide.hiring", title: "", controller: "GuideHiringController"});
	this.route("/guide/ideas", {name: "guide.ideas", title: "", controller: "GuideIdeasController"});
	this.route("/guide/idea_validation", {name: "guide.idea_validation", title: "", controller: "GuideIdeaValidationController"});
	this.route("/guide/interviews", {name: "guide.interviews", title: "", controller: "GuideInterviewsController"});
	this.route("/guide/investor_meetings", {name: "guide.investor_meetings", title: "", controller: "GuideInvestorMeetingsController"});
	this.route("/guide/late_stage", {name: "guide.late_stage", title: "", controller: "GuideLateStageController"});
	this.route("/guide/legal", {name: "guide.legal", title: "", controller: "GuideLegalController"});
	this.route("/guide/management", {name: "guide.management", title: "", controller: "GuideManagementController"});
	this.route("/guide/market", {name: "guide.market", title: "", controller: "GuideMarketController"});
	this.route("/guide/metrics", {name: "guide.metrics", title: "", controller: "GuideMetricsController"});
	this.route("/guide/mvp", {name: "guide.mvp", title: "", controller: "GuideMvpController"});
	this.route("/guide/philosophy", {name: "guide.philosophy", title: "", controller: "GuidePhilosophyController"});
	this.route("/guide/pitch", {name: "guide.pitch", title: "", controller: "GuidePitchController"});
	this.route("/guide/pr", {name: "guide.pr", title: "", controller: "GuidePrController"});
	this.route("/guide/preparation", {name: "guide.preparation", title: "", controller: "GuidePreparationController"});
	this.route("/guide/priorities", {name: "guide.priorities", title: "", controller: "GuidePrioritiesController"});
	this.route("/guide/product", {name: "guide.product", title: "", controller: "GuideProductController"});
	this.route("/guide/product_market_fit", {name: "guide.product_market_fit", title: "", controller: "GuideProductMarketFitController"});
	this.route("/guide/promotion", {name: "guide.promotion", title: "", controller: "GuidePromotionController"});
	this.route("/guide/sales", {name: "guide.sales", title: "", controller: "GuideSalesController"});
	this.route("/guide/series_a", {name: "guide.series_a", title: "", controller: "GuideSeriesAController"});
	this.route("/guide/user_feedback", {name: "guide.user_feedback", title: "", controller: "GuideUserFeedbackController"});
	this.route("/guide/user_interviews", {name: "guide.user_interviews", title: "", controller: "GuideUserInterviewsController"});
	this.route("/guide/users", {name: "guide.users", title: "", controller: "GuideUsersController"});
	this.route("/guide/vc", {name: "guide.vc", title: "", controller: "GuideVcController"});
	this.route("/guide/vision", {name: "guide.vision", title: "", controller: "GuideVisionController"});
	this.route("/guide/aha_moment", {name: "guide.aha_moment", title: "", controller: "GuideAhaMomentController"});
});
