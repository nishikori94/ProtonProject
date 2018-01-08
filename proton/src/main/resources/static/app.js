'use strict';

angular.module('routerApp', [ 'ui.router', 'services', 'controllers' ]).config(
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider

			.state('home', {
				url : '/home',
				templateUrl : 'pages/home.html',
				controller : 'controller'
			}).state('products', {
				url : '/products',
				templateUrl : 'pages/products.html',
				controller : 'controller'
			}).state('info', {
				url : '/info',
				templateUrl : 'pages/impressum.html',
				controller : 'controller'
			})
			.state('basketball', {
				url : '/basketball',
				templateUrl : 'pages/basketball.html',
				controller : 'controller'
			})
		});