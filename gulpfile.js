var gulp = require('gulp');
var ts = require('gulp-typescript');
gulp.task("transpile", function(){
    gulp.src('*.ts').pipe(ts({
        target : 'ES5',
        declarationFiles : false,
        noExternalResolve : true
    })).pipe(gulp.dest('./'));
});
gulp.task("default",function(){
 gulp.watch('*.ts',['transpile']);
});