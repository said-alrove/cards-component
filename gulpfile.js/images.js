const { src, dest, lastRun } = require('gulp');
const 
  imagesQuality = 75,
  imageResize = require('gulp-rezzy');

let rezzyConfig = [
  {
    width: 200,
    height: 112,
    suffix: "@1x"
  },
  {
    width: 400,
    height: 225,
    suffix: "@2x"
  },
  {
    width: 800,
    height: 450,
    suffix: "@3x"
  }
]

// This is just to send the icons from the src directory to the public diretory without being renamed with the suffix "@3x", "@2x" or "@1x"
function convertIcon() {
  return src("./src/assets/icons/*")
    .pipe(dest("./public/assets/icons"))
}

function minify() {
  // PLUGINS
  const 
    imagemin = require('gulp-imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageminOptipng = require('imagemin-optipng');
  // CONFIG
  const jpegConfig = {
    quality: 75
  }
  const pngConfig = {
    optimizationLevel: 5
  }

  return src("./src/assets/img/*", { since: lastRun(minify) })
    .pipe(imagemin([
        imageminMozjpeg(jpegConfig),
        imageminOptipng(pngConfig)
    ]))
    .pipe(imageResize(rezzyConfig))
    .pipe(dest("./public/assets/img"))
}

function convertWebp() {
  // PLUGINS
  const 
    webp = require('gulp-webp'),
    imageminWebp = require('imagemin-webp');
  // CONFIG
  const webpConfig = {
    quality: imagesQuality
  }

  return src("./src/assets/img/*", { since: lastRun(convertWebp) })
    .pipe(webp([
      imageminWebp(webpConfig)
    ]))
    .pipe(imageResize(rezzyConfig))
    .pipe(dest("./public/assets/webp"))
}

// This is just to send the Open-Graph image from the src directory to the public diretory without being renamed with the suffix "@3x", "@2x" or "@1x"
function openGraph() {
  return src("./src/assets/*.{png, jpg}")
    .pipe(dest("./public/assets"))
}

const { parallel } = require('gulp');
// This is mandatory
exports.images = parallel(minify, convertWebp, convertIcon, openGraph);