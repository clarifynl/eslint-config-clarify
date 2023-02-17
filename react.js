module.exports = {
	"env": {
		"browser": true,
		"node": true
	},
	"extends": [
		"./rules/react",
		"prettier"
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
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}
