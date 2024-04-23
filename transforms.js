/**
 * Transforms rules object to eslint rules object
 *
 * @param  {object} rules    rules object
 * @param  {string} severity severity level
 * @return {object}          eslint rules object
 */
const transform = (pluginName, rules, severity) => {
	return Object.keys(rules).reduce((accumulator, ruleName) => {
		const ruleOptions = rules[ruleName];
		const ruleKey = (pluginName === 'eslint') ? ruleName : `${pluginName}/${ruleName}`;

		if (ruleOptions === 'warn' || ruleOptions === 'error') {
			accumulator[ruleKey] = ruleOptions;
			return accumulator;
		}

		if (Array.isArray(ruleOptions)) {
			accumulator[ruleKey] = [severity, ...ruleOptions];
			return accumulator;
		}

		accumulator[ruleKey] = [severity, ruleOptions];
		return accumulator;
	}, {});
};

/**
 * Transforms rules object to eslint rules object
 *
 * @param  {object} offRules Rules to turn off
 * @return {object}          eslint rules object
 */
const transformOff = (pluginName, offRules) => {
	const accumulator = {};
	offRules.forEach((ruleName) => {
		accumulator[`${pluginName}/${ruleName}`] = 'off';
	});
	return accumulator;
};

/**
 * Output rules in eslint format
 *
 * @param {string} pluginName The name of the plugin to prefix the rules with
 * @param {object} rules The rules to output
 * @return {object} The rules in eslint format
 */
const outputRules = function (pluginName, rules) {
	return Object.keys(rules).reduce((accumulator, severity) => {
		const rulesData = rules[severity];
		if (severity === 'off') {
			return {
				...accumulator,
				...transformOff(pluginName, rulesData),
			};
		}
		return {
			...accumulator,
			...transform(pluginName, rulesData, severity),
		};
	}, {});
};

export { outputRules };