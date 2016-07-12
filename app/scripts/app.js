'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

/**
 * @ngdoc overview
 * @name MyHero-UI
 * @description
 * # MyHero-UI
 *
 * Main module of the application.
 */

angular.module('myHeroApp', [
    'ngRoute',
    'ngResource'
])
.config(function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsCtrl',
            controllerAs: 'results'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .otherwise({
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'MainCtrl'
        })
});

