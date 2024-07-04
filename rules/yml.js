
const error = {
	'no-empty-document': 'error',
	'no-empty-key': 'error',
	'no-empty-mapping-value': 'error',
	'no-empty-sequence-entry': 'error',
	'no-irregular-whitespace': 'error',
	'no-tab-indent': 'error',
	'indent': 'error',
	'vue-custom-block/no-parsing-error': 'error',
};
const warn = {
	'quotes': {
		avoidEscape: false,
	},
	'block-mapping-colon-indicator-newline': 'warn',
};
const off = [];

export default {
	error,
	warn,
	off,
};