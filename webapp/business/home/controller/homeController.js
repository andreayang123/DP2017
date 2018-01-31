module.exports = (function(){
    var homeModule = angular.module('homeModule');
    homeModule.controller('homeController',['$scope',function($scope){
        $scope.name = "jack";
    }]);
})();




