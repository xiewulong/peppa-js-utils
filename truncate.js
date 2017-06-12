/*!
 * 字符串截取
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.3
 */
'use strict';

const _truncate = require('lodash/truncate');

module.exports = (str, len = 30, omission = '...', separator = ',') => {
	return _truncate(str, {
		length: len,
		omission,
		separator,
	});
};
