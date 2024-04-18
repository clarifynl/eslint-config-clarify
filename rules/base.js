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
		"prefer-arrow-callback": [ "error", { "allowNamedFunctions": true } ], // Prefer arrow callbacks over anonymous functions
}
