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
	gulp.src("src/index.jade")
		.pipe(jade())
		.pipe(minifyHTML())
		.pipe(gulp.dest("dist/"));

	gulp.src("src/less/index.less")
		.pipe(less())
		.pipe(gulp.dest("dist/css/"));

	gulp.src("src/js/**.js")
		.pipe(gulp.dest("dist/js/"));

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
	gulp.watch("src/**", ["build", "reload"]);
	gulp.watch("src/less/**", ["build", "reload"]);
	gulp.watch("src/js/**.*", ["build", "reload"]);
});

//	Sync changes to monochromicon.me
gulp.task("deploy", ["build"], function () {
	gulp.src("dist/")
		.pipe(rsync({
			root: "dist",
			hostname: "gl0vgames.com",
			destination: "/usr/share/nginx/home/",
			username: "root",
			incremental: true,
			progress: true,
			recursive: true
	}));
});
