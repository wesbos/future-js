var gulp = require('gulp');
var p = require('gulp-load-plugins')();

var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Start the server
gulp.task('browser-sync', function() {
    browserSync({
        open : true,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('slides',function () {
  gulp.src('index.jade')
    .pipe(p.plumber())
    .pipe(p.jade())
    .pipe(gulp.dest('./'))
    .pipe(reload({stream:true}))
});


gulp.task('styles',function() {
  gulp.src('./styles.styl')
    .pipe(p.stylus())
    .pipe(p.autoprefixer())
    .pipe(gulp.dest('./'))
    .pipe(reload({stream:true}))
});


gulp.task('default', ['slides','styles','browser-sync'] ,function() {
  gulp.watch('./**/*.jade',['slides']);
  gulp.watch('./**/*.styl',['styles']);
});
