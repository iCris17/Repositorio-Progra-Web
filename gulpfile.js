// Importar las funciones específicas de la API de gulp que vamos a utilizar
const { src, dest, series, parallel, watch } = require('gulp');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');

// Importar los paquetes con los que vamos a trabajar
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const browserSync = require('browser-sync').create();
//Constantes de trabajo
const files = {
    scssPath: 'src/scss/**/*.scss',
    htmlPath: 'dist/**/*.scss',
    jsPath: 'source/*.js',
    cssPath: 'source/*.css'
}

function helloworldTask(done) {
    console.log("Hello world!");
    done();
}

function minificarJS(a) {
    return src(files.jsPath)
        .pipe(uglify())
        .pipe(dest('build/'));
}

function minificarCSS(a) {
    return src(files.cssPath)
        .pipe(minifycss())
        .pipe(dest('build/'));
}

/**
 * Compilar los archivos de scss en estilos en cascada para el navegador (CSS)
 */



function scssTask(d) {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(dest('dist/css'));
}

/*
 * Observsar cambios en los archivos de sass para compilarlos automáticamente
 */

function watchTask() {
    watch(
        [files.scssPath, files.htmlPath],
        series(scssTask, reloadTask)
    )
}

function serveTask(d) {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    d();
}

function reloadTask(d) {
    browserSync.reload();
    d();
}

exports.default = series(minificarJS, minificarCSS, scssTask, serveTask, watchTask);