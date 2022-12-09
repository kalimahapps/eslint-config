module.exports = {
	root: true,
	env: { node: true },
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
		ecmaFeatures: {
			globalReturn: false,
			impliedStrict: false,
			jsx: false,
		},
	},

	extends: ['@kalimahapps'],
};
