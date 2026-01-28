import eslintRules from './eslint';
import eslintStylisticRules from './eslint-stylistic';
import jsdocRules from './jsdoc';
import nRules from './n';
import jsonc from './jsonc';
import typescriptRules from './typescript';
import unicornRules from './unicorn';
import vueRules from './vue';
import ymlRules from './yml';

// import importRules from './import.js';

export default {
	eslint: eslintRules,
	eslintStylistic: eslintStylisticRules,
	jsdoc: jsdocRules,
	n: nRules,
	typescript: typescriptRules,
	unicorn: unicornRules,
	vue: vueRules,
	jsonc:  jsonc,
	yml: ymlRules,

	// Rules are disabled for now until import plugin is
	// updated to work with eslint 9
	// ...outputRules('import', importRules),
};