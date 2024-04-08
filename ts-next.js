module.exports = {	
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["@typescript-eslint"],
	"extends": ["./rules/ts-next", "prettier"],
	"env": {
		"browser": true,
		"es2021": true
	}
}