import eslintRules from './eslint.js';
import jsdocRules from './jsdoc.js';
import nRules from './n.js';
import typescriptRules from './typescript.js';
import unicornRules from './unicorn.js';
import vueRules from './vue.js';
import { outputRules } from '../transforms.js';

// import importRules from './import.js';

export default {
	...outputRules('eslint', eslintRules),
	...outputRules('vue', vueRules),
	...outputRules('jsdoc', jsdocRules),
	...outputRules('n', nRules),
	...outputRules('@typescript-eslint', typescriptRules),
	...outputRules('unicorn', unicornRules),

	// Rules are disabled for now until import plugin is
	// updated to work with eslint 9
	// ...outputRules('import', importRules),
};