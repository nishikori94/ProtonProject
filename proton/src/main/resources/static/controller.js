var app = angular.module('controllers', [ 'ngSanitize' ]);

app
		.controller(
				'controller',
				[
						'$scope',
						'$rootScope',
						'service',
						'$location',
						'$window',
						function($scope, $rootScope, service, $location,
								$window) {

							$scope.sendMail = function() {
								service.sendMail($scope.message).then(
										function(response) {
											if (response.data === "OK") {
												$window.alert("Email sent!");
											} else {
												$window.alert("Enter the correct email!");
											}
										});
							}


						} ]);