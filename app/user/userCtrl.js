'use strict';

(function () {
    app.controller('userCtrl', ['$scope', 'userService', function ($scope, userService) {
        userService.getUsers({}, function (data) {
            $scope.userList = data;
        }, function (error) {
            consolog(error);
        })
    }])
})();