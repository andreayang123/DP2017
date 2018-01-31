/*通过立即执行函数表达式*/
module.exports = (function(){
    require("./webapp/common/css/common.css");
    require('./webapp/business/home/homeModule');
    require('./webapp/business/user.login/loginModule');
    angular.module('appModule',['homeModule','loginModule']);
})();


