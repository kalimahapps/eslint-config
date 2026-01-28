import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
	// Error
	'@typescript-eslint/consistent-type-imports': 'error',

	// Warn
	'@typescript-eslint/ban-ts-comment': ['warn', {
		'ts-ignore': 'allow-with-description',
	}]
};

export default rules;