var app = angular.module("site", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateURL: "pages/home.html",
			controller: "mainController"
		})
		
});

app.controller("mainController", function ($scope) {
	
});