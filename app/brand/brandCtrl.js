'use strict';

(function () {
    app.controller('brandCtrl', ['$scope', 'brandService', function ($scope, brandService) {
        brandService.getBrands({}, function (data) {
            consolog(data);
            $scope.brandList = data;
        }, function (error) {
            consolog(error);
        });
    }])
})();