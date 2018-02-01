/**
 * Created by Administrator on 2018/2/1 0001.
 */
//导入gulp模块
var gulp = require("gulp");
var clean = require("gulp-clean");
var imagemin = require("gulp-imagemin");
var jsmin = require("gulp-uglify");
var sass = require("gulp-sass");
var concatJs = require("gulp-concat");

//拷贝文件
gulp.task("copyFile",function(){
    gulp.src("./index.html")
        .pipe(gulp.dest("destDir"));
    console.log("copyFile task be execute");
});

//删除dist文件夹及其文件
gulp.task("removeDistDir",function(){
    //配置read为false，gulp就不会去读取dist文件夹下面文件的内容，提高执行效率
    gulp.src("./dist",{read: false})
        .pipe(clean());
        console.log("dist文件清除完毕");
});

//压缩图片
gulp.task("compressImage",function(){
    gulp.src("./webapp/resources/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/resource/images"));
        console.log("图片已完成压缩");
});

//压缩JS文件
gulp.task("compileJs",function(){
    gulp.src("./dist/script/*.js")
        .pipe(jsmin())
        .pipe(gulp.dest("./dist/script/compress"));
        console.log("压缩JS文件完成");
});

//编译Sass文件
gulp.task("compileSass",function(){
    gulp.src("./webapp/common/sass/*.scss")
        .pipe(sass().on("error",sass.logError))
        .pipe(gulp.dest("./testcss/css"));
});

//合并代码
/*gulp.task("concatJs",function(){
    gulp.src("./webapp/business/home/!*.js")
        .pipe(concatJs("concatafter.js"))
        .pipe(jsmin())
        .pipe(gulp.dest("./concatjs"));
});*/

//前端代码热更新
/*gulp.task("watch",function(){
    gulp.watch("js",["js"]);
    gulp.watch("images",["imageMIn"]);
    gulp.watch("sass",[]);
    gulp.watch("html",[]);
});*/
//默认任务
gulp.task("default",["compressImage","compileJs"],function(){
    console.log("gulp 任务执行完成 -_-！");
});


