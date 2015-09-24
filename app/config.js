/*
 * 系统配置文件样例
 * 请将文件名修改为config.js，并完善相关配置
 * 网址末尾不要添加 / 符号
 */
(function () {
    app.constant('configuration', {
            apiBaseUrl: 'http://localhost:8040/resty-elevator/api'
        })
        .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
                // lazy controller, directive and service
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;
            }
        ])
})();
