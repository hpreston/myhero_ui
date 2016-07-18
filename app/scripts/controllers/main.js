'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

angular.module('myHeroApp')
    .controller('MainCtrl',
    function($scope, $http) {
        $http({
            method: 'GET',
            // url: 'http://gsx-app.green.browndogtech.com/options',
            url: 'http://localhost:5002/options',
            headers: {
                'Key': 'app'
            }
        }).then(function(response) {
            $scope.myheroOptions = response.data;
        });
        $scope.welcome = "Welcome to MyHero!";
        $scope.voteFunction = function(hero) {
            $http({
                method: 'POST',
                // url: 'http://gsx-app.green.browndogtech.com/vote/' + hero,
                url: 'http://localhost:5002/vote/' + hero,
                headers: {
                    'Key': 'app'
                }
            });
            window.location = "#/results"
        };
    }
);

