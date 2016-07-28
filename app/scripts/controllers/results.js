'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

angular.module('myHeroApp')
    .controller('ResultsCtrl',
        function($scope, $http, config) {
            $http({
                method: 'GET',
                url: config.apiURL + '/v2/results',
                headers: {
                    'Key': config.apiKey
                }
            }).then(function(response) {
                $scope.myheroResults = response.data;
                $scope.totalVotes = response.headers("Total Votes");
            });
        }
    );

