/*!
 * 字符串截取
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.3
 */
'use strict';

const truncate = require('../truncate');

console.log(truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。'));
console.log(truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 60));
console.log(truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 40, ' [...]'));
console.log(truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 20, '...更多', ''));
console.log(truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 20, '...更多', '，'));