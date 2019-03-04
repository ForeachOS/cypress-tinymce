[![GitHub package.json version](https://img.shields.io/github/package-json/v/foreachOS/cypress-tinymce.svg)](https://github.com/foreachOS/cypress-tinymce)
[![Travis (.org)](https://img.shields.io/travis/ForeachOS/cypress-tinymce.svg)](https://travis-ci.org/ForeachOS/cypress-tinymce)
[![npm (scoped)](https://img.shields.io/npm/v/@foreachbe/cypress-tinymce.svg)](https://www.npmjs.com/package/@foreachbe/cypress-tinymce)

# cypress-tincymce

Extra helper [Cypress custom commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax) for
easier interacting with [TinyMCE](https://www.tiny.cloud/).

## commands

### getTinyMce(id)

This will return the `tinymce` js instance for the given `id`.

### setTinyMceContent(id, text)

This will set the content of the TinyMCE editor:

```javascript
  cy.setTinyMceContent('someid', 'This is the new content');
```

### getTinyMceContent(id)

This will return the content of the TinyMce editor for the given id.

```javascript
  cy.getTinyMceContent('someid');
```

## Installation

```bash
yarn add @foreachbe/cypress-tinymce -D
```

Add the following to your `cypress/support/index` file:

```javascript
import '@foreachbe/cypress-tinymce'
```
