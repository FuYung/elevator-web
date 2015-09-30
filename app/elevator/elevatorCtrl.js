'use strict';

(function () {
    app.controller('elevatorCtrl', ['$scope', 'elevatorService', function ($scope, elevatorService) {
        elevatorService.getElevators({}, function (data) {
            $scope.elevatorList = data;
        }, function (error) {
            consolog(error);
        })
    }])
})();