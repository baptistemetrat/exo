(function() {
    'use strict';

    var app = angular.module('cnaf-route', ['ui.router']);

    app.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
		$locationProvider
			.html5Mode(true);

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'cnaf-route/tmpl/home.html'
        };

        var productState = {
            name: 'product',
            url: '/product',
            templateUrl: 'cnaf-route/tmpl/product.html'
        };

        var serviceState = {
            name: 'service',
            url: '/service',
            templateUrl: 'cnaf-route/tmpl/service.html'
        };

        var contactState = {
            name: 'contact',
            url: '/contact',
            templateUrl: 'cnaf-route/tmpl/contact.html'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(productState);
        $stateProvider.state(serviceState);
        $stateProvider.state(contactState);
    }]);

})();
