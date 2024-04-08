module.exports = {
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"babelOptions": {
			presets: [require.resolve('next/babel')],
		  },
	},
	"extends": ["./rules/next", "prettier"],
	"env": {
		"browser": true,
		"es2021": true,
	},
};
