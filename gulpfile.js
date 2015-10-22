var gulp = require('gulp');

gulp.task('default', function () {
    // default task
});


var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});