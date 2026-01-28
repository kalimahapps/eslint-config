import type { RuleOptions } from "eslint-plugin-vue/dist/eslint-typegen";

const rules: RuleOptions = {
	// Error
	'vue/html-indent': ['error', 'tab'],
	'vue/max-attributes-per-line': ['error', {
		singleline: 3,
		multiline: 1,
	}],
	'vue/max-len': ['error', {
		code: 100,
		template: 100,
		tabWidth: 4,
		comments: 100,
		ignoreUrls: true,
		ignoreStrings: true,
		ignoreTemplateLiterals: true,
	}],
	'vue/block-order': ['error', { order: ['route', 'template', 'script', 'style'] }],
	'vue/custom-event-name-casing': ['error', 'kebab-case'],
	'vue/block-tag-newline': ['error', {
		singleline: 'always',
		multiline: 'always',
	}],
	'vue/define-macros-order': ['error', { order: ['defineProps', 'defineEmits'] }],
	'vue/component-api-style': ['error', ['script-setup', 'composition']],
	'vue/component-name-in-template-casing': ['error', 'PascalCase'],
	'vue/html-button-has-type': ['error', {
		button: true,
		submit: true,
		reset: true,
	}],
	'vue/html-comment-content-newline': ['error', {
		singleline: 'never',
		multiline: 'always',
	}],
	'vue/html-comment-content-spacing': ['error', 'always'],
	'vue/html-comment-indent': ['error', 'tab'],
	'vue/new-line-between-multi-line-property': ['error', { minLineOfMultilineProperty: 2 }],
	'vue/next-tick-style': ['error', 'promise'],
	'vue/no-duplicate-attr-inheritance': 'error',
	'vue/no-multiple-objects-in-class': 'error',
	'vue/no-ref-object-reactivity-loss': 'error',
	'vue/no-undef-properties': 'error',
	'vue/no-v-text': 'error',
	'vue/padding-line-between-blocks': ['error', 'always'],
	'vue/prefer-prop-type-boolean-first': 'error',

	// Warn
	'vue/no-empty-component-block': 'warn',
	'vue/no-required-prop-with-default': 'warn',
	'vue/no-unused-properties': 'warn',
	'vue/no-unused-refs': 'warn',
	'vue/no-useless-mustaches': ['warn', {
		ignoreIncludesComment: true,
		ignoreStringEscape: true,
	}],
	'vue/padding-line-between-tags': ['warn', [
		{
			blankLine: 'consistent',
			prev: '*',
			next: '*',
		},
	]],
	'vue/prefer-separate-static-class': 'warn',
	'vue/prefer-true-attribute-shorthand': 'warn',
	'vue/require-expose': 'warn',
	'vue/require-prop-comment': 'warn',
};

export default rules;