module.exports = {
	"extends": [
		"airbnb",
		"eslint:recommended",
	],
	"rules": {
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
		"no-multi-assign": "off", // why off?
		"no-param-reassign": ["error", { "props": false}],
		"no-plusplus": "off",
		"no-unused-vars": "warn", // is in eslint:recommended, but error?
		"prefer-destructuring": "off",
	}
}
