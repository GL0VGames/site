var gulp = require("gulp");
var minifyHTML = require("gulp-minify-html");
var less = require("gulp-less");
var replaceHTML = require("gulp-html-replace");
var jade = require("gulp-jade");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var rsync = require("gulp-rsync");

//	Process files move them to dist/
gulp.task("build", function () {
	gulp.src("src/public/index.jade")
		.pipe(jade())
		.pipe(minifyHTML())
		.pipe(gulp.dest("dist/public/"));

	gulp.src("src/public/less/index.less")
		.pipe(less())
		.pipe(gulp.dest("dist/public/css/"));

	gulp.src("src/public/js/**.js")
		.pipe(gulp.dest("dist/public/js/"));

	gulp.src("src/server.js")
		.pipe(gulp.dest("dist/"));

});

gulp.task("reload", function () {
	connect.reload();
});

//	Deploy testing server
gulp.task("test", ["build"], function () {
	connect.server({
		root: "dist/",
		port: 8080,
		livereload: true
	});
	gulp.watch("src//public/**", ["build", "reload"]);
	gulp.watch("src/public/less/**", ["build", "reload"]);
	gulp.watch("src/public/js/**.*", ["build", "reload"]);
});

//	Sync changes to monochromicon.me
gulp.task("deploy", ["build"], function () {
	gulp.src("dist/")
		.pipe(rsync({
			root: "dist",
			hostname: "monochromicon.me",
			destination: "/var/web/home/",
			username: "root",
			incremental: true,
			progress: true,
			recursive: true
	}));
});