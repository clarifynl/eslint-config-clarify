# Clarify eslint config

This is a linter configuration to use when developing JavaScript-based projects. It uses eslint and it's based on Airbnb's configuration as a sensible base config.

It provides three configurations, one for regular JS projects, one specifically for React projects and one for Next projects. In all cases, typescript will be
detected automatically.

## Installation:

```
npm install --save-dev @clarifynl/eslint-config-clarify
```

In your `package.json`, or in an `eslint.config.js` file add the following:

```js
"eslintConfig": {
	"extends": ["@clarifynl/clarify"]
}
```

Or, for React-based projects:

```js
"eslintConfig": {
	"extends": ["@clarifynl/clarify/react"]
}
```

Or, for Next-based projects:

```js
"eslintConfig": {
	"extends": ["@clarifynl/clarify/next"]
}
```
