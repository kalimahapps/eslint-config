const rules = require('./rules/index');

module.exports = {
	root: true,
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/all',
		'plugin:vue/vue3-recommended',
		'plugin:jsdoc/recommended',
		'plugin:n/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
	],
	plugins: ['unicorn', 'jsdoc', 'promise'],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: { parser: '@typescript-eslint/parser' },
			rules: {
				'unicorn/filename-case': [
					'error',
					{ case: 'pascalCase' },
				],
			},
		},
		{
			// Eslint does not support ESM yet, so we need to disable
			// the rule for this file.
			files: ['.eslintrc.js'],
			rules: { 'unicorn/prefer-module': 'off' },
		},
	],
	settings: { jsdoc: { tagNamePreference: { returns: 'return' } } },
	rules,
};