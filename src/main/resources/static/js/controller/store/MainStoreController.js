var app = angular.module('myApp');

// product list
app.controller('MainStoreController', function($scope, $http, storeService) {

	$scope.product = {
		id : "",
		name : "",
		model : "",
		year : "",
		producer : "",
		available : ""
	};

	$scope.products;

	$scope.getAllData = function() {
		$http.get('http://localhost:9000/fresherangular/product/list').then(
				onComplete, onError);
	}

	function onComplete(response) {
		$scope.products = {};
		$scope.products = response.data;
	}
	function onError(response) {
		$scope.products = 'Error';
	}

	$scope.changeAvailable = function(product, temp) {
		if (temp == 'inc')
			product.available = parseInt(product.available) + 1;
		if (temp == 'desc' && product.available > 0)
			product.available = parseInt(product.available) - 1;
	}

	$scope.remove = function(product) {
		var check = confirm("Delete! Are you sure?");
		if (check)
			$scope.products.splice($scope.products.indexOf(product), 1);
	}
	
	$scope.addProduct1 = function() {
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
		storeService.addProduct($scope.product);
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