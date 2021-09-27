function css() {
  // PLUGINS
  const { src, dest } = require('gulp');
  const 
    plumber = require('gulp-plumber'),
    purgecss = require('gulp-purgecss'),
    concat =  require('gulp-concat');
  // POSTCSS PLUGINS
  const postcss = require('gulp-postcss');
  const 
    doiuse = require('doiuse'),
    importRule = require('postcss-import'),
    simpleVars = require('postcss-simple-vars'),
    atroot = require('postcss-atroot'),
    autoprefixer = require('autoprefixer'),
    utilities = require('postcss-utilities'),
    shortcuts = require('postcss-define-property'),
    shortSpacing = require('postcss-short-spacing'),
    shortPositioning = require('postcss-short-position'),
    shortColor = require('postcss-short-color'),
    responsiveFont = require('postcss-responsive-font'),
    maps = require('postcss-map'),
    mixins = require('postcss-sassy-mixins'),
    nesting = require('postcss-nested'),
    nestedVars = require('postcss-nested-vars'),
    inlineComments = require('postcss-inline-comment'),
    proportionalSpacing = require('postcss-proportional-spacing'),
    cssnano = require('cssnano');
  // AUTOPREFIXER CONFIG
  const autoprefixerConfig = {
    overrideBrowserslist: ['last 2 versions'],
    cascade: false
  }
  // DOIUSE CONFIG 
  const doiuseConfig = {
    browsers: ['> 1%'],
    ignoreFiles: '**/normalize.pcss',
    onFeatureUsage: function (usageInfo) {
      console.log(usageInfo.message)
    }
  }
  // MAPS CONFIG
  const mapsConfig = {
    basePath: "./src/styles",
    maps: ["breakpoints.yml"]
  }
  // SHORT CONFIG
  const shortConfig = { 
    prefix: "x",
    skip: "*" 
  }
  // POSTCSS PLUGINS
  var postcssPlugins = [
    doiuse(doiuseConfig),
    importRule(),
    simpleVars(),
    atroot(),
    autoprefixer(autoprefixerConfig),
    utilities(),
    shortcuts(),
    shortSpacing(),
    shortPositioning(shortConfig),
    shortColor(shortConfig),
    responsiveFont(),
    maps(mapsConfig),
    mixins(),
    nesting(),
    nestedVars(),
    inlineComments(),
    proportionalSpacing(),
    cssnano()
  ]
  // PATHS
  var stylesheetsPaths = [
    './src/styles/app.pcss'
  ]
  // TASK
  return src(stylesheetsPaths, { sourcemaps: true })
    .pipe(plumber())
    .pipe(postcss(postcssPlugins))
    .pipe(purgecss({
      content: ['./src/*.html']
    }))
    .pipe(concat('app.css'))
    .pipe(dest('./public/styles', { sourcemaps: '.' }))
}

// This is mandatory
exports.css = css;