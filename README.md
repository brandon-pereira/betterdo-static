# Flash

Flash allows you to quickly and easily build robust web applications and websites. It takes care of the heavy lifting and provides you with a shell for your application. Our goal is simple, provide the user with your website as fast as possible.

## Features

- **Code Modern 🚀**  Built-in support for ES6 (including [async/await](#leveraging-async-await))
- **[Preloader](#preloader) 🕰** - Display a preloader or app shell while your full application loads.
- **[Dependency Manager](#preloader) 📦** - On top of supporting ES6 dynamic imports, we also provide you with a dependency manager for your css and javascript.
- **[Progress Web App 🏇](#progressive-web-app-usage)** - Flash builds you a service worker which caches all your dependencies, this means **built-in offline support!**
- **[Static Site Generator 🏢](#html-rendering)** - HTML can be built using data sources and also be separated into multiple files.
- **[Critical CSS/JS 🎨](#html-rendering)** - Define critical styles and scripts to be loaded in the head. This improves perceived performance.
- **[SVGs Everywhere 📐](#svg-usage)** - Flash provides you with multiple ways to leverage SVGs out of the box.

## Install

Currently Flash is installed with the full configuration exposed. This means you can easily modify it to your liking.

To install run the below, Replacing "myapp" with the name of your application or website.

```bash
mkdir myapp
cd myapp
git init
git remote add origin git@github.com:brandon-pereira/flash.git
git pull origin master
git remote remove origin
```

## Styles

Flash works on the principle of two types of stylesheets. Critical stylesheets (which get included on render), and 'passive stylesheets', which get included async.

- **Critical Styling:** Anything critical should be added to `./src/styles/critical.scss`. **These are added to the HTML head directly and will impact initial render**. Avoid using this file!
- **Add-on Styling:** Anything that's add-on should be added to `./src/styles/app.scss`. These are styles which are loaded async after the page is done loading.
- **Component Styling:** In your Javascript, when creating a new component you can import a scss file to include the stylesheet.

The benefit to the three files is page load. That's the main goal of Flash.

## Preloader

Flash has a built in pre-loader. This is what is shown after the dom is rendered, but before the required styles and javascript have been loaded.

You can define required dependencies like so:

```js
// index.js
dependencies.set('dependency1', import('./dependency1'));
dependencies.set('dependency2', import('./dependency2'));

// app.js
export default dependencies => {
    const dependency1 = dependencies.get('dependency1');
    dependency1.setRenderer(document.body);
};
```

Once your dependencies are loaded, app.js will be called and the preloader will go away.

Using a pre-loader can improve the perceived load time drastically.

## HTML Rendering

Flash provides the ability to render HTML dynamically. This is useful if you want to build a static site or simply separate your code into different files.

We are leveraging [Nunjucks](https://mozilla.github.io/nunjucks/) for this. Their documentation is excellent, and we're already using it a bit in the `./src/html/` folder to load the HTML head in dynamically.

We also use an `inline` tag which can be applied to svgs, css, or javascript to inline that file directly into the HTML. Although this should be used with caution (can create a lot of bloat), it is nice and is used internally to inline the critical css.

## SVG Usage

Flash abstracts away the nuances of using SVGs (minification, sprite sheets, etc.) so you can focus on the good stuff. Here are a couple of options for leveraging SVGs.

- **Inlining via Nunjucks** - This method is good if the SVG will only be used once. If it's used more than once, it's not good because this generates duplicate markup.

```html
{% include "./svgs/loader.svg" %}
```

- **Sprite sheet** - This method is good if the SVG is used in multiple spots or is used on multiple pages. The benefit is that the SVGs are loaded from an external file (which can be cached) and are referenced using an ID.

```html
<svg><use xlink:href="/icons.svg#your-svg-file-name"></use></svg>
```

## Progressive Web App Usage

TODO

## Leveraging Async Await

[Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) enable you to more cleanly write promises in Javascript. Flash has the ability to parse and interpret async functions, however it requires a browser polyfill for older browsers. To enable this polyfill, Un-comment the `import 'babel-polyfill';` line from `./scripts/index.js`. None of Flashes core functionality uses async/await, this means that you don't need this polyfill unless your application intends to leverage it.

## TODO

- Generate app manifest
- Document the PWA portion
