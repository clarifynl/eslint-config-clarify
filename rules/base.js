module.exports = {
	"extends": [
		"airbnb"
	],
	"rules": {
		"arrow-parens": ["error", "as-needed"],
		"comma-dangle": ["error", "never"],
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
		"indent": ["error", "tab"],
		"key-spacing": "off",
		"lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
		"newline-before-return": "error",
		"no-mixed-operators": ["error", {
			"groups": [
				["%", "**"],
				["%", "+"],
				["%", "-"],
				["%", "*"],
				["%", "/"],
				["&", "|", "<<", ">>", ">>>"],
				["==", "!=", "===", "!=="],
				["&&", "||"]
			],
			"allowSamePrecedence": false
		}],
		"no-multi-assign": "off",
		"no-multi-spaces": "off",
		"no-param-reassign": ["error", { "props": false}],
		"no-plusplus": "off",
		"no-tabs": "off",
		"no-unused-vars": "warn",
		"object-curly-spacing": ["error", "never"],
		"object-curly-newline": "off",
		"padded-blocks": ["error", {
			"blocks": "never",
			"switches": "never",
			"classes": "never"
		}],
		"padding-line-between-statements": [
			"error", {
				"blankLine": "always",
				"prev": [
					"break",
					"case",
					"class",
					"function",
					"let",
					"const",
					"var"
				],
				"next": "*"
			},
			{
				"blankLine": "always",
				"prev": "*",
				"next": [
					"let",
					"const",
					"var"
				]
			},
			{ "blankLine": "any", "prev": ["const", "let", "var"], next: ["const", "let", "var"]},
			{ "blankLine": "always", "prev": ["multiline-const"], "next": "*"},
			{ "blankLine": "always", "prev": ["multiline-let"], "next": "*"},
			{ "blankLine": "always", "prev": ["multiline-var"], "next": "*"},
			{ "blankLine": "always", "prev": "*", "next": ["multiline-const"]},
			{ "blankLine": "always", "prev": "*", "next": ["multiline-let"]},
			{ "blankLine": "always", "prev": "*", "next": ["multiline-var"]},
			{ "blankLine": "always", "prev": "*", "next": ["block", "block-like"]},
			{ "blankLine": "always", "prev": ["block", "block-like"], "next": "*"}
		],
		"prefer-destructuring": "off",
		"quote-props": ["error", "consistent"],
		"wrap-iife": ["error", "inside"]
	}
}
