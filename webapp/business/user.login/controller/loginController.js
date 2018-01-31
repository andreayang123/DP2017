/**
 * Created by Administrator on 2018/1/31 0031.
 */
module.exports=(function () {
    var loginModule = angular.module('loginModule');
    loginModule.controller('loginController',['$scope',function($scope) {
        $scope.testName='yangying';
    }]);
})();
