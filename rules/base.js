module.exports = {
	"extends": [
		"airbnb",
		"eslint:recommended",
	],
	"rules": {
		"import/newline-after-import": "off",
		"import/no-extraneous-dependencies": [ 
			"error",
			{
				"devDependencies": true,
				"optionalDependencies": true,
				"peerDependencies": true
			}
		],
		"import/extensions": "off",

		"dot-notation": "off",												// OFF: Access properties using the dot notation (foo.bar) instead of square-bracket notation (foo["bar"])
		"no-multi-assign": ["error", { "ignoreNonDeclaration": true }], 	// Disallow use of chained assignment expressions (const foo = bar = 0;), allows chains that don’t include initializations
		"no-param-reassign": ["error", { "props": false}],					// Disallow reassignment of function parameters, but allow modifying properties of parameters
		"no-plusplus": "off",												// OFF: Disallow the unary operators ++ and --
		"no-unused-vars": "warn", 											// No unused variables (eslint:recommended gives error)
		"prefer-destructuring": "off",										// OFF: Prefer destructuring from arrays and objects

		"@stylistic/js/padding-line-between-statements": ["error", {
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
			{ "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
			{ "blankLine": "always", "prev": ["multiline-const"], "next": "*"},
			{ "blankLine": "always", "prev": ["multiline-let"], "next": "*"},
			{ "blankLine": "always", "prev": ["multiline-var"], "next": "*"},
			{ "blankLine": "always", "prev": "*", "next": ["multiline-const"]},
			{ "blankLine": "always", "prev": "*", "next": ["multiline-let"]},
			{ "blankLine": "always", "prev": "*", "next": ["multiline-var"]},
			{ "blankLine": "always", "prev": "*", "next": ["block", "block-like"]},
			{ "blankLine": "always", "prev": ["block", "block-like"], "next": "*"}
		],
	}
}
