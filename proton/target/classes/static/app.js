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
			}).state('basketball', {
				url : '/basketball',
				templateUrl : 'pages/basketball.html',
				controller : 'controller'
			}).state('football', {
				url : '/football',
				templateUrl : 'pages/football.html',
				controller : 'controller'
			}).state('frisbee', {
				url : '/frisbee',
				templateUrl : 'pages/frisbee.html',
				controller : 'controller'
			}).state('handball', {
				url : '/handball',
				templateUrl : 'pages/handball.html',
				controller : 'controller'
			}).state('beachvolleyball', {
				url : '/beachvolleyball',
				templateUrl : 'pages/bvolleyball.html',
				controller : 'controller'
			}).state('other1', {
				url : '/other1',
				templateUrl : 'pages/other1.html',
				controller : 'controller'
			}).state('other2', {
				url : '/other2',
				templateUrl : 'pages/other2.html',
				controller : 'controller'
			})
			
		});