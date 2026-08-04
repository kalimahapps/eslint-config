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
			['javascript.js', 260],
			['typescript.ts', 100],
			['json.json', 0],
			['yaml.yaml', 1],
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

describe('Individual rule modules', () => {
	const rulesDirectory = path.resolve(currentDirectoryPath, '../rules');

	test.for(
		fs.readdirSync(rulesDirectory)
			.filter((file) => { return file.endsWith('.ts') && file !== 'index.ts'; })
			.map((file) => { return [file, path.resolve(rulesDirectory, file)] as const; })
	)('%s should export valid rules', async (entry) => {
		const [file, filePath] = entry as [string, string];
		const module = await import(filePath);
		const rules = module.default;

		expect(rules).toBeDefined();
		expect(typeof rules).toBe('object');

		for (const [ruleName, ruleValue] of Object.entries(rules)) {
			expect(ruleName).toBeTruthy();
			if (Array.isArray(ruleValue)) {
				expect(['off', 'warn', 'error']).toContain(ruleValue[0]);
			} else {
				expect(['off', 'warn', 'error']).toContain(ruleValue);
			}
		}
	});
});

describe('Edge cases', () => {
	test('empty JavaScript file should not crash', () => {
		const result = linter.verify('', KalimahEslintConfig, {
			filename: 'empty.js',
		});
		expect(Array.isArray(result)).toBe(true);
	});

	test('empty TypeScript file should not crash', () => {
		const result = linter.verify('', KalimahEslintConfig, {
			filename: 'empty.ts',
		});
		expect(Array.isArray(result)).toBe(true);
	});

	test('empty JSON file should not crash', () => {
		const result = linter.verify('', KalimahEslintConfig, {
			filename: 'empty.json',
		});
		expect(Array.isArray(result)).toBe(true);
	});

	test('empty YAML file should not crash', () => {
		const result = linter.verify('', KalimahEslintConfig, {
			filename: 'empty.yaml',
		});
		expect(Array.isArray(result)).toBe(true);
	});

	test('empty Vue file should not crash', () => {
		const result = linter.verify('', KalimahEslintConfig, {
			filename: 'empty.vue',
		});
		expect(Array.isArray(result)).toBe(true);
	});

	test('unknown file extension should not crash', () => {
		const result = linter.verify('const x = 1;', KalimahEslintConfig, {
			filename: 'unknown.txt',
		});
		expect(Array.isArray(result)).toBe(true);
	});
});

describe('Positive tests - valid code should produce minimal errors', () => {
	test('valid JavaScript code should have no errors', () => {
		const code = `const add = (a, b) => {
	return a + b;
};

export { add };
`;
		const result = linter.verify(code, KalimahEslintConfig, {
			filename: 'valid.js',
		});

		// Should have 0 errors (only warnings at most)
		const errors = result.filter((m) => {
			return m.severity === 2;
		});
		expect(errors.length).toBe(0);
	});

	test('valid TypeScript code should have no errors', () => {
		const code = `interface User {
	name: string;
	age: number;
}

const greet = (user: User): string => {
	return \`Hello, \${user.name}\`;
};

export { greet };
export type { User };
`;
		const result = linter.verify(code, KalimahEslintConfig, {
			filename: 'valid.ts',
		});
		const errors = result.filter((m) => {
			return m.severity === 2;
		});
		expect(errors.length).toBe(0);
	});

	test('valid JSON code should have no errors', () => {
		const code = '{\n\t"name": "test",\n\t"version": "1.0.0"\n}\n';
		const result = linter.verify(code, KalimahEslintConfig, {
			filename: 'valid.json',
		});
		const errors = result.filter((m) => {
			return m.severity === 2;
		});
		expect(errors.length).toBe(0);
	});

	test('valid YAML code should have no errors', () => {
		const code = 'name: test\nversion: 1.0.0\n';
		const result = linter.verify(code, KalimahEslintConfig, {
			filename: 'valid.yaml',
		});
		const errors = result.filter((m) => {
			return m.severity === 2;
		});
		expect(errors.length).toBe(0);
	});
});