/**
 * Created by Administrator on 2018/2/1 0001.
 */
module.exports = (function(){
    var homeModule = angular.module('homeModule');
    homeModule.directive('myForm',function(){
        return {
            restrict: 'AE',
            templateUrl: './webapp/business/home/view/myform-directive.tpl.html',
            scope: {
                bindFnA: '=',
                bindFnB: '&',
                bindFnC: '@'
            },
            require: '^ngModel',
            controller: function($scope){
                $scope.test = "sd";
            },
            link: function($scope,ele,attr,ctrl){
                
                ele.css("background-color","red");
            }
        }
    });
})();