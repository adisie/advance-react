

const {src,dest,watch,series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));

function buildSyle(){
    return src('./**/*.scss')
    .pipe(sass())
    .pipe(dest('../css'))
}

function trackChanges(){
    watch(['./**/*.scss'],buildSyle);
}

exports.default = series(buildSyle,trackChanges);