/**
 * Created by hapresto on 7/12/16.
 */

angular.module('myHeroApp', [
        'ngRoute',
        'config',
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


angular.module('myHeroApp')
    .controller('MainCtrl',
        function($scope, $http) {
            $http({
                method: 'GET',
                url: 'http://gsx-app.green.browndogtech.com/options',
                headers: {
                    'Key': 'SecureApp'
                }
            }).then(function(response) {
                $scope.myheroOptions = response.data;
            });
            $scope.welcome = "Welcome to MyHero!";
            $scope.voteFunction = function(hero) {
                $http({
                    method: 'POST',
                    url: 'http://gsx-app.green.browndogtech.com/vote/' + hero,
                    headers: {
                        'Key': 'SecureApp'
                    }
                });
            };
        }
    );

