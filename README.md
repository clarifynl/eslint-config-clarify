# Clarify eslint config

This is a linter configuration to use when developing JavaScript-based projects. It uses eslint and it's based on Airbnb's configuration as a sensible base config.

It provides two configurations, one for regular JS projects and one specifically for React projects.

## Installation:

```
npm install --save-dev github:clarifynl/eslint-config-clarify     
```

In your `package.json`, add the following:

```js
"eslintConfig": {
	"extends": ["clarify"]
}
```

Or, for React-based projects:
```js
"eslintConfig": {
	"extends": ["clarify/react"]
}
```
