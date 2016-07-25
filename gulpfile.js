/**
 * Created by may on 7/25/16.
 */
var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var crypto =require('crypto');
var through = require('through');
var rev = require('gulp-rev');
var config = require('./webpack.config');

gulp.task('default', function() {
    return gulp.src('./src/pages/app/example.js',{base : './src/pages/app/'})
        .pipe(webpack(config))
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/assets/js'));
});