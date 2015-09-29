'use strict';

(function () {
    app.factory('brandService', ['$resource', 'configuration', function ($resource, configuration) {
        return $resource(configuration.apiBaseUrl + "/brands", {}, {
            getBrands: {
                method: 'GET',
                isArray: true
            }
        })
    }])
})();