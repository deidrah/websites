const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
        }))
    .pipe(gulp.dest('css'))
});

gulp.task('default', function() {
    gulp.watch(['scss/*.scss'], ['sass'])
});