var app = angular.module("site", ["ngRoute"]);

app.config(function ($routeProvider) {
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