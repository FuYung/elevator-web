'use strict';

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'home/home.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        })
        .state('index.brand', {
            url: '/brand',
            templateUrl: 'brand/brand.html'
        })

        .state('index.elevator', {
            url: '/elevator',
            templateUrl: 'elevator/elevator.html'
        })

        .state('index.user', {
            url: '/user',
            templateUrl: 'user/user.html'
        })
        .state('index.docs', {
            url: '/docs',
            templateUrl: 'docs.html'
        })
        .state('signin', {
            url: '/signin',
            templateUrl: 'login/login.html'
        })

        .state('index.uiTree', {
            url: '/ui_tree',
            templateUrl: 'other/ui_tree.html'
        })
        .state('index.uiChart', {
            url: '/ui_chart',
            templateUrl: 'other/ui_chart.html'
        })
        .state('index.uiWidgets', {
            url: '/ui_widgets',
            templateUrl: 'other/ui_widgets.html'
        })
}]);