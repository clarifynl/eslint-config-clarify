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
		"node": true,
	},
	"ignorePatterns": ["**/dist/*", "**/node_modules/"],
	"overrides": [
		{
			"files": ["*.tsx", " *.ts"],
			"parser": '@typescript-eslint/parser',
			"parserOptions": {
				"ecmaVersion": "latest",
				"sourceType": 'module',
			},
			"plugins": ["@typescript-eslint"],
			"extends":["./rules/typescript"]
		}
	],
};
