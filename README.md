# [Cards-component]()
This is the seventh project from Juan Pablo's course of [CSS Grid and Flexbox](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/).

> **Disclaimer:** I'm starting to learn how to use **Git/Github** correctly, therefore there'll be plenty of pull requests, commits and other stuff as tests in this repository, however, *this won't represent my way of working forever*, I'll learn more things along the way as always :D!.

## Table of contents
* [What I learned](#what-i-learned)
* [Lectures](#lectures)
* [Preview](#preview)
* [Reports](#reports)
    - [GTmetrix](#gtmetrix)
    - [Lighthouse](#lighthouse)
* [Open Graph](#open-graph)
    - [Facebook](#facebook)
    - [Twitter](#twitter)

## **What I learned** 🎨
* First, I'd like to say that the purpose of this mini-project was to learn more about PostCSS plugins. I already know how to use them, but nothing special out of [**autoprefixer**](https://www.npmjs.com/package/autoprefixer) and [**cssnano**](https://www.npmjs.com/package/cssnano), therefore this time I wanted to leave my usual preprocessor (**SASS**) beside and instead, use all the possible and interesting features PostCSS plugins could offer me. These are some of the plugins I'm using for this project: 
    - [doiuse](https://www.npmjs.com/package/doiuse) is meant to be a debugger for non-supported features (this is based on your own preferences, in my case, I set the warnings for features not supported by browsers with more than 1% of global use). It warns you in the console about things that may cause problems in some browsers.
    - [postcss-import](https://www.npmjs.com/package/postcss-import) is meant to be a plugin that allows you to use the **import** at-rule in your stylesheets as you'd normally do it in SASS.
    - [postcss-simple-vars](https://www.npmjs.com/package/postcss-simple-vars) is meant to be a plugin that allows you to create sass-like variables in your stylesheets.
    - [postcss-atroot](https://www.npmjs.com/package/postcss-atroot) is meant to be a plugin that allows you to use the **at-root** at-rule in your stylesheets as you'd normally do it in SASS.
    - [postcss-utilities](https://www.npmjs.com/package/postcss-utilities) is meant to be a plugin that allows you to use useful utilities with the **util** at-rule (as in TailwindCSS).
    - [postcss-define-property](https://www.npmjs.com/package/postcss-define-property) is meant to be a plugin that allows you to create sort of shortcuts for different properties in just one property.
    - [postcss-short-spacing](https://www.npmjs.com/package/postcss-short-spacing) is meant to be a plugins that allows you to omit sides within **margin** and **padding** properties in CSS.
    - [postcss-short-position](https://www.npmjs.com/package/postcss-short-position) is meant to be a plugins that allows you to define sides within the **position** property in CSS.
    - [postcss-short-color](https://www.npmjs.com/package/postcss-short-color) is meant to be a plugin that allows you to define **background-color** within the **color** property in CSS.
    - [postcss-responsive-font](https://www.npmjs.com/package/postcss-responsive-font) is meant to be a plugin that helps you to create responsive fonts (as you might have guessed), it allows you to use a new property called **font-size-responsive** which accepts four values, the minimum and the maximum font-size and the minimum and maximum viewport-width.
    - [postcss-map](https://www.npmjs.com/package/postcss) is meant to be a plugin that allows you to create maps to save values (such as in SASS), but in a more modular way (by creating files with the **.yml** extension) and then using them in your stylesheets through the **map** function (again, such as in SASS).
    - [postcss-sassy-mixins](https://www.npmjs.com/package/postcss-sassy-mixins) is meant to be a plugins that allows you to use sass-like mixins in your stylesheets.
    - [postcss-nested] is meant to be a plugins that allows you to use the power of nesting within your stylesheets such as in SASS.
    - [postcss-nested-vars](https://www.npmjs.com/package/postcss-nested-vars) is meant to be a plugin that allows you to create **global and local scopes** for your variables such as in SASS.
    - [postcss-proportional-spacing](https://www.npmjs.com/package/postcss-proportional-spacing) is meant ot be a plugin that allows you to create vertical and horizontal proportional spacing using ratios.

## **Lectures** 📚
- [Some things you may think about PostCSS... and you might be wrong](https://www.julian.io/articles/postcss.html)

## **Preview** 👩‍💻
![](readme/screenshot.png)

## **Reports** 🎯

### GTmetrix
![](readme/gtmetrix.png)

### Lighthouse
![](readme/lighthouse.png)

## Open Graph

### Facebook
![](readme/facebook.png)

### Twitter
![](readme/twitter.png)