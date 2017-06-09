/*!
 * zero fill 数字补零
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/09
 * since: 0.0.1
 */
'use strict';

const zeroFill = require('../zeroFill');

console.log(zeroFill(0));
console.log(zeroFill(6));
console.log(zeroFill(8, 3));
console.log(zeroFill(10));
console.log(zeroFill(10, 4));
console.log(zeroFill(1000, 3));
