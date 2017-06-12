/*!
 * 字符串转日期对象
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.5
 */
'use strict';

const strToDate = require('../strToDate');

console.dir(strToDate('2017-06-12 16:16:16.16'));
console.dir(strToDate('2017061216161616'));
console.dir(strToDate('a2017b06c12d16e16f16g16'));
console.dir(strToDate('20170612161616'));
console.dir(strToDate('201706121616'));
console.dir(strToDate('2017061216'));
console.dir(strToDate('20170612'));
console.dir(strToDate('201706'));
console.dir(strToDate('2017'));
