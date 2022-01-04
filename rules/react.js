module.exports = {
	"extends": [
		"./base",
		"airbnb/hooks",
		"prettier"
	],

	"rules": {
		"react/jsx-indent": ["error", "tab", {
			"indentLogicalExpressions": true
		}],
		"react/react-in-jsx-scope": "off"
	}
}
