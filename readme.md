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
<img src="https://img.shields.io/github/license/kalimah-apps/@kalimahapps/eslint-config.svg">
</p>

<p align="center">
<a target=_blank href="https://twitter.com/KalimahApps">
  <img src="https://img.shields.io/twitter/follow/KalimahApps?style=for-the-badge">
</a>
</p>

<br>
<br>

## ✨ Features
- Includes unicorn, promise, jsdoc, vue and other eslint plugins
- No prettier.
- Tabs and semicolons.
- Configurable rules.

<br>
<br>

## 💽 Installation
### NPM
```bash
npm install eslint @kalimahapps/eslint-config -D
```

### PNPM
```bash
pnpm add eslint @kalimahapps/eslint-config -D
```
<br>
<br>

## 🔧 Usage
Add this to your `.eslintrc.js` file

```js
module.exports = {
  extends: [
	'@kalimahapps'
  ]
}
```

Add this to your .vscode/settings.json file
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
		"typescriptreact"
	],
}
```

You need to install ESLint extension in VSCode. You can find it [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

<br>
<br>

## Other projects
### [Vue Icons](https://www.npmjs.com/package/@kalimahapps/vue-icons)
55,000+ SVG icons from popular icon sets that you can add seamlessly to your vue projects

### [Vue Popper](https://www.npmjs.com/package/@kalimahapps/vue-popper)
A tooltip component for Vue 3 based on popper.js

### [Vite inherit attrs](https://www.npmjs.com/package/vite-plugin-vue-setup-inherit-attrs)
A vite plugin that adds support for inheritAttrs in vue-setup

<br>
<br>

## License
[MIT License](LICENSE)