var services = angular.module('services', [ 'ngResource', 'ngSanitize' ]);

var baseUrl = 'http://localhost\\:8080';

services.service('service', [ '$http', function($http) {
	
	this.sendMail = function(message) {
		return $http.post("/controller/sendMail", message);
	}

	
} ]);