/*!
 * 数字格式化
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.3
 */
'use strict';

const numberFormat = require('../numberFormat');

console.log(numberFormat(1234567890.0987654321, 0));
console.log(numberFormat(1234567890.0987654321, -2));
console.log(numberFormat(1234567890.0987654321, 2));
console.log(numberFormat(1234567890.0987654321, 2, ''));
console.log(numberFormat(1234567890.0987654321, 2, ' ', ','));
