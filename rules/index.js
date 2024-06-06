import eslintRules from './eslint.js';
import jsdocRules from './jsdoc.js';
import nRules from './n.js';
import typescriptRules from './typescript.js';
import unicornRules from './unicorn.js';
import vueRules from './vue.js';
import { outputRules } from '../transforms.js';

// import importRules from './import.js';

export default {
	eslint: outputRules('eslint', eslintRules),
	jsdoc: outputRules('jsdoc', jsdocRules),
	n: outputRules('n', nRules),
	typescript: outputRules('@typescript-eslint', typescriptRules),
	unicorn: outputRules('unicorn', unicornRules),
	vue: outputRules('vue', vueRules),

	// Rules are disabled for now until import plugin is
	// updated to work with eslint 9
	// ...outputRules('import', importRules),
};