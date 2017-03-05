var app = angular.module('myApp');

app.factory('storeService', function($http) {
	var service = {};
	service.addProduct1 = function(product) {
		return $http.post('http://localhost:9000/fresherangular/product/add',
			product).then(function(response) {
				console.log(response.data);
			}, function() {
				console.log('error');
			});
	}
	service.removeProduct1 = function(id) {
		var check = confirm("Delete! Are you sure?");
		if (check) {
			return $http.get('http://localhost:9000/fresherangular/product/remove/' + id)
			.then(function() {
				
				
				console.log("Remove product with productId = " + id);
			}, function() {
				console.log('error');
			});
		}
		return;
	}

	service.incAvailable = function(id) {
		return $http.get(
			'http://localhost:9000/fresherangular/product/increase/' + id)
			.then(function() {
				console.log("Increase Available of productId = " + id);
			}, function() {
				console.log('error');
			});
	}

	service.decAvailable = function(id) {
		return $http.get(
			'http://localhost:9000/fresherangular/product/decrease/' + id)
			.then(function() {
				console.log("Decrease Available of productId = " + id);
			}, function() {
				console.log('error');
			});
	}

	return service;
});