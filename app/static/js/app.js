// Your JavaScript Code here
/* global angular */
var app = angular.module('myApp', []);
app.controller('imageApp', function($scope, $http) {


     //$scope.newfolder = [];
     
      $http.get('/api/thumbnails/')
    .then(function(response) {
     console.log(response.data.newfolder)
        $scope.newfolder = response.data.thumbnails;
        
        
    });
});