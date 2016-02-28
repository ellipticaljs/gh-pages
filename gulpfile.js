var config=require('./config.json');
var Tasks=require('elliptical-gulp');
var gulp=require('gulp');


var tasks=new Tasks(config);

gulp.task('vulcanize', function () {
    tasks.vulcanize();
});

