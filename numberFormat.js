/*!
 * 数字格式化
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.3
 */
'use strict';

const _round = require('lodash/round');

module.exports = (num, decimals = 0, thousands_separator = ',', decimals_point = '.') => {
	num = _round(num, decimals);
	if(decimals > 0) {
		num = num.toFixed(decimals);
	}

	num = num.toString().replace('.', decimals_point);

	let [ints, decs] = num.split(decimals_point);
	let numArr = [];
	for(let _i, len = ints.length, i = len - 1; i >= 0; i--) {
		_i = len - i;
		if(_i > 1 && _i % 3 == 1) {
			numArr.unshift(thousands_separator);
		}

		numArr.unshift(ints[i]);
	}

	if(decs) {
		numArr.push(decimals_point);
		numArr.push(decs);
	}

	return numArr.join('');
};
