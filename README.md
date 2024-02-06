# Shopify Boilerplate

<!-- banner (start) -->
<p align="center">
  <img src=".github/img/banner.svg" width="400px">
</p>
<!-- banner (end) -->

Shopify Boilerplate: Jumpstart your Shopify theme development quickly with this pre-configured setup including Webpack, ESLint, Prettier, react, etc...

## Installation

Clone the source code into your computer.

```bash
git clone git@github.com:alsogne/shopify-boilerplate.git
```

Install the project's dependencies.

```bash
npm install
```

## Usage

To begin, you must install the [Shopify CLI](https://shopify.dev/apps/tools/cli/installation) and log in to your online store.

### Serve

Run `webpack watch` and `serve` the theme in development mode.

```bash
npm start
```

## Notes

### Theme Assets

All files inside the `theme/assets` directory are ignored by `git`, except files starting with the `static` keyword in their filename.

### Webpack Encore

[Symfony Webpack Encore](https://symfony.com/doc/current/frontend.html) simplifies the integration of Webpack into your application by providing a streamlined and effective API. This tool encapsulates Webpack, offering a tidy and robust interface for bundling JavaScript modules, preprocessing CSS and JS, as well as compiling and minimizing assets. Encore delivers a professional asset system that is a joy to work with.

## Visual Studio Code Extensions

To speed up your productivity, you can install these extensions:

- [HTML CSS](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Shopify Liquid](https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid)
