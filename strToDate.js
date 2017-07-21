/*!
 * 字符串转日期对象
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.5
 */
'use strict';

const _padEnd = require('lodash/padEnd');

let max = 14;

module.exports = (str) => {
	str = _padEnd(str.replace(/\D/g, '').slice(0, max), max, 0);

	let _str = [];
	for(let i = 0, len = str.length; i < len; i++) {
		if(i == 4 || i == 6) {
			_str.push('/');
		} else if(i == 8) {
			_str.push(' ');
		} else if(i == 10 || i == 12) {
			_str.push(':');
		}

		_str.push(str[i]);
	}

	return new Date(_str.join(''));
};
