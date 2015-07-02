var app = angular.module("site", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateURL: "pages/home.html",
			controller: "homeController"
		})
		.when("/about", {
			templateURL: "pages/about.html",
			controller: "aboutController"
		})
		.when("/portfolio", {
			templateURL: "pages/portfolio.html",
			controller: "portfolioController"
		});
		
});

app.controller("mainController", function ($scope) {
	
});

app.controller("homeController", function ($scope) {
	
});

app.controller("aboutController", function ($scope) {
	
});

app.controller("portfolioController", function ($scope) {
	
});