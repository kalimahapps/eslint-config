import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
	// Error
	'unicorn/prevent-abbreviations': [
		'error', {
			replacements: {
				props: false,
				prop: false,
				attrs: false,
			},
		},
	],

	// Warn
	'unicorn/prefer-string-replace-all': 'warn',

	// Off
	'unicorn/no-array-for-each': 'off',
	'unicorn/no-array-reduce': 'off',
	'unicorn/no-keyword-prefix': 'off',
	'unicorn/prefer-set-has': 'off',
	'unicorn/no-array-callback-reference': 'off',
	'unicorn/require-post-message-target-origin': 'off',
	'unicorn/prefer-json-parse-buffer': 'off',
	'unicorn/expiring-todo-comments': 'off',
};

export default rules;