const error = {
	'prevent-abbreviations': {
		replacements: {
			props: false,
			prop: false,
			attrs: false,
		},
	},
};

const warning = { 'prefer-string-replace-all': 'warn' };

const off = ['no-array-for-each', 'no-array-reduce', 'no-keyword-prefix', 'prefer-set-has'];

module.exports = {
	error,
	warning,
	off,
};