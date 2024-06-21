import { test, expect, describe } from 'vitest';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import KalimahEslintConfig from '../index.js';
import { Linter } from 'eslint';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectoryPath = path.dirname(currentFilePath);
const linter = new Linter();

const sourceDirectoryPath = path.resolve(currentDirectoryPath, 'source');
const vueSource = fs.readFileSync(path.resolve(sourceDirectoryPath, 'vue.vue'), 'utf8');
const lintOutcome = linter.verify(vueSource, KalimahEslintConfig, {
	filename: path.resolve(sourceDirectoryPath, 'vue.vue'),
});

const lintCount = lintOutcome.length;

describe('Check eslint rules', () => {
	test('should have the same eslint errors', () => {
		expect(lintCount).toBe(115);
	});
});