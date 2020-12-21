const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();


// File paths
const files = { 
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js'
}


// Sass Task
function scssTask(){
  return src(files.scssPath, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
  return src(files.jsPath, { sourcemaps: true })
    //.pipe(terser())
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch([files.scssPath, files.jsPath], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);