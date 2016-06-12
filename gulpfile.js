var gulp = require('gulp');
var xslt = require('gulp-xslt');
gulp.task('xsl', function() {
    gulp.src('src/*.xml')
        .pipe(xslt('template.xsl', {
            someVariable: '"value"',
            orAnotherVariable: '/with/xpath[@value]'
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  gulp.watch(['src/*.xml', 'template.xsl'], ['xsl']);
});
