
//======================================================
// OVERVIEW
//======================================================

// gulp compiles sass, runs autoprefixer, concats js, watches 
// for changes and serves with livereload... simple
 
// DISCLAIMER

// clearly, this process does not concatenate/minify css or js
// this is meant for display purposes only 
// and would not be the case on a production site

//======================================================
// SETUP
//======================================================

// gulp
var gulp = require('gulp'); 

// plugins
var sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

// paths
var app = './_app',
    dist = './_dist',
    css = '/css',
    js = '/js';

//======================================================
// PROCESS
//======================================================

// compile scss and autoprefix
gulp.task('css', function() {
    gulp.src(app + css + '/*.scss')
        .pipe(sass())
        .pipe(prefix(["last 2 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
        .pipe(gulp.dest(dist + css))
        .pipe(connect.reload());
});

// concat js
gulp.task('js', function() {
    gulp.src(app + js + '/*.js')
        .pipe(gulp.dest(dist + js))
        .pipe(connect.reload());
});

// move other files
gulp.task('move', function () {
    gulp.src(app + '/*.{txt,html,ico}')
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
    gulp.src(app + css + '/fonts/*')
        .pipe(gulp.dest(dist + css + '/fonts'))
        .pipe(connect.reload());
});

//======================================================
// SERVE
//======================================================

// watch
gulp.task('watch', function() {
    gulp.watch(app + css + '/*.scss', ['css']);
    gulp.watch(app + js + '/*.js', ['js']);
    gulp.watch(app + '/*.{txt,html,ico}', ['move']);
});

// serve
gulp.task('connect', function() {
  connect.server({
    root: dist,
    port: 9000,
    livereload: true
  });
});

// default
gulp.task('default', [ 'css', 'js', 'move', 'watch', 'connect' ]);