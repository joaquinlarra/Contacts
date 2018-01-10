var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var babelify = require('babelify');
var less = require('gulp-less');
var path = require('path');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var  uglify = require('gulp-uglify');

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
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {
            includeContent: true,
            sourceRoot: '/src'
        }))
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
    return gulp.src(["assets/index.html",
                     "assets/external/bootstrap/dist/css/bootstrap.css",
                     'assets/images/*.jpg'
        ])
        .pipe(gulp.dest("./dist"));
});

gulp.task("build:default",["copy"],function(){
   console.log("Gulp TASK completed."); 
});