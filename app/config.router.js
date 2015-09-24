'use strict';

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: '../home/home.html',
            ncyBreadcrumb: {
                label: '首页'
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            ncyBreadcrumb: {
                label: '登录'
            }
        })
}]);