module.exports = {
	"extends": [
		"./base",
		"airbnb/hooks"
	],

	"rules": {
		"react/jsx-indent": ["error", "tab", {
			"indentLogicalExpressions": true
		}],
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "off"
	}
}
