var app = angular.module('myApp');

app.factory('storeService', function($http) {
	var service = {};
	service.addProduct = function(product) {
		return $http.post('http://localhost:9000/fresherangular/product/add',
				product).then(function(response) {
			console.log(response.data);
			alert('Add success!!');
		}, function() {
			console.log('error');
		});
	}
	return service;
});