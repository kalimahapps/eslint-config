const {
	transform,
	transformOff,
} = require('../transforms');

const {
	error: vueError,
	warning: vueWarning,
	off: vueOff,
} = require('./vue');

const {
	error: jsdocError,
	warning: jsdocWarning,
	off: jsdocOff,
} = require('./jsdoc');

const {
	error: unicornError,
	warning: unicornWarning,
	off: unicornOff,
} = require('./unicorn');

const {
	error: nError,
	warning: nWarning,
	off: nOff,
} = require('./n');

const {
	error: eslintError,
	warning: eslintWarning,
	off: eslintOff,
} = require('./eslint');

const {
	error: typescriptError,
	warning: typescriptWarning,
	off: typescriptOff,
} = require('./typescript');

const errorsRules = {
	'vue': vueError,
	'jsdoc': jsdocError,
	'unicorn': unicornError,
	'n': nError,
	'eslint': eslintError,
	'@typescript-eslint': typescriptError,
};

const warningRules = {
	'vue': vueWarning,
	'jsdoc': jsdocWarning,
	'unicorn': unicornWarning,
	'n': nWarning,
	'eslint': eslintWarning,
	'@typescript-eslint': typescriptWarning,
};

const offRules = {
	'vue': vueOff,
	'jsdoc': jsdocOff,
	'unicorn': unicornOff,
	'n': nOff,
	'eslint': eslintOff,
	'@typescript-eslint': typescriptOff,
};

const buildError = transform(errorsRules, 'error');
const buildWarning = transform(warningRules, 'warn');
const buildOff = transformOff(offRules);

module.exports = {
	...buildError,
	...buildWarning,
	...buildOff,
};