module.exports = {
	"extends": ["./rules/react","prettier"],
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
	},
	"settings": {
		"react": {
			"version": "detect"
		}
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
