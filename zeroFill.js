/*!
 * zero fill
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/09
 * since: 0.0.1
 */
'use strict';

const _padStart = require('lodash/padStart');

module.exports = (num, len = 2) => {
	return _padStart(num, len, 0);
};
