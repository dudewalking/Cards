const gulp = require('gulp'),

    less = require('gulp-less'),
    concat = require('gulp-concat'),
    debug = require('gulp-debug'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    useref = require('gulp-useref'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    runSequence = require('run-sequence');


gulp.task('less', () => {
    return gulp.src('_styles/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write())
        .pipe(cssnano())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: '.'
        },
    })
});


gulp.task('useref', function () {
    return gulp.src('index.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('.'))
});


gulp.task('images', function () {
    return gulp.src('_images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin())
            .pipe(gulp.dest('public/images')))
});


gulp.task('fonts', function () {
    return gulp.src('_fonts/**/*')
        .pipe(gulp.dest('public/fonts'))
});

gulp.task('watch', ['browserSync', 'less'], function () {
    gulp.watch('_styles/**/*.less', ['less']);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('_scripts/**/*.js', browserSync.reload);
});

gulp.task('clean', function () {
    return del('public/fonts', 'public/images');
});


gulp.task('build', function (callback) {
    runSequence('clean',
        ['less', 'useref', 'images', 'fonts'],
        callback
    )
});


gulp.task('default', function (callback) {
    runSequence(['less', 'browserSync', 'watch'],
        callback
    )
});