const rules = require('./rules/index');

module.exports = {
	root: true,
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/all',
		'plugin:jsdoc/recommended',
		'plugin:n/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'plugin:import/recommended',
	],
	plugins: ['unicorn', 'jsdoc', 'promise', 'import-newlines'],
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
			},
			rules: {
				'unicorn/filename-case': [
					'error',
					{ case: 'pascalCase' },
				],
				'@typescript-eslint/no-unused-vars': 'off',
			},
			env: { 'vue/setup-compiler-macros': true },
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
		},
		{
			// Eslint does not support ESM yet, so we need to disable
			// the rule for this file.
			files: ['.eslintrc.js'],
			rules: { 'unicorn/prefer-module': 'off' },
		},
	],
	settings: {
		jsdoc: {
			tagNamePreference: { returns: 'return' },
		},
	},
	rules: {
		...rules,

		// This plugin has one rule, no need to create a separate file for it.
		'import-newlines/enforce': [
			'warn', {
				'items': 4,
				'max-len': 100,
				'semi': true,
			},
		],
	},
};