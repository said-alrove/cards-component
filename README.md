# [Cards-component](https://cards-component-11nap1.netlify.app/)
This is the seventh project from Juan Pablo's course of [CSS Grid and Flexbox](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/).

> **Note:** this is supposed to be the complement of the [Travel Blog](https://github.com/said-alrove/travel-blog) project (this should've been developed first, but due to I was rebuilding all the projects of this course without an apparent order I finished rebuilding the big one first, and just after, the mini-project that was supposed to be the base of it).

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
* First, I'd like to say that the purpose of this mini-project was to learn more about PostCSS plugins. I already know how to use them, but nothing special out of [**autoprefixer**](https://www.npmjs.com/package/autoprefixer) and [**cssnano**](https://www.npmjs.com/package/cssnano), therefore this time I wanted to leave my usual preprocessor (**SASS**) beside and instead, use all the possible and interesting features PostCSS plugins could offer me. These are the plugins I'm using for this project: 
    - [doiuse](https://www.npmjs.com/package/doiuse) is meant to be a debugger for non-supported features (this is based on your own preferences, in my case, I set the warnings for features not supported by browsers with more than 1% of global use). It warns you in the console about things that may cause problems in some browsers.
    - [postcss-import](https://www.npmjs.com/package/postcss-import) is meant to be a plugin that allows you to use the **import** at-rule in your stylesheets as you'd normally do it in SASS.
    - [post-custom-properties](https://ww.npmjs.com/package/postcss-custom-properties) is meant to be a plugin that allows you to use **custom-properties** just like CSS handles them, but, you can also configure the plugin options to don't preserve the variables as they're in the source files, e.g. **var(--clr-white)**, and instead, compile the variables' values, this way we can have a better fallback for older browsers which don't understand this feature. Furthermore, we can use CSS, Js, Sass, or even JSON files to store our variables and this way modularize our project.
    - [postcss-simple-vars](https://www.npmjs.com/package/postcss-simple-vars) is meant to be a plugin that allows you to create sass-like variables in your stylesheets.
    - [postcss-atroot](https://www.npmjs.com/package/postcss-atroot) is meant to be a plugin that allows you to use the **at-root** at-rule in your stylesheets as you'd normally do it in SASS.
    - [postcss-utilities](https://www.npmjs.com/package/postcss-utilities) is meant to be a plugin that allows you to use useful utilities with the **util** at-rule (similar to TailwindCSS with **apply**).
    - [postcss-define-property](https://www.npmjs.com/package/postcss-define-property) is meant to be a plugin that allows you to create sort of shortcuts for different properties in just one.
    - [postcss-short-spacing](https://www.npmjs.com/package/postcss-short-spacing) is meant to be a plugin that allows you to omit sides within the **margin** and **padding** properties in CSS with a character.
    - [postcss-short-position](https://www.npmjs.com/package/postcss-short-position) is meant to be a plugin that allows you to ommit sides within the **position** property in CSS with a character.
    - [postcss-short-color](https://www.npmjs.com/package/postcss-short-color) is meant to be a plugin that allows you to define **background-color** within the **color** property in CSS.
    - [postcss-responsive-font](https://www.npmjs.com/package/postcss-responsive-font) is meant to be a plugin that helps you to create responsive fonts (as you might have guessed), it allows you to use a new property called **font-size-responsive** which accepts four values, the minimum and the maximum font-size and the minimum and maximum viewport-width related to the font-sizes mentioned before.
    - [postcss-map](https://www.npmjs.com/package/postcss) is meant to be a plugin that allows you to create maps to save values (such as in SASS), but in a more modular way (by creating files with the **.json** extension) and then using them in your stylesheets through the **map** function (again, such as in SASS).
    - [postcss-sassy-mixins](https://www.npmjs.com/package/postcss-sassy-mixins) is meant to be a plugin that allows you to use sass-like mixins in your stylesheets.
    - [postcss-nested-selectors](https://www.npmjs.com/package/postcss-nested-selectors) is meant to be a plugin that allows you to use the parent selector such as in SASS (but here you have de possibility of using it in deeper levels and still be referencing the first level with the **^** character).
    - [postcss-nested] is meant to be a plugin that allows you to use the power of nesting within your stylesheets such as in SASS.
    - [postcss-nested-vars](https://www.npmjs.com/package/postcss-nested-vars) is meant to be a plugin that allows you to create **global and local scopes** for your sass-like variables.
    - [postcss-nested-props](https://www.npmjs.com/package/postcss-nested-props) is meant to be a plugin that allows you to nest declaration properties such as in SASS.
    - [postcss-inline-comments](https://www.npmjs.com/package/postcss-inline-comments) is meant to be a plugin that allows you to use inline comments.
    - [postcss-proportional-spacing](https://www.npmjs.com/package/postcss-proportional-spacing) is meant to be a plugin that allows you to create vertical and horizontal proportional-spacing ratios.

* Something important to mention is that for this mini-project I wanted to use PostCSS plugins only, to test which ones are worth it to use in future projects in combination with **SASS** to make a stronger preprocessor.

    - While compiling I figured out that there were some features that seem to don't be supported by PostCSS (or any of the plugin I used), being two of those the **::before** and **::after** pseudo-elements.
    - Also, I had problems when trying to use the parent selector in my styles (it doesn't work as in SASS, is more complicated and less cool).
    
* To make things more interesting, I tried to use Javascript and JSON as I did in the [**freelancer-home**](https://github.com/said-alrove/freelancer-home) project to load data, in this case, the data of the cards component and it worked perfectly!, I'll try to learn more about JSON and Javascript (at least the basics) while rebuilding the projects that are left to me (remember that I'm rebuilding all my portfolio of projects to make them more presentable and actualized) to use those technologies there, this way I can be more comfortable with those technologies before even starting to learn them in deep.

* This time I wanted to put more into practice the use of responsive properties for images in HTML such as **srcset** and **sizes**, therefore I read an [article](https://medium.com/@MRWwebDesign/responsive-images-the-sizes-attribute-and-unexpected-image-sizes-882a2eadb6db) about the topic and I rewatched the series of videos about [The images on the Web](https://youtube.com/playlist?list=PLssXrSIRXL82LDiv1wLFhknwhlG_LH0VI) of [**Kevin Powell**](https://www.youtube.com/kepowob/featured) (I had already watched this a long time ago, but there were some things I didn't remember as well as I'd like, therefore I decided to refresh my memory).

* Because I was also going to focus this mini-project on the images, I decided to put attention on the **alt** attribute as well by reading more information about its use (there were certain projects where I used the "This image shows" sentence, which seems to be wrong, therefore I wanted to get more information about how to optimize the alternative text property content).

> **Note:** While looking for information about the images on the web and the alternative text attribute I saw how a couple of authors mentioned the importance of accessibility for videos and audios which's also very important, thus I decided to put it into practice for those specific cases in a future project (which will also help me to learn how to set up the **video** and **audio** elements correctly in the HTML file).

* Also, I learned the [@util PostCSS library](https://ismamz.github.io/postcss-utilities/docs) (it's a small utilities library), first, because I had to (is one of the plugins I set for PostCSS, therefore would have been quite weird to don't use it) and second, because I wanted to get used to this **utlities** model using the **@util** rule (which is similar to the one used for injecting utilities with [TailwindCSS](https://tailwindcss.com/docs/installation) in our stylesheets, obviously the main point of TailwindCSS is to avoid spending too much time writing CSS and instead, just write HTML "inline-styles", but you get it, I wanted to be more in line with it for when I learn it). Here are some screenshots about all the utilities available with @util (this is how I practiced with it before getting full into the project):

![](readme/@util.png)

> **Note:** I made notes about some issues that I ran into when testing these utilities, but I removed them when taking the screenshot basically because **CodeSnap** seemed to don't understand break-lines which is bad when having large comments.

* Furthermore, I added [gulp-rezzy](https://www.npmjs.com/package/gulp-rezzy) to the images Gulp tasks,  which's meant to be a plugin that allows you to create different versions of one image (or more if you'd like so) based on a width, a height, and even a prefix or a suffix (in my case I created the **@1x**, **@2x** and **@3x** versions of a bunch of images to use them with the **sizes** and **srcset** attributes in the image element).

Something important to comment is that I created a bunch of "basic" tasks on Gulp in specific cases to just send certain elements from one folder to another without being modified in some way, I made this with the *openGraph*, *convertIcon*, *scripts* and *json* tasks (this is because sometimes there are elements that are needed for the production folder, but just as they're in the source one, without modifications).

> **Note:** it's very relevant to remark that there are some places in the stylesheets where I could've got a better result with less code, but there were certain cases where I wanted to test a specific feature of a plugin (e.g. the **@util** utilities) even if it meant more code or a more complex one.

## **Lectures** 📚
- [Some things you may think about PostCSS... and you might be wrong](https://www.julian.io/articles/postcss.html)
- [Responsive Images, The sizes Attribute, and Unexpected Image Sizes](https://medium.com/@MRWwebDesign/responsive-images-the-sizes-attribute-and-unexpected-image-sizes-882a2eadb6db)
- [It’s ALT Good: Alternative Text & Accessibility](https://mrwweb.com/alternative-text-accessibility/)

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