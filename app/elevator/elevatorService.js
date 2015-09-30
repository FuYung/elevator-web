'use strict';

(function () {
    app.factory('elevatorService', ['$resource', 'configuration', function($resource, configuration){
        return $resource(configuration.apiBaseUrl + "/elevators", {}, {
            getElevators: {
                method: 'GET',
                isArray: true
            }
        })
    }])
})();