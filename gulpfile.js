var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){

gulp.src('./src/sass/base.scss')
.pipe(sass({outputStyle:''}))
.pipe(gulp.dest('./src/css/'))
});
gulp.task('autoSass',function(){
    //监听文件文件修改，如果修改，则执行compilSass任务
    gulp.watch('./src/sass/base.scss',['compileSass']);
})