var test=(function(){
    var n1=function(){
        // ...
    }
    var n2=function(){
        // ...
    }
    return{
        n1:n1,
        n2:n2
    };
})();


var test1=(function (mod) {

    mod.n3=function () {
    //    ....
    }
    return mod;
})(test);