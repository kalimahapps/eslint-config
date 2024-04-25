import rules from './rules/index.js';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import VueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import importNewLine from 'eslint-plugin-import-newlines';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import nPlugin from 'eslint-plugin-n';

export default [
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
	nPlugin.configs['flat/recommended-script'],
	{
		rules: {
			...rules,
			...eslintPluginUnicorn.configs.recommended.rules,
			'import-newlines/enforce': [
				'warn', {
					'items': 4,
					'max-len': 100,
					'semi': true,
				},
			],
		},
		plugins: {
			jsdoc,
			'import-newlines': importNewLine,
			'unicorn': eslintPluginUnicorn,

			// import: importPlugin,
		},
		settings: {
			jsdoc: {
				tagNamePreference: { returns: 'return' },
			},
		},
	},
	{
		files: ['*.vue', '**/*.vue'],
		languageOptions: {
			parser: VueParser,
			parserOptions: {
				parser: tsParser,
				ecmaFeatures: {
					jsx: true,
				},
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
		rules: {
			'unicorn/filename-case': [
				'error',
				{
					case: 'pascalCase',
				},
			],
		},
	},
	{
		files: ['**/settings.json'],
		rules: {
			// Sort keys in settings.json alphabetically
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
		files: ['**/tsconfig.json'],
		rules: {
			'jsonc/sort-keys': [
				'warn',
				{
					pathPattern: '^$',
					order: [
						'compilerOptions',
						'include',
						'exclude',
					],
				},
				{
					pathPattern: '^compilerOptions$',
					order: [
						{
							keyPattern: '^(?!paths$)',
							order: {
								type: 'asc',
							},
						},
						{
							keyPattern: '^paths$',
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
		files: ['**/package.json'],
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
];