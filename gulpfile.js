var karma = require('gulp-karma');

var testFiles = [
	'code/module.js',
	'code/*.js',
	'spec/*.js'
];

gulp.task('test', function(){
	
	return gulp.src(testFiles)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err){
			throw err;
		});
	
});

gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});	