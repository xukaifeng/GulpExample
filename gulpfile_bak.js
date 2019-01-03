const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');



// 1.压缩html
gulp.task('htmlmin', function() {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});

// 2. 编译sass
gulp.task('sass', function() {
    return gulp.src('src/stylesheet/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// 3. 压缩css
gulp.task('cssmin', function() {
    return gulp.src(['dist/css/*.css', '!dist/css/*.min.css'])
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.extname = ".min.css"
        }))
        .pipe(gulp.dest('dist/css'));
});

// 4. 压缩图片
gulp.task('imagemin', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// 5. 合并压缩js
gulp.task('jsmin', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// gulp.task('watch', function() {
//     gulp.watch('src/html/*.html', gulp.series('htmlmin'));
// });

gulp.task('watch', function() {
    gulp.watch(['src/html/*.html', 'src/js/*.js', 'src/stylesheet/*.scss'], gulp.series('htmlmin', 'jsmin', 'sass', 'cssmin'));
});