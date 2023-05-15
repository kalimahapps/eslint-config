const error = {};

const warning = {
	'check-tag-names': {
		definedTags: ['values', 'model'],
	},
	'check-line-alignment': 'always',
	'no-bad-blocks': 'warn',
	'tag-lines': [
		'any',
		{
			startLines: 1,
		},
	],
};

const off = [];

module.exports = {
	error,
	warning,
	off,
};