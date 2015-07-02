var gulp = require("gulp");
var minifyHTML = require("gulp-minify-html");
var minifyCSS = require("gulp-minify-html");
var less = require("gulp-less");
var replaceHTML = require("gulp-html-replace");
var jade = require("gulp-jade");
var rsync = require("gulp-rsync");
var uglify = require("gulp-uglify");

//	Process files move them to dist/
gulp.task("build", function () {
	gulp.src("src/public/index.jade")
		.pipe(jade())
		.pipe(minifyHTML())
		.pipe(gulp.dest("dist/public/"));

	gulp.src("src/public/less/index.less")
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest("dist/public/css/"));

	gulp.src("src/public/js/**.js")
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest("dist/public/js/"));

	gulp.src("src/server.js")
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest("dist/"));

});

//	Deploy testing server
gulp.task("default", ["build"], function () {
	gulp.watch("src//public/**", ["build"]);
	gulp.watch("src/public/less/**", ["build"]);
	gulp.watch("src/public/js/**.*", ["build"]);
});

//	Sync changes to monochromicon.me
gulp.task("deploy", ["build"], function () {
	gulp.src("dist/")
		.pipe(rsync({
			root: "dist",
			hostname: "gl0vgames.com",
			destination: "/usr/share/nginx/dev/site/",
			username: "root",
			incremental: true,
			progress: true,
			recursive: true
	}));
});