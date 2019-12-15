# Default static site starter

Utilizes Gulp, Webpack, Babel, Nunjucks templates, and a few other tools to help build static sites.

### 1. Install Node + NPM

https://nodejs.org/en/download/

In the project folder root, run: `npm install` to install your dependencies.

Some libraries might require having other dependencies installed such as Python, you will typically see an error in the console during the installation progress if this is the case.

Sometimes you might run into issues depending on which version of Node you are using with certain dependencies. If this ever becomes a problem, package managers exists that allow you switch between versions of Node. https://github.com/coreybutler/nvm-windows or https://github.com/creationix/nvm are two examples.

### 2. Default Folder Structure

- /src
   - html
   - images
   - js
   - static
   - styles
- /tasks
- .babelrc
- .editorconfig
- .jshintrc
- .package.json

A `/public` folder will be created as you work, but you shouldn't need to commit this to Bitbucket if you have a pipeline set to run the npm build command on deployment. This folder is created to help serve your localhost site in dev mode and to make it simpler to view what is happening, such as the outputted HTML, CSS, JS... files.
___

The `src` folder default structure:

- html: Nunjucks templates
- images: Images that will get ran through imagemin and then copied into an /images folder by default in the public folder.
- js: Your JS files that will get transpiled with Babel.
- static: Static files that will get copied to your public folder such as images you do not want ran through imagemin, documents, favicons, as well as non-transpiled javascript/css files.
- styles: CSS or Sass files that will get transpiled.

___

The `/src/styles` folder is present for your sass and/or css files. CSS files are processed with PostCSS (https://github.com/postcss/postcss), but you can write normal, traditional CSS as well. This allows you the ability to easily import dependency libraries into your main css bundle (such as normalize.css, bootstrap, or some other random dependency such as an image slider), import small component-based css files into your main bundle rather than having a single large file containing all styles, autoprefix styles for browser support, utilize variables and mixins and other future CSS syntaxes, lint your css, etc. In Sass, all component, function, mixin, etc. files should start with an underscore, and be imported into your main entry point file(s). The default configuration treats CSS here the same, where it will ignore making its own CSS file for ones that start with an underscore. The build options can be found in /tasks

___

The `/src/html` folder is where your Nunjucks template files are stored to generate your HTML files. Nunjucks (https://mozilla.github.io/nunjucks/) is a JavaScript templating language that supports includes, macros, and additional features commonly found in template languages. The standard nunjucks template extension used is ".njk". Each page file will simply extend a layout file... and from there you can make it as simple or complex as you want... plain hard-coded HTML to utilizing macros for commonly used components, for loops to loop through collections, and such....

The default folder structure inside the src/html folder is:

- /_components
- /_data
- /_layouts
- /_macros
- /_partials
- index.njk
- page-0.njk

Folders beginning with an underscore are ideally for dev only and shouldn't be pushed to the `/public` folder.

The `/_components` folder is where you will ideally place things such as your master header template, primary navigation, and footer templates.

The `/_data` folder is where you can store json data files that can then be used as variables inside your templates files. This is useful for things such as the Site Name, domain name for meta, canonical properties, social media links, phone numbers, addresses, and collections of data such as events, staff members, etc. Currently, the tasks only handle json files... if you would prefer to use something like yml - the task file(s) that handle this would need to first convert the yml file to a javasscript object before passing the data to the templates.

The `/_layouts` folder stores your master layout files. You will need at least one here, typically name `default.njk`, but you may also need additional ones for customized pages such as a Home page layout. Your pages will extend one of these.

The `/_macros` folder is totally optional, but allows you the ability to write functions that render snippets of html. This is great for components such as buttons, youtube videos, cards, or any commonly used component in your website where you don't always want to have to remember the proper HTML structure or classnames off the top of your head.

The `/_partials` folder is used to store reusable snippets of code that may be placed on all or some pages. Social media icons, a modal window, a notification bar... I also find it very useful to have additional files here for global styles, javascript, favicons, and meta tags... therefore I do not have to repeat them in misc. layouts.

`index.njk` is your default Home page.

`page-0.njk` is a helpful file that contains many of the common HTML elements to help you as you are designing your site and content. You can also add your custom components here such as buttons to use as a style guide.

To create a new page, for example `https:///www.examples.com/about`:

I would simply create a new folder called `about` containing an `index.njk` file within.

___

The `/src/js` folder is where you would place your javascript entriy file(s) and modules/components, utility, etc. files that you wish to bundle together. If you want to write static javascript that does not get transpiled and bundled, then you can also simply place the files in the `/public` folder. If you plan on writing your code in ES6+, I would recommend using this method since it will run your code through some Babel plugins to make your code less error prone in older browsers by polyfilling many features. It also allows you easily import dependencies from your `/node_modules` folder, and break your code into smaller chunks that can then be imported into one of your entry files... typically making it easier to debug, test, change things...

___

The `/tasks` folder contains the Gulp and Webpack scripts to compile your files stored in the `/src` folder.
