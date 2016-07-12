'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

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

