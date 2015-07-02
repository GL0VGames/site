var app = angular.module("site", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "pages/home.html",
			controller: "homeController"
		})
		.when("/about", {
			templateUrl: "pages/about.html",
			controller: "aboutController"
		})
		.when("/portfolio", {
			templateUrl: "pages/portfolio.html",
			controller: "portfolioController"
		});
		
	$locationProvider.html5Mode(true);
		
});

app.controller("mainController", ["$scope", "$location", function ($scope) {
	$scope.data = "Main!";
}]);

app.controller("homeController", ["$scope", "$location", function ($scope) {
	$scope.data1 = "Home!";
}]);

app.controller("aboutController", ["$scope", "$location", function ($scope) {
	$scope.data1 = "About!";
}]);

app.controller("portfolioController", ["$scope", "$location", function ($scope) {
	$scope.data1 = "Portfolio!";
}]);