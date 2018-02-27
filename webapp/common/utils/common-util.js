/**
 * Created by Administrator on 2018/2/24 0024.
 */
/**
 *  用来对目标数组去除重复元素项
 * @param arr
 * @returns {Array}
 */
function delRepeat(arr){
    var newArray=[];
    arr.forEach(function (value) {
        if(newArray.indexOf(value)==-1){
            newArray.push(value);
        }
    });
    return newArray;
}
/**
 *  用来对url链接进行解析
 * @param url
 * @returns {{}}
 */
function parseUrl(url){
    var obj = {};
    var urlStr = url.slice(url.indexOf("?")+1,url.length);
    var arr = urlStr.split("&");
    arr.forEach(function(value){
        var tempArr = value.split("=");
        obj[tempArr[0]] = Number(tempArr[1]);
    });
    return obj;
}
