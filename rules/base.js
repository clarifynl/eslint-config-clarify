module.exports = {
	"extends": [
		"airbnb"
	],

	"plugins": [
		"prettier"
	],

	"rules": {
		"arrow-parens": ["error", "as-needed"],
		"comma-dangle": ["error", "never"],
		"dot-notation": "off",
		"import/newline-after-import": "off",
		"import/no-unresolved": "off",
		"indent": ["error", "tab"],
		"key-spacing": ["error", {
			"beforeColon": false,
			"afterColon": true,
			"align": "colon"
		}],
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
		"object-curly-spacing": ["error", "never"],
		"padded-blocks": ["error", {
			"blocks": "never",
			"switches": "never",
			"classes": "always"
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
			{ "blankLine": "always", "prev": "*", "next": ["const", "let", "var"]},
			{ "blankLine": "never", "prev": ["const"], "next": ["const"]},
			{ "blankLine": "never", "prev": ["let"], "next": ["let"]},
			{ "blankLine": "never", "prev": ["var"], "next": ["var"]},
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
		"wrap-iife": ["error", "inside"],
		"prettier/prettier": [
			'error',
			{
				"semi": true,
				"singleQuote": true,
				"bracketSpacing": false,
				"brackerSameLine": false,
				"quoteProps": "consistent",
				"printWidth": 100,
				"useTabs": true,
				"jsxSingleQuote": false,
				"trailingComma": "none",
				"arrowParens": "avoid",
				"proseWrap": "preserve",
				"endOfLine": "lf"
			}
		]
	}
}
