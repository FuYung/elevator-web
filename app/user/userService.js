'use strict';

(function () {
    app.factory('userService', ['$resource', 'configuration', function($resource, configuration){
        return $resource(configuration.apiBaseUrl + "/users", {}, {
            getUsers: {
                method: 'GET',
                isArray: true
            }
        })
    }])
})();