'use strict';

/**
 * @ngdoc function
 * @name quieroquieroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quieroquieroApp
 */
angular.module('quieroquieroApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase( 'https://quieroquiero.firebaseio.com/' );
    ref.onAuth(function(authData) {
      if (authData !== null) {
        $scope.user = authData.facebook;
          console.log( $scope.user );
        };
    });
    ref.authWithOAuthRedirect("facebook", function(error, authData) { /* Redirect */ });
  });
