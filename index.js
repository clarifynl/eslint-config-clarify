module.exports = {
	"extends": [
		"./rules/base",
		"prettier"
	],
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": "latest",
		"requireConfigFile": false,
		"allowImportExportEverywhere": true
	},

	"env": {
		"browser": true,
		"node": true
	}
}
