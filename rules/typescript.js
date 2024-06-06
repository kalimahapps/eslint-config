const error = { 'consistent-type-imports': 'error' };
const warn = {
	'semi': 'warn',
	'indent': ['tab'],
	'ban-ts-comment':
	{
		'ts-ignore': 'allow-with-description',
	},
};
const off = [];
export default {
	error,
	warn,
	off,
};