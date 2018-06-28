var xliff2json = require('./index.js');
var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('xliff2json', function () {
    return gulp.src('./to-translate/**/*.xlf')
        .pipe(xliff2json())
        .pipe(rename(function (opt) {
            opt.basename = opt.basename.replace(/^web_texts_/, '');
            return opt;
        }))
        .pipe(gulp.dest('./output'))
})
