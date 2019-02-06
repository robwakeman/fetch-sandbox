# Fetch API Sandbox

## About

Fetch API sandbox to get data from local resources as well as a remote API.

Thanks to [Enoc](https://github.com/tenvega) for the [original code](https://github.com/tenvega/Fetch-API-Sandbox-Practice).

[Demo](http://dev.robwakeman.com/fetch-sandbox/)

I have amended the original code as follows:

**JavaScript**

- moved js to external file

- added [fetch](https://github.com/github/fetch) and [promise](https://github.com/taylorhakes/promise-polyfill) polyfills.

- transpiled the promise polyfill using the [online Babel transpiler](https://babeljs.io/repl/)

- added global exports variable to fetch.js to prevent console error: Uncaught ReferenceError: exports is not defined at fetch.js:3, as recommended [here](https://stackoverflow.com/questions/42497479/uncaught-referenceerror-exports-is-not-defined-in-filed-generated-by-typescript/43702240).

```javascript
var exports = {};
```

- added error handling to fetch requests

**HTML**

- amended markup

**CSS**

- added custom CSS
