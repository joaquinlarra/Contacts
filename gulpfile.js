var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var babelify = require('babelify');
var less = require('gulp-less');
var path = require('path');
var clean = require('gulp-clean');

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

gulp.task('less', function () {
    return gulp.src(["assets/css/*.less", "assets/external/open-iconic/font/css/open-iconic.less"])
        .pipe(less(
            {
                paths: [ path.join(__dirname, 'fonts') ]
            }
        ))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

gulp.task("copy-fonts", function () {
    return gulp.src(["assets/external/open-iconic/font/fonts/*.*"])
        .pipe(gulp.dest("./dist/fonts"));
});

gulp.task("copy", ["clean", "copy-fonts", "less", "bundle"], function () {
    return gulp.src(["assets/index.html", "assets/external/bootstrap/dist/css/bootstrap.css", 'assets/images/*.jpg', 'assets/external/open-iconic/font/css/fonts/*'])
        .pipe(gulp.dest("./dist"));
});

gulp.task("build:default",["copy"],function(){
   console.log("Gulp TASK completed."); 
});