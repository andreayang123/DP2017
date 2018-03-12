// module.exports = (function(){
//     var homeModule = angular.module('homeModule');
//     homeModule.controller('homeController',['$scope',function($scope){
//         $scope.name = "jack";
//     }]);
// })();


module.export=(function () {
    var homeModule=angular.module('homeModule');
    homeModule.controller("homeController",["$scope",function ($scope) {
        $scope.name=yangyingying;
        $scope.getName=function () {
            alert(name);
        }
    }]);
})();



