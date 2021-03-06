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
    customProps = require('postcss-custom-properties'),
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
    ancestorsSelector = require('postcss-nested-ancestors'),
    nesting = require('postcss-nested'),
    nestedVars = require('postcss-nested-vars'),
    nestedProps = require('postcss-nested-props'),
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
    browsers: ["ie >= 9, > 1%, last 2 versions"],
    ignoreFiles: '**/normalize.pcss',
    onFeatureUsage: function (usageInfo) {
      console.log(usageInfo.message)
    }
  }
  const customPropsConfig = {
    preserve: false,
    importFrom: "./src/styles/variables.json",
    exportTo: "./src/styles/*.pcss"
  }
  // UTILITIES CONFIG
  const utilConfig = {
    centerMethod: "flexbox",
    ie8: true,
    textHideMethod: "font"
  }
  // MAPS CONFIG
  const mapsConfig = {
    basePath: "./src/styles",
    maps: ["breakpoints.json"]
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
    customProps(customPropsConfig),
    atroot(),
    autoprefixer(autoprefixerConfig),
    utilities(utilConfig),
    shortcuts(),
    shortSpacing(),
    shortPositioning(shortConfig),
    shortColor(shortConfig),
    responsiveFont(),
    maps(mapsConfig),
    mixins(),
    ancestorsSelector(),
    nesting(),
    nestedVars(),
    nestedProps(),
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
    .pipe(plumber.stop())
    .pipe(dest('./public/styles', { sourcemaps: '.' }))
}

// This is mandatory
exports.css = css;