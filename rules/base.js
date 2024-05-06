module.exports = {
	"extends": ["eslint:recommended", "eslint-config-airbnb-base"],
	"rules": {
		"import/newline-after-import": "warn",									// Warn for new line after imports
		"import/extensions": "off",												// OFF: Ensure consistent use of file extension within the import path
		"import/no-unresolved": "off",											// OFF: Ensure imports point to a file/module that can be resolved --> problematic with docker

		"dot-notation": "off",													// OFF: Access properties using the dot notation (foo.bar) instead of square-bracket notation (foo["bar"])
		"no-multi-assign": ["error", { "ignoreNonDeclaration": true }], 		// Disallow use of chained assignment expressions (const foo = bar = 0;), allows chains that don’t include initializations
		"no-param-reassign": ["error", { "props": false}],						// Disallow reassignment of function parameters, but allow modifying properties of parameters
		"no-plusplus": "off",													// OFF: Disallow the unary operators ++ and --
		"no-unused-vars": "warn", 												// Warn for unused variables
		"prefer-destructuring": "off",											// OFF: Prefer destructuring from arrays and objects
		"prefer-arrow-callback": [ "warn", { "allowNamedFunctions": true } ], 	// Warn to prefer arrow callbacks over anonymous functions
		"no-use-before-define": ["error", {
			"functions": false,
			"classes": true,
			"variables": true,
			"allowNamedExports": false
		}],																		// Allow use of functions before defined (but not variables)
		"object-shorthand": ["error", "consistent"],							// Require consitent use of object shorthand, either all shorthands or none
	}
}
