import rules from './rules/index.js';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import pluginVue from 'eslint-plugin-vue';
import VueParser from 'vue-eslint-parser';
import jsdoc from 'eslint-plugin-jsdoc';
import jsoncPlugin from 'eslint-plugin-jsonc';
import jsonParser from 'jsonc-eslint-parser';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import nPlugin from 'eslint-plugin-n';
import eslintPluginYml from 'eslint-plugin-yml';
import yamlParser from 'yaml-eslint-parser';
import stylistic from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint/universal';
import type { CompatiblePlugin } from 'node_modules/typescript-eslint/dist/compatibility-types.js';
import { globalIgnores } from 'eslint/config';

const config: Linter.Config[] = [
	globalIgnores([
		'!.vitepress/',
		'!**/.github/**',
		'**/node_modules/',
		'**/dist/',
		'**/build',
		'**/coverage',
		'**/public',
		'**/static',
		'**/vendor',
		'**/tmp',
		'**/temp',
		'**/out/*',
		'**/output/*',
	]),
	...pluginVue.configs['flat/recommended'],
	nPlugin.configs['flat/recommended-script'],
	{
		rules: {
			...rules.jsdoc,
			...rules.n,
			...rules.unicorn,
			...eslintPluginUnicorn.configs.recommended.rules,
		},
		plugins: {
			jsdoc,
			'unicorn': eslintPluginUnicorn,
			'@stylistic': stylistic,
		},
		settings: {
			jsdoc: {
				tagNamePreference: { returns: 'return' },
			},
		},
	},
	{
		files: ['**/*.?([cm])[jt]s?(x)'],
		languageOptions: {
			ecmaVersion: 2022,
			globals: {
				document: 'readonly',
				navigator: 'readonly',
				window: 'readonly',
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 2022,
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		rules: {
			...eslint.configs.recommended.rules,
			...stylistic.configs.recommended.rules,
			...rules.eslint,
			...rules.eslintStylistic,
		},
	},
	{
		files: ['**/*.y?(a)ml'],
		plugins: { yml: eslintPluginYml },
		ignores: ['**/pnpm-lock.yaml'],
		languageOptions: {
			parser: yamlParser,
		},
		rules: {
			...rules.yml,
		},
	},
	{
		files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
		plugins: { '@typescript-eslint': tsEslint.plugin },
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
			},
		},
		rules: {
			...tsEslint.configs.recommended[0].rules,

			// ...tsEslint.configs.stylistic[0].rules,
			...rules.typescript,
			'no-undef': 'off',
			'no-unused-vars': 'off',
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
		plugins: { '@typescript-eslint': tsEslint.plugin },
		rules: {
			...rules.vue,
			...rules.typescript,
			...eslint.configs.recommended.rules,
			...stylistic.configs.recommended.rules,
			...rules.eslint,
			...rules.eslintStylistic,
			'unicorn/filename-case': [
				'warn',
				{
					case: 'pascalCase',
				},
			],
			'no-undef': 'off',
			'no-unused-vars': 'off',
		},
	},
	{
		files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
		rules: rules.jsonc,
		languageOptions: {
			parser: jsonParser,
		},
		plugins: {
			jsonc: jsoncPlugin as CompatiblePlugin,
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

export default config;