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
    delay: 1000, 
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
}

const 
 { series } = require('gulp'),
 { html } = require('./html.js'),
 { css } = require('./styles.js'),
 { images } = require('./images.js');
// This is mandatory
exports.build = series(html, css, images);
// exports.default = dev;
exports.default = css;