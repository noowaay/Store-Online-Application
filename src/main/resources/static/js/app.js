var app = angular.module('myApp', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/users',{
            templateUrl: '/fresherangular/views/users.html',
            controller: 'usersController'
        })
        .when('/roles',{
            templateUrl: '/fresherangular/views/roles.html',
            controller: 'rolesController'
        })
        //Github service example
        .when('/main', {
            templateUrl: "/fresherangular/views/github/main.html",
            controller: "MainController"
          })
          .when("/user/:username", {
            templateUrl: "/fresherangular/views/github/user.html",
            controller: "UserController"
          })
          .when("/repo/:username/:reponame", {
            templateUrl: "/fresherangular/views/github/repo.html",
            controller: "RepoController"
          })
          //Start Store App
          .when("/mainstore", {
        	  templateUrl: "/fresherangular/views/store/mainstore.html",
              controller: "MainStoreController"
          })
          .when("/productdetail/:productId", {
        	  templateUrl: "/fresherangular/views/store/productdetail.html",
              controller: "ProductController"
          })
          //End Github Service example
        .otherwise(
            { redirectTo: '/'}
        );
});

