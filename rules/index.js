import eslintRules from './eslint.js';
import importRules from './import.js';
import jsdocRules from './jsdoc.js';
import nRules from './n.js';
import typescriptRules from './typescript.js';
import unicornRules from './unicorn.js';
import vueRules from './vue.js';

import { outputRules } from '../transforms.js';

export default {
	...outputRules('eslint', eslintRules),
	...outputRules('vue', vueRules),
	// ...outputRules('import', importRules),
	...outputRules('jsdoc', jsdocRules),
	...outputRules('n', nRules),
	...outputRules('@typescript-eslint', typescriptRules),
	...outputRules('unicorn', unicornRules),
};

/*
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
	error: typescriptError,
	warning: typescriptWarning,
	off: typescriptOff,
} = require('./typescript');

const {
	error: importError,
	warning: importWarning,
	off: importOff,
} = require('./import');
 */
const errorsRules = {
	// eslint: eslintError,

	/* 'vue': vueError,
	'jsdoc': jsdocError,
	'unicorn': unicornError,
	'n': nError,
	'@typescript-eslint': typescriptError,
	'import': importError, */
};

const warningRules = {
	// eslint: eslintWarning,

	/* 'vue': vueWarning,
	'jsdoc': jsdocWarning,
	'unicorn': unicornWarning,
	'n': nWarning,
	'@typescript-eslint': typescriptWarning,
	'import': importWarning, */
};

const offRules = {
	// eslint: eslintOff,

	/* 'vue': vueOff,
	'jsdoc': jsdocOff,
	'unicorn': unicornOff,
	'n': nOff,
	'@typescript-eslint': typescriptOff,
	'import': importOff, */
};

/*
const buildError = transform(errorsRules, 'error');
const buildWarning = transform(warningRules, 'warn');
const buildOff = transformOff(offRules);

export default {
	...buildError,
	...buildWarning,
	...buildOff,
}; */

/* module.exports = {
	...buildError,
	...buildWarning,
	...buildOff,
};
 */