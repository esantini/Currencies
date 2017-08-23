"use strict";
// tslint:disable
exports.__esModule = true;
/*
    Generated from typescript file
*/
var gulp = require("gulp");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var watchTask;
var wachAll = [];
//
//
watchTask = {
    taskName: "serverTypeScripts",
    src: ["src/server/**/*.ts"],
    dest: "build/server/"
};
wachAll.push(watchTask);
(function (name, src, dest) {
    var tsProject = tsc.createProject(dest + "tsconfig.json");
    // Transpiles typescript files from the source to the build.
    gulp.task(name, function () {
        gulp.src(src)
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .pipe(sourcemaps.write(".", { sourceRoot: "../src/", includeContent: false }))
            .pipe(gulp.dest(dest));
    });
})(watchTask.taskName, watchTask.src, watchTask.dest);
//
//
watchTask = {
    taskName: "move_plain_files",
    src: ["src/public/**/*", "!src/**/*.ts", "!src/**/*.less"],
    dest: "build/public/"
};
wachAll.push(watchTask);
(function (name, src, dest) {
    gulp.task(name, function () {
        gulp.src(src)
            .pipe(gulp.dest(dest));
    });
})(watchTask.taskName, watchTask.src, watchTask.dest);
//
//
watchTask = {
    taskName: "move_views",
    src: ["src/server/**/*.ejs"],
    dest: "build/server/"
};
wachAll.push(watchTask);
(function (name, src, dest) {
    gulp.task(name, function () {
        gulp.src(src)
            .pipe(gulp.dest(dest));
    });
})(watchTask.taskName, watchTask.src, watchTask.dest);
//
//
watchTask = {
    taskName: "gulpfile",
    src: "./gulpfile.ts",
    dest: ""
};
wachAll.push(watchTask);
(function (name, src, dest) {
    gulp.task(name, function () {
        var tsProject = tsc.createProject("tsconfig.json");
        gulp.src(src)
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dest));
    });
})(watchTask.taskName, watchTask.src, watchTask.dest);
//
//
gulp.task("wacha", function () {
    wachAll.forEach(function (wacha) {
        console.log("Watching", wacha.taskName);
        gulp.watch(wacha.src, [wacha.taskName]); // casting as WatchOptions because of error TS2345:
        // error TS2345: Argument of type 'string[]' is not assignable to parameter of type 'WatchOptions | undefined'
    });
});
// set allTasks as an array of names, example: ['typescripts', 'jades', 'htmls']
var allTasks = (function () {
    var arr = [];
    wachAll.forEach(function (task) {
        arr.push(task.taskName);
    });
    return arr;
})();
// allTasks.push('watch_all');
gulp.task("build", function () {
});
allTasks.push("build", "wacha"); // , 'Run_Karma_Tests'
// @types are inconsistent:
gulp.task("default", allTasks); // should be: gulp.parallel( allTasks );
