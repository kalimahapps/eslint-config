const error = {
	'prevent-abbreviations': {
		replacements: {
			props: false,
			prop: false,
			attrs: false,
		},
	},
};

const warn = { 'prefer-string-replace-all': 'warn' };

const off = [
	'no-array-for-each',
	'no-array-reduce',
	'no-keyword-prefix',
	'prefer-set-has',
	'no-array-callback-reference',
	'require-post-message-target-origin',
	'prefer-json-parse-buffer',
];

export default {
	error,
	warn,
	off,
};