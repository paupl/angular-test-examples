/**Plugins */
var gulp = require('gulp')
    webserver = require('gulp-webserver');

/**Configuration */
var configuration = {};

configuration.server = {};
configuration.server.port = 1337;
configuration.server.host = '0.0.0.0',
configuration.server.fallback = 'index.html',
configuration.server.livereload = true,
configuration.server.proxies = [{
    source: '/api', target: 'http://' + configuration.server.host + ':' + configuration.server.port + '/api'
}];

configuration.applicationJavascript = './**/*.js,';
configuration.applicationStylesheets = '';
configuration.angularTemplates = 'app/**/*.html';
configuration.buildParent = './dist';
configuration.buildApplicationJavascript = '/js/';
configuration.buildVendorJavascript = '/js/vendor';

/** Tasks */

//Start a server
gulp.task('serve', function() {

    gulp.src('./')
      .pipe(webserver(configuration.server));

});
