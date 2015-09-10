'use strict';

(function () {
    elevatorApp.controller('loginController', ['$rootScope', '$scope', '$state', 'userLogin', function ($rootScope, $scope, $state, userLogin) {
        $rootScope.logined = false;
        $scope.btnLoading = '登录';
        $scope.submitLoginForm = function () {
            $scope.btnLoading = '登录中...';
            $scope.loginMsg = null;
            userLogin.save({
                userName: $scope.login.userName,
                password: $scope.login.loginPassword,
                rememberMe: 1
            }, function (data) {
                consolog("登录成功！" + data.name);
                $scope.btnLoading = '登录成功';
                $state.go('index', {}, {
                    reload: true
                });
            }, function (error) {
                $scope.loginError = true;
                $scope.loginMsg = error.data;
                consolog(error.data);
                $scope.btnLoading = '登录';
            });
        };
    }])
})();