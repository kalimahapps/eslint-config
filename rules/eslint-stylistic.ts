import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
	'@stylistic/indent': ['warn', 'tab', { SwitchCase: 1 }],
	'@stylistic/quote-props': ['warn', 'consistent-as-needed'],
	'@stylistic/quotes': [
		'warn',
		'single',
		{
			avoidEscape: true,
			allowTemplateLiterals: 'never',
		},
	],
	'@stylistic/semi': 'warn',
	'@stylistic/array-bracket-newline': ['warn', { multiline: true }],
	'@stylistic/array-bracket-spacing': ['warn', 'never'],
	'@stylistic/array-element-newline': ['warn', 'consistent'],
	'@stylistic/arrow-parens': ['warn', 'always'],
	'@stylistic/arrow-spacing': [
		'warn', {
			before: true,
			after: true,
		},
	],
	'@stylistic/block-spacing': ['warn', 'always'],
	'@stylistic/dot-location': ['warn', 'property'],
	'@stylistic/brace-style': [
		'warn',
		'1tbs',
		{ allowSingleLine: true },
	],
	'@stylistic/comma-dangle': [
		'warn', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'never',
			exports: 'never',
			functions: 'never',
		},
	],
	'@stylistic/comma-spacing': [
		'warn', {
			before: false,
			after: true,
		},
	],
	'@stylistic/comma-style': ['warn', 'last'],
	'@stylistic/function-call-argument-newline': ['warn', 'consistent'],
	'@stylistic/function-call-spacing': ['warn', 'never'],
	'@stylistic/function-paren-newline': ['warn', 'consistent'],
	'@stylistic/key-spacing': [
		'warn', {
			beforeColon: false,
			afterColon: true,
		},
	],
	'@stylistic/keyword-spacing': [
		'warn', {
			before: true,
			after: true,
		},
	],
	'@stylistic/line-comment-position': ['warn', 'above'],
	'@stylistic/linebreak-style': ['warn', 'unix'],
	'@stylistic/lines-around-comment': [
		'warn', {
			beforeBlockComment: true,
			afterBlockComment: false,
			beforeLineComment: true,
			afterLineComment: false,
			allowBlockStart: true,
			allowBlockEnd: false,
			allowObjectStart: true,
			allowObjectEnd: false,
			allowArrayStart: true,
			allowArrayEnd: false,
		},
	],
	'@stylistic/lines-between-class-members': ['warn', 'always'],
	'@stylistic/max-len': [
		'warn', {
			code: 100,
			tabWidth: 4,
			comments: 100,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		},
	],
	'@stylistic/max-statements-per-line': ['warn', { max: 1 }],
	'@stylistic/member-delimiter-style': 'warn',
	'@stylistic/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
	'@stylistic/no-multi-spaces': 'warn',
	'@stylistic/no-multiple-empty-lines': [
		'warn', {
			max: 1,
			maxEOF: 0,
		},
	],
	'@stylistic/no-confusing-arrow': 'warn',
	'@stylistic/no-trailing-spaces': [
		'warn', {
			skipBlankLines: true,
			ignoreComments: true,
		},
	],
	'@stylistic/object-curly-newline': [
		'warn', {
			multiline: true,
			consistent: true,
		},
	],
	'@stylistic/object-curly-spacing': ['warn', 'always'],
	'@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: false }],
	'@stylistic/padded-blocks': ['warn', 'never'],
	'@stylistic/space-in-parens': ['warn', 'never'],
	'@stylistic/space-infix-ops': ['warn'],
	'@stylistic/space-unary-ops': ['warn'],
	'@stylistic/switch-colon-spacing': [
		'warn', {
			after: true,
			before: false,
		},
	],
	'@stylistic/template-curly-spacing': ['warn', 'never'],
	'@stylistic/template-tag-spacing': ['warn', 'always'],

	// Off
	'@stylistic/no-tabs': 'off',
	'@stylistic/eol-last': 'off',
};

export default rules;