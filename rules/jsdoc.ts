import type { Rules } from 'node_modules/eslint-plugin-jsdoc/dist/rules';
import type { Linter } from 'eslint';

type Rule = { [key in keyof Rules]?: Linter.RuleEntry<Rules[key]>; };

const rules: Rule = {
	// warn
	'jsdoc/check-tag-names': [
		'warn', {
			definedTags: ['values', 'model'],
		},
	],
	'jsdoc/check-line-alignment': ['warn', 'always'],
	'jsdoc/no-bad-blocks': ['warn'],
	'jsdoc/require-description': ['warn'],
	'jsdoc/tag-lines': [
		'warn',
		'any',
		{
			startLines: 1,
		},
	],
};

export default rules;