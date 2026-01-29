import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['./index.ts'],
	shims: true,
	format: ['esm'],
	exports: true,
	dts: true,
	clean: true,
});