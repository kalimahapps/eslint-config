const rules = require('./rules/index');

module.exports = {
	root: true,
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
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
			},
			extends: ['plugin:vue/vue3-recommended'],
			rules: {
				'unicorn/filename-case': [
					'error',
					{
						case: 'pascalCase',
					},
				],
				'@typescript-eslint/no-unused-vars': 'off',
			},
			env: {
				'vue/setup-compiler-macros': true,
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
		},
		{
			// Eslint does not support ESM yet, so we need to disable
			// the rule for this file.
			files: ['.eslintrc.js'],
			rules: { 'unicorn/prefer-module': 'off' },
		},
		{
			files: ['*.json', '*.json5', '*.jsonc'],
			parser: 'jsonc-eslint-parser',
			extends: ['plugin:jsonc/recommended-with-jsonc'],
		},
		{
			files: ['settings.json'],
			parser: 'jsonc-eslint-parser',
			rules: {
				// Sort keys in settings.jso alphabetically
				// First, sort keys that are not in brackets
				// Then, sort keys that are in brackets
				'jsonc/sort-keys': [
					'warn',
					{
						pathPattern: '^$',
						order: [
							{
								keyPattern: '^[A-Za-z.]+$',
								order: {
									type: 'asc',
								},
							},
							{
								keyPattern: '\[[^\s\]]+',
								order: {
									type: 'asc',
								},
							},
						],
					},
				],
			},
		},
		{
			files: ['package.json'],
			parser: 'jsonc-eslint-parser',
			rules: {
				// Sort keys in package.json alphabetically
				// Also, sort some nested objects alphabetically
				'jsonc/sort-keys': [
					'warn',
					{
						pathPattern: '^$',
						order: [
							'publisher',
							'name',
							'displayName',
							'description',
							'author',
							'version',
							'homepage',
							'repository',
							'bugs',
							'type',
							'private',
							'packageManager',
							'license',
							'activationEvents',
							'contributes',
							'scripts',
							'dependencies',
							'peerDependencies',
							'peerDependenciesMeta',
							'optionalDependencies',
							'devDependencies',
							'funding',
							'keywords',
							'categories',
							'sideEffects',
							'exports',
							'main',
							'module',
							'unpkg',
							'jsdelivr',
							'types',
							'typesVersions',
							'bin',
							'icon',
							'files',
							'engines',
							'pnpm',
							'overrides',
							'resolutions',
							'husky',
							'simple-git-hooks',
							'lint-staged',
							'eslintConfig',
						],
					},
					{
						pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
						order: {
							type: 'asc',
						},
					},
					{
						pathPattern: '^(?:contributes|activationPoints|scripts)',
						order: {
							type: 'asc',
						},
					},
					{
						pathPattern: '^exports.*$',
						order: [
							'types',
							'require',
							'import',
						],
					},
				],
			},
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