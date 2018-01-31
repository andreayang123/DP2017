/*
$(document).ready(function(){
    //ԭ��js:5�д���
    /!*var eleObj = document.getElementsByTagName("input");
    var info = document.getElementById("info");
    eleObj[0].addEventListener('keyup',function(){
        info.innerHTML = eleObj[0].value;
    });*!/

    //jquery:2�д���
    /!*$("#test").keyup(function(){
        $("#info").text($(this).val());
    });*!/
    var test = {
        name: "sdfds",
        age: 15,
        isMarried: true
    }
    console.log(JSON.stringify(test));
    console.log(JSON.parse(JSON.stringify(test)));
});*/
'use strict';
var test = {
    name: 'sb'
}

var val = (function(){
    var innerName = 'jack';
    console.log(test.name);
    return 113;
})();

console.log(val);



