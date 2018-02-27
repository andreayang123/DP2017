/*通过立即执行函数表达式*/
module.exports = (function () {
    require("./webapp/common/css/common.css");
    require('./webapp/business/home/homeModule');
    require('./webapp/business/user.login/loginModule');
    angular.module('appModule', ['homeModule', 'loginModule']);
    var module = angular.module('appModule');
    module.config(function (appServiceProvider,$provide) {
        $provide.decorator('appService',function($delegate){
            $delegate.sb =function(){
                console.log('sb');
            }
            return $delegate;
        });

    });
    module.provider('appService', {
        $get: function () {
            function _add(a, b) {
                return a + b;
            }

            function _sub(a,b) {
                return a - b;
            }

            return {
                add: _add,
                sub: _sub
            }
        }
    });
    module.controller('appController', ['$scope', '$sce', 'appService', function ($scope, $sce, appService) {
        appService.sb();
    }]);

    module.constant("userConst",{
        MAX_USER_NUM: 200,
        MIN_USER_NUM: 10
    });
})();






