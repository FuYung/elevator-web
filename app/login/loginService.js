'use strict';

(function () {
    app.factory('userLogin', ['$resource', 'configuration', function ($resource, configuration) {
        return $resource(configuration.apiBaseUrl + "/session", {}, {
            save: {
                method: 'POST'
            }
        });
    }])
})();