module.exports = {
	"extends": ["./rules/next", "prettier"],
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"requireConfigFile": false,
		"allowImportExportEverywhere": true
	},
	"env": {
		"browser": true,
		"es2021": true,
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
};
