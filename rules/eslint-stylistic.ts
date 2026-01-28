import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
	'@stylistic/indent': ['warn', 'tab'],
	'@stylistic/semi': 'warn',
};

export default rules;