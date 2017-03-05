var app = angular.module('myApp');

// product list
app.controller('MainStoreController', function($scope, $http, storeService) {

	$scope.getAllData = function() {
		$http.get('http://localhost:9000/fresherangular/product/list').then(
				onComplete, onError);
	}

	function onComplete(response) {
		$scope.products = response.data;
	}
	function onError(response) {
		$scope.products = 'Error';
	}

	$scope.removeProduct = function(id) {
		storeService.removeProduct1(id);
		$scope.getAllData();
	}
	
	$scope.addProduct = function() {
		$scope.product = {
				id : "",
				name:$scope.model, 
				model:$scope.model, 
				year:$scope.year, 
				price:$scope.price,
				producer:$scope.producer, 
				available:$scope.available
			};
		console.log($scope.product);
		storeService.addProduct1($scope.product);
		$scope.getAllData();
	}
	
	$scope.increaseAvailable = function(id) {
		storeService.incAvailable(id);
		$scope.getAllData();
	}
	
	$scope.decreaseAvailable = function(id) {
		storeService.decAvailable(id);
		$scope.getAllData();
	}
});

// directive
var app = angular.module('myApp');

app.directive('productList', function() {
	return {
		restrict : 'E',
		transclude : true,
		templateUrl : '/fresherangular/views/store/directive/productList.html'
	};
});