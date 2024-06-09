const error = {
	'html-indent': 'tab',
	'max-attributes-per-line': {
		singleline: 3,
		multiline: 1,
	},
	'max-len': {
		code: 100,
		template: 100,
		tabWidth: 4,
		comments: 100,
		ignoreUrls: true,
		ignoreStrings: true,
		ignoreTemplateLiterals: true,
	},
	'component-tags-order': { order: ['route', 'template', 'script', 'style'] },
	'custom-event-name-casing': 'kebab-case',
	'block-tag-newline': {
		singleline: 'always',
		multiline: 'always',
	},
	'define-macros-order': { order: ['defineProps', 'defineEmits'] },
	'component-api-style': [['script-setup', 'composition']],
	'component-name-in-template-casing': 'PascalCase',
	'html-button-has-type': {
		button: true,
		submit: true,
		reset: true,
	},
	'html-comment-content-newline': {
		singleline: 'never',
		multiline: 'always',
	},
	'html-comment-content-spacing': 'always',
	'html-comment-indent': 'tab',
	'new-line-between-multi-line-property': { minLineOfMultilineProperty: 2 },
	'next-tick-style': 'promise',
	'no-duplicate-attr-inheritance': 'error',
	'no-multiple-objects-in-class': 'error',
	'no-ref-object-destructure': 'error',
	'no-undef-properties': 'error',
	'no-v-text': 'error',
	'padding-line-between-blocks': 'always',
	'prefer-prop-type-boolean-first': 'error',
};

const warn = {
	'no-empty-component-block': 'warn',
	'no-required-prop-with-default': 'warn',
	'no-unused-properties': 'warn',
	'no-unused-refs': 'warn',
	'no-useless-mustaches': {
		ignoreIncludesComment: true,
		ignoreStringEscape: true,
	},
	'padding-line-between-tags': [
		[
			{
				blankLine: 'consistent',
				prev: '*',
				next: '*',
			},
		],
	],
	'prefer-separate-static-class': 'warn',
	'prefer-true-attribute-shorthand': 'warn',
	'require-expose': 'warn',
	'require-prop-comment': 'warn',
};

const off = [];

export default {
	error,
	warn,
	off,
};