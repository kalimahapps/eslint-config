const error = {};

const warn = {
	'no-bigint-literals': 'warn',
	'no-binary-expression': 'warn',
	'no-binary-numeric-literals': 'warn',
	'no-dupe-keys': 'warn',
	'no-escape-sequence-in-identifier': 'warn',
	'no-floating-decimal': 'warn',
	'no-hexadecimal-numeric-literals': 'warn',
	'no-infinity': 'warn',
	'no-multi-str': 'warn',
	'no-nan': 'warn',
	'no-number-props': 'warn',
	'no-octal-numeric-literals': 'warn',
	'no-octal': 'warn',
	'no-parenthesized': 'warn',
	'no-plus-sign': 'warn',
	'no-regexp-literals': 'warn',
	'no-sparse-arrays': 'warn',
	'no-template-literals': 'warn',
	'no-undefined-value': 'warn',
	'no-unicode-codepoint-escapes': 'warn',
	'no-useless-escape': 'warn',
	'quote-props': 'warn',
	'quotes': 'warn',
	'space-unary-ops': 'warn',
	'valid-json-number': 'warn',
	'vue-custom-block/no-parsing-error': 'warn',
	'array-bracket-spacing': 'never',
	'array-bracket-newline': { multiline: true },
	'array-element-newline': 'consistent',
	'indent': ['tab'],
	'key-spacing': {
		beforeColon: false,
		afterColon: true,
		mode: 'strict',
	},
	'comma-style': 'last',
};

const off = [];

export default {
	error,
	warn,
	off,
};