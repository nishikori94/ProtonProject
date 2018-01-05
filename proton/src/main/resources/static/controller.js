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
											if (response.status === 200) {
												$window.alert("Email sent!");
											} else {
												$window.alert("Enter the correct email!");
											}
										});
							}

							$rootScope.slideIndex = 1;
							showSlides($rootScope.slideIndex);

							function plusSlides(n) {
								showSlides($rootScope.slideIndex += n);
							}

							function currentSlide(n) {
								showSlides($rootScope.slideIndex = n);
							}

							function showSlides(n) {
								$scope.i;
								$scope.slides = document
										.getElementsByClassName("mySlides");
								$scope.dots = document
										.getElementsByClassName("dot");
								if (n > $scope.slides.length) {
									$rootScope.slideIndex = 1
								}
								if (n < 1) {
									$rootScope.slideIndex = $scope.slides.length
								}
								for (i = 0; i < $scope.slides.length; i++) {
									$scope.slides[i].style.display = "none";
								}
								for (i = 0; i < $scope.dots.length; i++) {
									$scope.dots[i].className = $scope.dots[i].className
											.replace(" active", "");
								}
								$scope.slides[$rootScope.slideIndex - 1].style.display = "block";
								$scope.dots[$rootScope.slideIndex - 1].className += " active";
							}

						} ]);