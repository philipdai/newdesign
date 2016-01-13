var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');
var _ = require('lodash');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plugins = require('gulp-load-plugins')();
var inject = require('gulp-inject');
var series = require('stream-series');
var del = require('del');
var debug = require('gulp-debug');

var config = {
  entryFile: './src/app/app.js',
  outputDir: './dist/',
  outputFile: 'app.js'
};

var src = {
	html: 'src/**/*.html',
	jslibs: 'src/jslibs/**',
	csslibs: 'src/csslibs/**',
	css:'src/css/**',
	scripts: {
		all: 'src/scripts/**/*.js',
		app: 'src/scripts/app.js'
	},
	newhtml: 'src/**/*.html',
	newscripts: {
		all: 'src/app/**/*.js',
		app: 'src/app/app.js'
	},
	components: 'src/app/components',
	images: 'src/images/**/*.*'
};
var dist = 'dist/';
var out = {
	jslibs: dist + 'jslibs/',
	csslibs: dist + 'csslibs/',
	css: dist + 'css/',
	scripts: {
		file: 'app.min.js',
		folder: dist + 'scripts/'
	},
	images: dist + 'images/'
};

//Tasks list
gulp.task('html', function() {
	return gulp.src(src.newhtml)
		.pipe(gulp.dest(dist))
		.pipe(plugins.connect.reload());
});

gulp.task('images', function() {
	return gulp.src(src.images)
		.pipe(gulp.dest(out.images))
		.pipe(plugins.connect.reload());
});

gulp.task('css', function() {
	return gulp.src(src.css)
		.pipe(gulp.dest(out.css))
		.pipe(plugins.connect.reload());
});

/* The jshint task runs jshint with ES6 support. */
gulp.task('jshint', function() {
	return gulp.src(src.newscripts.all)
		.pipe(plugins.jshint({
			esnext: true // Enable ES6 support
		}))
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});



gulp.task('jslibs', function() {
	/* In a real project you of course would use npm or bower to manage libraries. */
	return gulp.src(src.jslibs)
		.pipe(gulp.dest(out.jslibs))
		.pipe(plugins.connect.reload());
});

gulp.task('csslibs', function() {
	/* In a real project you of course would use npm or bower to manage libraries. */
	return gulp.src(src.csslibs)
		.pipe(gulp.dest(out.csslibs))
		.pipe(plugins.connect.reload());
});

// clean the output directory
gulp.task('clean', function(cb){
	rimraf(config.outputDir, cb);
	//del(['dist'], cb);
});

var bundler;

function getBundler() {
  if (!bundler) {
    bundler = watchify(browserify(config.entryFile, _.extend({ debug: true }, watchify.args)));
  }
  return bundler
		.on('error', function(e) {
			gutil.log(e);
		});
}

function bundle() {
  return getBundler()
    .transform(babelify.configure({
      "presets": ["es2015"]
    }))
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err); })
    .pipe(source(config.outputFile))
    .pipe(gulp.dest(config.outputDir + '/app'))
    .pipe(reload({ stream: true }));
}

gulp.task('build-persistent', [], function() {
  return bundle();
});

gulp.task('build', ['build-persistent'], function() {
  process.exit(0);
});

gulp.task('watch', ['images', 'html', 'jslibs', 'csslibs', 'css', 'build-persistent', 'index' ], function() {

  browserSync({
    server: {
      baseDir: './dist'
    }
  });

  getBundler().on('update', function() {
    gulp.start('build-persistent')
  });
});

// WEB SERVER
gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});


gulp.task('index', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:


	var csslibStream = gulp.src(['src/csslibs/**/*.css'], {read: false});
	var cssStream = gulp.src(['src/css/**/*.css'], {read: false});
	var angularStream = gulp.src('src/jslibs/angular.min.js', {read: false});
	var angularRouteStream = gulp.src('src/jslibs/angular-route.min.js', {read: false});
	var jsStream = gulp.src('src/app/app.js', {read: false});



	return target
		.pipe(inject(series(csslibStream, cssStream, angularStream, angularRouteStream, jsStream), {
			ignorePath: 'src',
			addRootSlash: false
		}))
		.pipe(debug())
    .pipe(gulp.dest('./dist'));
});