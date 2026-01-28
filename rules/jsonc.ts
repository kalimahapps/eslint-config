import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
	// Warn
	'jsonc/no-bigint-literals': 'warn',
	'jsonc/no-binary-expression': 'warn',
	'jsonc/no-binary-numeric-literals': 'warn',
	'jsonc/no-dupe-keys': 'warn',
	'jsonc/no-escape-sequence-in-identifier': 'warn',
	'jsonc/no-floating-decimal': 'warn',
	'jsonc/no-hexadecimal-numeric-literals': 'warn',
	'jsonc/no-infinity': 'warn',
	'jsonc/no-multi-str': 'warn',
	'jsonc/no-nan': 'warn',
	'jsonc/no-number-props': 'warn',
	'jsonc/no-octal-numeric-literals': 'warn',
	'jsonc/no-octal': 'warn',
	'jsonc/no-parenthesized': 'warn',
	'jsonc/no-plus-sign': 'warn',
	'jsonc/no-regexp-literals': 'warn',
	'jsonc/no-sparse-arrays': 'warn',
	'jsonc/no-template-literals': 'warn',
	'jsonc/no-undefined-value': 'warn',
	'jsonc/no-unicode-codepoint-escapes': 'warn',
	'jsonc/no-useless-escape': 'warn',
	'jsonc/quote-props': 'warn',
	'jsonc/quotes': 'warn',
	'jsonc/space-unary-ops': 'warn',
	'jsonc/valid-json-number': 'warn',
	'jsonc/vue-custom-block/no-parsing-error': 'warn',
	'jsonc/array-bracket-spacing': ['warn', 'never'],
	'jsonc/array-bracket-newline': ['warn', { multiline: true }],
	'jsonc/array-element-newline': ['warn', 'consistent'],
	'jsonc/indent': ['warn', 'tab'],
	'jsonc/key-spacing': [
		'warn', {
			beforeColon: false,
			afterColon: true,
			mode: 'strict',
		},
	],
	'comma-style': ['warn', 'last'],
};

export default rules;