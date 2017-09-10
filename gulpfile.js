/* File: gulpfile.js */
// npm install --save-dev
// first run server on port 3000:
// $ http-server -p 3000
// $ gulp

'use strict';

// grab our gulp packages
var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    watch = require('gulp-watch'),
    haml  = require('gulp-ruby-haml'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


// gulp sass | compiles sass to destination folder
gulp.task('sass', function() {
  gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

// gulp haml | compiles haml to destination folder
gulp.task('haml', function() {
  gulp.src('index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});


// gulp watch | runs browser sync
gulp.task('watch', function() {
  browserSync.init({
    server: './'
  });

  // watches for changes on scss and html files
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch('./*.haml', ['haml']);
  gulp.watch([
    './css/*.scss',
    './*.html',
    './*.haml',
    './js/*.js'
    ]).on('change', reload);
});




// gulp | default runs sass and watch
gulp.task('default', ['sass', 'haml', 'watch']);
