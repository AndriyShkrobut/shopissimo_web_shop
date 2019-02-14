// IMPORTING PLUGINS //

const gulp = require('gulp'),
  del = require('del'),
  changed = require('gulp-changed'),
  babel = require('gulp-babel'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps');

// SASS -> CSS TASK //

gulp.task('css', () => {
  return gulp
    .src('src/sass/**/*.sass')
    .pipe(changed('src/css'))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('src/css'));
});

// COLLECTING ALL JS LIBRARIES INTO ONE MINIFIED FILE //

gulp.task('jsLibs', () => {
  return gulp
    .src(['src/libs/jquery/dist/jquery.min.js'])
    .pipe(changed('src/js'))
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'));
});

// TASK FOR LOCAL SERVER //

gulp.task('browserSync', cb => {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
    notify: false,
    // tunnel: true,
    // tunnel: 'template'
  });
  cb();
});

// RELOADING BROWSER TASK //

gulp.task('reload', cb => {
  browserSync.reload();
  cb();
});

// WATCH FILES TASK //

gulp.task('watch', cb => {
  gulp.watch('src/sass/**/*.sass', gulp.series('css', 'reload'));
  gulp.watch('src/js/**/*.js', gulp.series('reload'));
  gulp.watch('src/img/**/*', gulp.series('reload'));
  gulp.watch('src/fonts/**.*', gulp.series('reload'));
  gulp.watch('src/*.html', gulp.series('reload'));
  cb();
});

// REMOVING BUILD FOLDER TASK //

gulp.task('clean', () => {
  return del('dist');
});

// DEFAULT TASK //

gulp.task('default', gulp.series('browserSync', 'css', 'jsLibs', 'watch'));

// BUILD TASK //

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('css', 'jsLibs'), cb => {
    gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'));

    gulp
      .src('src/img/**/*')
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
        ])
      )
      .pipe(gulp.dest('dist/img'));

    gulp.src('src/*.html').pipe(gulp.dest('dist/'));

    gulp
      .src('src/css/**/*.css')
      .pipe(sourcemaps.init())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'));

    gulp
      .src('src/js/main.js')
      .pipe(
        babel({
          presets: ['@babel/preset-env'],
        })
      )
      .pipe(gulp.dest('dist/js'));

    gulp.src('src/js/libs.min.js').pipe(gulp.dest('dist/js'));

    // MINIFYING EVERY JS FILE //

    // gulp.src('src/js/**/*.js')
    // .pipe(sourcemaps.init())
    // .pipe(babel({
    //     presets: ['@babel/preset-env']
    // }))
    // .pipe(uglify())
    // .pipe(sourcemaps.write())
    // .pipe(gulp.dest('dist/js'));

    cb();
  })
);
