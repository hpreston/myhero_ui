'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

angular.module('myHeroApp')
    .controller('ResultsCtrl',
        function($scope, $http) {
            $http({
                method: 'GET',
                // url: 'http://gsx-app.green.browndogtech.com/options',
                url: 'http://localhost:5002/v2/results',
                headers: {
                    'Key': 'app'
                }
            }).then(function(response) {
                $scope.myheroResults = response.data;
                $scope.totalVotes = response.headers("Total Votes");
            });
        }
    );

