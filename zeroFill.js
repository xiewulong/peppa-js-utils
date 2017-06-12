/*!
 * 为数字补指定位数的零
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/09
 * since: 0.0.2
 */
'use strict';

const _padStart = require('lodash/padStart');

module.exports = (num, len = 2) => {
	return _padStart(num, len, 0);
};
