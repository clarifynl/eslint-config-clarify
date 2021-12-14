module.exports = {
	"extends": [
		"./rules/react"
	],

	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": "latest",
		"requireConfigFile": false,
		"allowImportExportEverywhere": true,
		"babelOptions": {
			"presets": ["@babel/preset-react"]
		}
	},

	"env": {
		"browser": true,
		"node": true
	}
}
