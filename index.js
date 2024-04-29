module.exports = {
	"extends": [
		"./rules/base",
		"prettier",
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
	},
	"overrides": [
		{
			"files": ["*.tsx", " *.ts"],
			"parser": '@typescript-eslint/parser',
			"parserOptions": {
				"ecmaVersion": "latest",
				"sourceType": 'module',
			},
			"plugins": ["@typescript-eslint"],
			"extends":["./rules/typescript", "plugin:@typescript-eslint/recommended"]
		}
	],
}
