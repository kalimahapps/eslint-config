/**
 * Transforms rules object to eslint rules object
 *
 * @param  {object} rules    rules object
 * @param  {string} severity severity level
 * @return {object}          eslint rules object
 */
const transform = (rules, severity) => {
	return Object.keys(rules).reduce((accumulator, pluginName) => {
		const pluginRules = rules[pluginName];

		Object.keys(pluginRules).forEach((ruleName) => {
			const ruleOptions = pluginRules[ruleName];
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
		});
		return accumulator;
	}, {});
};

/**
 * Transforms rules object to eslint rules object
 *
 * @param  {object} offRules Rules to turn off
 * @return {object}          eslint rules object
 */
const transformOff = (offRules) => {
	return Object.keys(offRules).reduce((accumulator, pluginName) => {
		const pluginRules = offRules[pluginName];
		pluginRules.forEach((ruleName) => {
			accumulator[`${pluginName}/${ruleName}`] = 'off';
		});
		return accumulator;
	}, {});
};

module.exports = {
	transform,
	transformOff,
};