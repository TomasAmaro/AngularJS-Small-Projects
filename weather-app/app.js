// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource', 'rzModule']);

//ROUTES

weatherApp.config(function($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/forecast',   {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days',   {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })

})

//SERVICES

weatherApp.service('cityService', function() {

    this.city = 'Fundão,Portugal';

})

// CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function(){
      cityService.city = $scope.city;
    });


}])

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource','$routeParams', function($scope, cityService, $resource, $routeParams) {

  $scope.city = cityService.city;

  $scope.slidervalue = 0

  $scope.days = $scope.slidervalue || $routeParams.days || 3;

  $scope.slider = {
      value: 7,
      options: {
          showSelectionBar: true,
          translate: function(value){
            $scope.days = value;
            console.log($scope.days);
            return value;
          }
      }
  };

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{get: {method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days ,units:"metric", appid: "082c34236a151c1c88b51da077466817"});

    console.log($scope.city);
    console.log($scope.weatherResult);


}])
