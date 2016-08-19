'use strict';

/**
 * Created by hapresto on 7/11/16.
 */

angular.module('myHeroApp')
    .controller('DemosCtrl',
        function($scope, $http, config) {
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

