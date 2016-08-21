'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

angular.module('myHeroApp')
    .controller('DemosCtrl',
        function($scope, $http, config) {
            $http(
                {
                    method: 'GET',
                    url: config.apiTropo + '/health'
                }
            ).then(function (response) {
                console.log("Tropo Status: " + response.status);
                $scope.tropodemo = response.status;
                }

            );
            $http(
                {
                    method: 'GET',
                    url: config.apiSpark + '/health'
                }
            ).then(function (response) {
                    console.log("Spark Status: " + response.status);
                    $scope.sparkdemo = response.status;
                }

            );


            $scope.sparkmsg = function() {
                $http({
                    method: 'GET',
                    url: config.apiSpark + '/hello/' + $scope.email
                });
                window.location = "#/results";
            };
            $scope.tropomsg = function() {
                $http({
                    method: 'GET',
                    url: config.apiTropo + '/hello/' + $scope.mobilenumber
                });
                window.location = "#/results";
            };
        }
    );

