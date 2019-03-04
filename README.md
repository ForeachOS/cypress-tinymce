[![GitHub package.json version](https://img.shields.io/github/package-json/v/foreachOS/cypress-tinymce.svg)](https://github.com/foreachOS/cypress-tinymce)
[![Travis (.org)](https://img.shields.io/travis/ForeachOS/cypress-tinymce.svg)](https://travis-ci.org/ForeachOS/cypress-tinymce)
[![npm (scoped)](https://img.shields.io/npm/v/@foreachbe/cypress-tinymce.svg)](https://www.npmjs.com/package/@foreachbe/cypress-tinymce)

# cypress-tincymce

Extra helper [Cypress custom commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax) for
easier interacting with [TinyMCE](https://www.tiny.cloud/).

## commands

### getTinyMce(id)

This will return the `tinymce` js instance for the given `id`.

### setContent(text)

This will set the content of the TinyMCE editor:

```javascript

  cy
    .getTinyMce('someid')
    .setContent('This is the new content');

```

## Installation

```bash
yarn add @foreachbe/cypress-tinymce -D
```

Add the following to your `cypress/support/index` file:

```javascript
import '@foreachbe/cypress-tinymce'
```
