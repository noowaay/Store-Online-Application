var app = angular.module('myApp');

app.controller('MainStoreController', function($scope, $http) {
	
	$scope.product = {
		name: "",
		model: "",
		year: "",
		producer: "",
		available: ""
	};
	
	/*$scope.productdetail = {
		id="",
		name: "",
		model: "",
		year: "",
		producer: "",
		available: ""
	};*/
	
	$scope.products;
	$scope.name = 'tan';
    
	$scope.getAllData = function() {
		$http.get('http://localhost:9000/fresherangular/product/list')
		.then(onComplete, onError);
	}
	
	function onComplete(response) {
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
	
	$scope.addProduct = function() {
		console.log($scope.product);
		$http.post('http://localhost:9000/fresherangular/product/add', $scope.product)
		.then(addProductSuccess, addProductError);
	}
	
	var addProductSuccess = function(data) {
		console.log(data);
	}
	var addProductError = function() {
		console.log('error');
	}
});

app.directive('myList', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '/fresherangular/views/directives/productList.html'
	};
});
