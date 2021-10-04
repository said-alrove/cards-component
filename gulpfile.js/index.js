function scripts() {
  const { src, dest } = require('gulp');
  return src("./src/scripts/*.js")
    .pipe(dest("./public/scripts"))
}

function json() {
  const { src, dest } = require('gulp');
  return src("./src/*.json")
    .pipe(dest("./public"))
}

function dev() {
  // TASKS
  const 
    { watch } = require('gulp'),
    { html } = require('./html.js'),
    { css } = require('./styles.js'),
    { images } = require('./images.js'),
    browserSync = require('browser-sync').create(),
    init = browserSync.init,
    reload = browserSync.reload;
  // CONFIG
  const gulpConfig = {
    ignoreInitial: false
  }
  // LIVE SERVER
  init({
    server: {
      baseDir: "./public/"
    }
  });
  watch("./src/*.html", gulpConfig, html).on("change", reload);
  watch("./src/styles/*.pcss", gulpConfig, css).on("change", reload);
  watch("./src/assets/**/*", gulpConfig, images)
  watch("./src/scripts/*.js", gulpConfig, scripts).on("change", reload);
  watch("./src/*.json", gulpConfig, json).on("change", reload);
}

const 
 { watch, series, parallel } = require('gulp'),
 { html } = require('./html.js'),
 { css } = require('./styles.js'),
 { images } = require('./images.js');
// This is mandatory
exports.build = 
  series(html, css, images, 
  parallel(scripts, json));
exports.default = dev;

// INDIVIDUAL TASKS
exports.css = css;
exports.html = html;
exports.images = images;
exports.js = series(scripts, json);