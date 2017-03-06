(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.directive('cafHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'caf-header.html'
		};
	});

	app.directive('cafBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'caf-body.html'
		};
	});

	app.directive('cafFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'caf-footer.html'
		};
	});
})();
