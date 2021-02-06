const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('purrlove/scss/base.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
        }))
    .pipe(gulp.dest('purrlove/css'))
});

gulp.task('default', function() {
    gulp.watch(['purrlove/scss/*.scss'], ['sass'])
});