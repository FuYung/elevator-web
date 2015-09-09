'use strict';

/**
 * elevator app 设置
 */
var elevatorApp = angular.module('elevatorApp', ['ngResource', 'ui.router'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('index', {
                    url: '/index',
                    templateUrl: '../index.html',
                    ncyBreadcrumb: {
                        label: '首页'
                    }
                })
                .state('login', {
                    url: '/',
                    templateUrl: 'login/login.html',
                    controller: 'loginCtrl',
                    ncyBreadcrumb: {
                        label: '登录'
                    }
                })
        }])
    ;

var consolog = function (msg) {
    console.log(msg);
};