import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
	// error
	'accessor-pairs': [
		'error', {
			setWithoutGet: true,
			enforceForClassMembers: true,
		},
	],
	'array-callback-return': [
		'error', {
			allowImplicit: false,
			checkForEach: false,
		},
	],
	'no-self-compare': 'error',
	'no-template-curly-in-string': 'error',
	'no-unreachable-loop': 'error',
	'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
	'default-case': 'error',
	'default-case-last': 'error',
	'no-alert': 'error',
	'no-else-return': 'error',
	'no-sequences': 'error',
	'prefer-const': [
		'error', {
			destructuring: 'all',
		},
	],
	'func-call-spacing': ['error', 'never'],
	'no-whitespace-before-property': 'error',
	'rest-spread-spacing': ['error', 'never'],
	'semi': ['error', 'always'],
	'semi-spacing': [
		'error', {
			before: false,
			after: true,
		},
	],
	'semi-style': ['error', 'last'],

	// Warn
	'no-var': 'warn',
	'object-shorthand': ['warn', 'properties'],
	'no-unmodified-loop-condition': 'warn',
	'no-use-before-define': [
		'warn', {
			functions: true,
			classes: true,
			variables: true,
			allowNamedExports: false,
		},
	],
	'arrow-body-style': ['warn', 'always'],
	'block-scoped-var': 'warn',
	'camelcase': ['warn', { properties: 'never' }],
	'complexity': ['warn', { max: 6 }],
	'default-param-last': 'warn',
	'dot-notation': 'warn',
	'eqeqeq': ['warn', 'smart'],
	'func-style': ['warn', 'expression'],
	'guard-for-in': 'warn',
	'id-length': [
		'warn', {
			min: 2,
			max: 30,
			exceptions: [
			// a and b are common in sort function
				'a',
				'b',

				// x and y are common in math functions
				'x',
				'y',
			],
		},
	],
	'max-depth': ['warn', { max: 3 }],
	'max-lines': [
		'warn', {
			max: 700,
			skipBlankLines: true,
			skipComments: true,
		},
	],
	'max-lines-per-function': ['warn', 100],
	'max-nested-callbacks': ['warn', { max: 3 }],
	'max-params': ['warn', { max: 6 }],
	'no-empty-function': 'warn',
	'no-floating-decimal': 'warn',
	'no-implicit-coercion': 'warn',
	'no-lone-blocks': 'warn',
	'no-lonely-if': 'warn',
	'no-loop-func': 'warn',
	'no-mixed-operators': 'warn',
	'no-multi-str': 'warn',
	'no-negated-condition': 'warn',
	'no-nested-ternary': 'warn',
	'no-octal-escape': 'warn',
	'no-param-reassign': 'warn',
	'no-script-url': 'warn',
	'no-throw-literal': 'warn',
	'no-underscore-dangle': 'warn',
	'no-unneeded-ternary': 'warn',
	'no-useless-call': 'warn',
	'no-useless-return': 'warn',
	'prefer-destructuring': 'warn',
	'prefer-named-capture-group': 'warn',
	'prefer-object-spread': 'warn',
	'prefer-promise-reject-errors': 'warn',
	'prefer-regex-literals': 'warn',
	'prefer-rest-params': 'warn',
	'prefer-spread': 'warn',
	'prefer-template': 'warn',
	'require-await': 'warn',
	'require-unicode-regexp': 'warn',
	'yoda': ['warn', 'never'],
	'curly': ['warn', 'all'],
};

export default rules;