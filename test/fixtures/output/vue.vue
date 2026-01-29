<route lang="json">
{
  "name": "FixtureRoute"
}
</route>

<template>
	<div>
		<!-- bad -->
		<!--
			multi
			line
		-->
		<my-component ref="unusedRef" :class="'static ' + dynamicClass" v-text="msg" />

		<button>Click me</button>

		<input
			id="a"
			class="b"
			type="text"
			name="n"
		>

		<input
			id="b"
			class="c"
			type="text"
			name="m"
		>

		<div class="a b" :class="[]">
			static
		</div>

		<p>{{ missingProp }}</p>

		<p :disabled="true">
			{{ longText }}
		</p>

		<div>
			this line is intentionally very long to exceed the configured max length rule in the template of this fixture file
		</div>
	</div>
</template>

<script setup lang="ts">
import { nextTick, ref, defineEmits, defineProps, defineOptions } from 'vue';

defineProps({
	flag: {
		type: [String, Boolean],
		required: true,
		default: 'x',
	},
});
defineEmits(['myEvent']);
defineOptions({ inheritAttrs: false });

const msg = ref('hello');
const dynamicClass = ref('dyn');
const state = ref({
	count: 0,
	nested: {
		a: 1,
		b: 2,
	},
});
const { count } = state.value;

nextTick(() => {
	console.log(count);
});
</script>

<script lang="ts">
export default {
	name: 'Fixture',
	inheritAttrs: false,
	props: {
		size: {
			type: Number,
			required: true,
			default: 1,
		},
	},

	data() {
		return {
			objA: {
				x: 1,
				y: 2,
			},

			objB: {
				x: 3,
				y: 4,
			},

			unusedData: 123,
		};
	},

	computed: {
		unusedComputed() {
			return this.unusedData;
		},
	},

	methods: {
		unusedMethod() {
			return this.unusedData;
		},
	},
};
</script>
