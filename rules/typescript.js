const error = { 'consistent-type-imports': 'error' };
const warning = {
	'semi': 'warn',
	'ban-ts-comment': [
		"warn",
		{
			"ts-ignore": "allow-with-description"
		}
	]
};
const off = [];

module.exports = {
	error,
	warning,
	off,
};