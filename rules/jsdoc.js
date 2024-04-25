const error = {};

const warn = {
	'check-tag-names': {
		definedTags: ['values', 'model'],
	},
	'check-line-alignment': 'always',
	'no-bad-blocks': 'warn',
	'require-description': 'warn',
	'tag-lines': [
		'any',
		{
			startLines: 1,
		},
	],
};

const off = [];

export default {
	error,
	warn,
	off,
};