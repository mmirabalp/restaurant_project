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
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// gulp sass | compiles sass to destination folder
gulp.task('sass', function() {
  gulp.src('styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles'));
});

// gulp watch | runs browser sync
gulp.task('watch', function() {
  browserSync.init({
    server: './'
  });

  // watches for changes on scss and html files
  gulp.watch('styles/*.scss', ['sass']);
  gulp.watch(['styles/*.scss', './*.html']).on('change', reload);
});

// gulp | default runs sass and watch
gulp.task('default', ['sass', 'watch']);
