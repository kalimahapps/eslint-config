import { test, expect, describe } from 'vitest';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import KalimahEslintConfig from '../index';
import { Linter } from 'eslint';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectoryPath = path.dirname(currentFilePath);
const fixturesDirectoryPath = path.resolve(currentDirectoryPath, 'fixtures');
const linter = new Linter();

describe('Check eslint rules', () => {
	test.for(
		[
			['vue.vue', 23],
			['javascript.js', 252],
			['typescript.ts', 97],
		]
	)('fixture output should match for %s files and %d messages', ([file, messagesCount]) => {
		const inputFilePath = path.resolve(fixturesDirectoryPath, `input/${file}`);
		const inputFileBase = path.basename(inputFilePath);
		const outputFilePath = path.resolve(fixturesDirectoryPath, `output/${inputFileBase}`);
		const inputFile = fs.readFileSync(inputFilePath, 'utf8');
		const outputFile = fs.readFileSync(outputFilePath, 'utf8');

		const lintResult = linter.verifyAndFix(inputFile, KalimahEslintConfig, {
			filename: inputFilePath,
		});

		expect(lintResult.output).toBe(outputFile);
		expect(lintResult.messages.length).toBe(messagesCount);
	});
});
