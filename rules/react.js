module.exports = {
	"extends": ["plugin:react/recommended", "airbnb", "airbnb/hooks", "./base"],
	"plugins": ["react"],
	"rules": {
		"react/react-in-jsx-scope": "off",												// OFF: Prevent missing React when using JSX
		"react/jsx-props-no-spreading": "off",											// OFF: Enforces that there is no spreading for any JSX attribute. 
		"react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],		// Allow JSX code in .jsx and .tsx files
		"react/prop-types": "off",														// OFF: Prevent missing props validation --> we use TypeScript
	}
}
