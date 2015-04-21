'use strict';
angular.module('starter.services', [])

// let's create a re-usable factory that generates the $firebaseAuth instance
.factory('Auth', ['$firebaseAuth', function($firebaseAuth) {
  var ref = new Firebase('https://cloakit.firebaseio.com/');
  return $firebaseAuth(ref);
}]);