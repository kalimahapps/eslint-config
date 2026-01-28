import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
	// error
	'yml/no-empty-document': 'error',
	'yml/no-empty-key': 'error',
	'yml/no-empty-mapping-value': 'error',
	'yml/no-empty-sequence-entry': 'error',
	'yml/no-irregular-whitespace': 'error',
	'yml/no-tab-indent': 'error',
	'yml/indent': 'error',
	'yml/vue-custom-block/no-parsing-error': 'error',

	// warn
	'yml/quotes': [
		'warn', {
			avoidEscape: false,
		},
	],
	'yml/block-mapping-colon-indicator-newline': 'warn',
};

export default rules;