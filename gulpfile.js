var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var babelify = require('babelify');

gulp.task("bundle", function () {
    return browserify({
        entries: "./assets/react/main.jsx",
        debug: true,
        transform: [
            babelify.configure({
                presets: ['es2015', 'react'],
                plugins: ["transform-decorators-legacy", "transform-class-properties"]
            })
        ]
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("./dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["assets/index.html", "assets/external/bootstrap/dist/css/bootstrap.css"])
        .pipe(gulp.dest("./dist"));
});

gulp.task("build:default",["copy"],function(){
   console.log("Gulp TASK completed."); 
});