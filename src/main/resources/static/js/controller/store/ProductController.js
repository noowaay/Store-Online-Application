var app = angular.module('myApp');

app.controller('ProductController', function($scope, $http, $routeParams) {
	$scope.productId = $routeParams.productId;
	$scope.productDetail = {
		id : "",
		name : "",
		model : "",
		year : "",
		producer : "",
		available : ""
	};
	$http.get('http://localhost:9000/fresherangular/product/get/' + $scope.productId).then(
		onComplete, onError);
	
	function onComplete(response) {
		$scope.productDetail = response.data;
	}
	function onError(response) {
		$scope.productDetail = 'Error';
	}
});