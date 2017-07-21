/*!
 * 日期格式化
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.3
 */
'use strict';

const dateFormat = require('../dateFormat');

console.log(dateFormat());
console.log(dateFormat(new Date('2017/6/11 6:6:6')));
console.log(dateFormat('yyyy-MM-dd HH:mm:ss', new Date('2017/6/12 6:6:6')));
console.log(dateFormat('yyyy-MM-dd HH:mm:ss vvv', new Date('2017/6/12 6:6:6')));
console.log(dateFormat('yy-M-d h:m:s v a', new Date('2017/6/12 16:6:6')));
console.log(dateFormat('yy-M-d h:m:s v A', new Date('2017/6/12 6:6:6')));
console.log(dateFormat('OOO dd, yyyy, DDD', new Date('2017/6/12 6:6:6')));
console.log(dateFormat('O dd, yyyy, D', new Date('2017/6/12 6:6:6')));
