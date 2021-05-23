module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:jest/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"ignorePatterns": [
		"*.test.js"
	],
	"rules": {
		"no-var": "error",
		"no-console": "error",
		"no-throw-literal": "error",
		"no-extra-parens": ["error", "all"],
		"default-case": "error",
		"comma-dangle": ["error", "never"],
	}
};
