var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var babelify = require('babelify');

gulp.task("bundle", function () {
    return browserify({
        entries: "./assets/main.jsx",
        debug: true,
        transform: [
            babelify.configure({
                presets: ['es2015', 'react']
            })
        ]
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("./dist"))
});

// ,"app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"
gulp.task("copy", ["bundle"], function () {
    return gulp.src(["assets/index.html"])
        .pipe(gulp.dest("./dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});