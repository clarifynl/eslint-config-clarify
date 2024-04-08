module.exports = {
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"extends": ["./rules/next", "prettier"],
	"env": {
		"browser": true,
		"es2021": true,
	},
};
