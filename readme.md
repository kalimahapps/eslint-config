<p align="center">
<h1 align="center">KalimahApps Eslint Config</h1>
</p>


<p align="center">
<h3 align="center">Comprehensive eslint rules for vue projects with typescript </h3>
<br>
<br>
</p>

<p align="center">
<a target="_blank" href="https://www.npmjs.com/package/@kalimahapps/eslint-config">
  <img src="https://img.shields.io/npm/v/@kalimahapps/eslint-config.svg">
</a>
<a target="_blank" href="https://www.npmjs.com/package/@kalimahapps/eslint-config">
  <img src="https://img.shields.io/npm/dt/@kalimahapps/eslint-config.svg">
</a>
<img src="https://img.shields.io/badge/vue-3-%2342b883">
</a>
<img src="https://img.shields.io/github/license/kalimahapps/eslint-config.svg">
</p>

<p align="center">
<a target=_blank href="https://twitter.com/KalimahApps">
  <img src="https://img.shields.io/twitter/follow/KalimahApps?style=for-the-badge">
</a>
</p>

<br>
<br>

## ✨ Features
- Includes unicorn, jsdoc, vue and other eslint plugins
- No prettier.
- Tabs and semicolons.
- Configurable rules.
- Sort package.json and .vscode/settings.json files.

While this config is tailored for vue projects, it can be used for any javascript/typescript project. You might see some duplication in the rules, but nothing major.

<br>
<br>

## 💽 Installation
### PNPM
```bash
pnpm add eslint @kalimahapps/eslint-config -D
```

### NPM
```bash
npm install eslint @kalimahapps/eslint-config -D
```

<br>
<br>

## 🔧 Usage
Create `eslint.config.js` file (or `eslint.config.mjs` for esm, or `eslint.config.cjs` for commonjs) in the root of your project and add this

```js
import eslintConfig from '@kalimahapps/eslint-config';
export default [...eslintConfig];
```

To add custom rules or overrides, you can do this

```js
import eslintConfig from '@kalimahapps/eslint-config';
export default [
	...eslintConfig,
	{
		rules: {
			'no-undef': 'off',
			'no-unused-vars': 'off',
		},
	},
	{
		ignores: ['file-or-folder-to-ignore/**'],
	},
];
```

### VSCode integration

Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension in VSCode and add this to your `.vscode/settings.json` file
```json
{
 	"prettier.enable": false,
  	"editor.formatOnSave": false,
	"eslint.codeAction.showDocumentation": {
		"enable": true
	},
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact",
		"json",
		"jsonc",
		"json5",
		"vue",
		"yml",
		"yaml"
	],
}
```
<br>
<br>

## Check out more from KalimahApps
- [Repositories](https://github.com/orgs/kalimahapps/repositories)
- [Projects](https://kalimah-apps.com/projects)