import eslintRules from './eslint';
import eslintStylisticRules from './eslint-stylistic';
import jsdocRules from './jsdoc';
import nRules from './n';
import jsonc from './jsonc';
import typescriptRules from './typescript';
import unicornRules from './unicorn';
import vueRules from './vue';
import ymlRules from './yml';

export default {
	eslint: eslintRules,
	eslintStylistic: eslintStylisticRules,
	jsdoc: jsdocRules,
	n: nRules,
	typescript: typescriptRules,
	unicorn: unicornRules,
	vue: vueRules,
	jsonc,
	yml: ymlRules,
};