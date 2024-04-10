module.exports = {
	"extends": [
		"airbnb"
	],
	"rules": {
		// "arrow-parens": ["error", "as-needed"], --> depricated
		// "comma-dangle": ["error", "never"], --> depricated + same as prettier trailingComma
		"dot-notation": "off",
		"import/newline-after-import": "off",
		"import/no-extraneous-dependencies": [
			"error",
			{
				"devDependencies": true,
				"optionalDependencies": true,
				"peerDependencies": true
			}
		],
		"import/no-unresolved": "off",
		// "indent": ["error", "tab"], --> depricated + fixed with prettier
		// "key-spacing": "off", --> depricated
		// "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }], --> depricated
		// "newline-before-return": "error", --> depricated use: padding-line-between-statements: [ "error", { blankLine: "always", prev: "*", next: "return" }]
		// "no-mixed-operators": ["error", {
		// 	"groups": [
		// 		["%", "**"],
		// 		["%", "+"],
		// 		["%", "-"],
		// 		["%", "*"],
		// 		["%", "/"],
		// 		["&", "|", "<<", ">>", ">>>"],
		// 		["==", "!=", "===", "!=="],
		// 		["&&", "||"]
		// 	],
		// 	"allowSamePrecedence": false
		// }], --> depricated
		"no-multi-assign": "off", // why off?
		// "no-multi-spaces": "off", --> depricated
		"no-param-reassign": ["error", { "props": false}],
		"no-plusplus": "off",
		// "no-tabs": "off", --> depricated
		"no-unused-vars": "warn", // is in eslint:recommended, but error?
		// "object-curly-spacing": ["error", "never"], --> depricated
		// "object-curly-newline": "off", --> depricated
		// "padded-blocks": ["error", {
		// 	"blocks": "never",
		// 	"switches": "never",
		// 	"classes": "never"
		// }],  --> depricated
		// "padding-line-between-statements": [
		// 	"error", {
		// 		"blankLine": "always",
		// 		"prev": [
		// 			"break",
		// 			"case",
		// 			"class",
		// 			"function",
		// 			"let",
		// 			"const",
		// 			"var"
		// 		],
		// 		"next": "*"
		// 	},
		// 	{
		// 		"blankLine": "always",
		// 		"prev": "*",
		// 		"next": [
		// 			"let",
		// 			"const",
		// 			"var"
		// 		]
		// 	},
		// 	{ "blankLine": "any", "prev": ["const", "let", "var"], next: ["const", "let", "var"]},
		// 	{ "blankLine": "always", "prev": ["multiline-const"], "next": "*"},
		// 	{ "blankLine": "always", "prev": ["multiline-let"], "next": "*"},
		// 	{ "blankLine": "always", "prev": ["multiline-var"], "next": "*"},
		// 	{ "blankLine": "always", "prev": "*", "next": ["multiline-const"]},
		// 	{ "blankLine": "always", "prev": "*", "next": ["multiline-let"]},
		// 	{ "blankLine": "always", "prev": "*", "next": ["multiline-var"]},
		// 	{ "blankLine": "always", "prev": "*", "next": ["block", "block-like"]},
		// 	{ "blankLine": "always", "prev": ["block", "block-like"], "next": "*"}
		// ], --> depricated
		"prefer-destructuring": "off",
		// "quote-props": ["error", "consistent"], --> depricated
		// "wrap-iife": ["error", "inside"] --> depricated
	}
}
