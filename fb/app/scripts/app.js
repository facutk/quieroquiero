'use strict';

/**
 * @ngdoc overview
 * @name quieroquieroApp
 * @description
 * # quieroquieroApp
 *
 * Main module of the application.
 */
angular
  .module('quieroquieroApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('landing', {
        url: '/landing',
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      });

  });
