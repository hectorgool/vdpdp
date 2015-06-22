(function(){

  'use strict';


  var dependencies = ['ngResource', 'ngRoute', 'elasticsearch'];

  var app = angular.module('myApp', dependencies);
  app.config( function( $routeProvider ){   

    $routeProvider.when('/', {
      templateUrl: '/static/partials/view1.html',
      controller: 'ElasticSearchCtrl'
    });   

    $routeProvider.when('/signup', {
      templateUrl: '/static/partials/view2.html'
    });

    $routeProvider.otherwise({
      templateUrl:'/static/partials/404.html'
    });

  }); 

})();
