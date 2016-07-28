'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

angular.module('myHeroApp')
    .controller('MainCtrl',
    function($scope, $http, config) {
        $http({
            method: 'GET',
            url: config.apiURL + '/options',
            headers: {
                'Key': config.apiKey
            }
        }).then(function(response) {
            $scope.myheroOptions = response.data;
        });
        $scope.welcome = "Welcome to MyHero!";
        $scope.voteFunction = function(hero) {
            $http({
                method: 'POST',
                url: config.apiURL + '/vote/' + hero,
                headers: {
                    'Key': config.apiKey
                }
            });
            window.location = "#/results"
        };
    }
);

