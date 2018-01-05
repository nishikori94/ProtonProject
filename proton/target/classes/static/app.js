'use strict';

angular.module('routerApp', [ 'ui.router', 'services', 'controllers' ]).config(
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider

			.state('home', {
				url : '/home',
				templateUrl : 'pages/home.html',
				controller : 'controller'
			}).state('home.slider', {
				url : '/slider',
				templateUrl : 'pages/slider.html',
				controller : 'controller'
			})
		});