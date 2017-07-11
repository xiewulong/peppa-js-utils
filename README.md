# Utils for javascript

js实用工具库

## 目录

<details>

* [安装](#install)
* [使用](#useage)
* [日期格式化](#dateFormat)
* [数字格式化](#numberFormat)
* [字符串转日期对象](#strToDate)
* [字符串截取](#truncate)
* [为数字补指定位数的零](#zeroFill)
* [License](#license)

</details>

## Install

安装

```bash
$ npm i [-S|-D] peppa-utils
```

## Useage

使用

整体引入

```js
const Utils = require('peppa-utils');
Utils.zeroFill(6);  // -> 06
```

最小化引入(推荐)

```js
const zeroFill = require('peppa-utils/zeroFill');
zeroFill(6);  // -> 06
```

## dateFormat

```js
/**
 * 日期格式化
 * @since 0.0.3
 * @param {string} [format='yyyy-MM-dd HH:mm:ss'] 格式
 * @param {object} [date=new Date] 日期对象, 默认取当前日期对象
 * @return {string} 格式化后的字符串
 */
dateFormat([format='yyyy-MM-dd HH:mm:ss'], [date=new Date]);
```

Example

```js
dateFormat();                                                           // -> 格式为'yyyy-MM-dd HH:mm:ss'的当前时间
dateFormat(new Date('2017-6-12 6:6:6.6'));                              // -> 2017-06-11 06:06:06
dateFormat('yyyy-MM-dd HH:mm:ss', new Date('2017-6-12 6:6:6.6'));       // -> 2017-06-12 06:06:06
dateFormat('yyyy-MM-dd HH:mm:ss vvv', new Date('2017-6-12 6:6:6.06'));  // -> 2017-06-12 06:06:06 060
dateFormat('yy-M-d h:m:s v a', new Date('2017/6/12 16:6:6.006'));       // -> 17-6-12 5:6:6 6 pm
dateFormat('yy-M-d h:m:s v A', new Date('2017/6/12 6:6:6.6'));          // -> 17-6-12 7:6:6 600 AM
dateFormat('OOO dd, yyyy, DDD', new Date('2017-6-12 6:6:6.06'));        // -> Jul 12, 2017, Mon
dateFormat('O dd, yyyy, D', new Date('2017-6-12 6:6:6.006')));          // -> July 12, 2017, Monday
```

格式字符 | 描述 | 返回值示例
-|-|-
(yy)yy | (四)两位数的年份完整 | (19)99或(20)03
(M)M | (带前导零)月份 | (0)1-12
(d)d | (带前导零)日期 | (0)1-31
(H)H | (带前导零)24小时制时钟 | (0)0-23
(h)h | (带前导零)12小时制时钟 | (0)1-12
(m)m | (带前导零)分钟 | (0)0-59
(s)s | (带前导零)秒钟 | (0)0-59
(vv)v | (带前导零)毫秒数 | (00)0-999
w | 星期 | 0-6
L | 是否为闰年 | 1或0
a | 小写午前或午后 | am或pm
A | 大写午前或午后 | AM或PM
(OO)O | (仅前三个字母缩写)英文表达的月份 | Jan(uary)-Dec(ember)
(DD)D | (仅前三个字母缩写)英文表达的星期 | Sun(day)-Sat(urday)

优先级顺序

1. 格式化的优先级顺便按此列表顺序
2. 带前导零的优先级高过不带前导零
3. 仅前三个字母缩写的优先级高过全称

## numberFormat

```js
/**
 * 数字格式化
 * @since 0.0.3
 * @param {number} num 数字
 * @param {number} [decimals=0] 保留小数位数, 超出则四舍五入取整, 可为负数. 默认0不保留小数
 * @param {string} [thousands_separator=','] 千位分隔符, 默认','
 * @param {string} [decimals_point='.'] 小数点符号, 默认'.'
 * @return {string} 格式化后的字符串
 */
numberFormat(num, [decimals=0], [thousands_separator=','], [decimals_point='.']);
```

Example

```js
numberFormat(1234567890.0987654321, 0);           // -> 1,234,567,890
numberFormat(1234567890.0987654321, -2);          // -> 1,234,567,900
numberFormat(1234567890.0987654321, 2);           // -> 1,234,567,890.10
numberFormat(1234567890.0987654321, 2, '');       // -> 1234567890.10
numberFormat(1234567890.0987654321, 2, ' ', ','); // -> 1 234 567 890,10
```

## strToDate

```js
/**
 * 字符串转日期对象
 * @since 0.0.5
 * @param {string} str 描述日期的字符串
 * @return {object} 日期对象
 */
strToDate(str);
```

Example

```js
strToDate('2017-06-12 16:16:16.16');  // -> 2017-06-12T08:16:16.160Z
strToDate('2017061216161616');        // -> 2017-06-12T08:16:16.160Z
strToDate('a2017b06c12d16e16f16g16'); // -> 2017-06-12T08:16:16.160Z
strToDate('20170612161616');          // -> 2017-06-12T08:16:16.000Z
strToDate('201706121616');            // -> 2017-06-12T08:16:00.000Z
strToDate('2017061216');              // -> 2017-06-12T08:00:00.000Z
strToDate('20170612');                // -> 2017-06-11T16:00:00.000Z
strToDate('201706');                  // -> Invalid Date
strToDate('2017');                    // -> Invalid Date
```

## truncate

```js
/**
 * 字符串截取
 * @since 0.0.3
 * @param {string} str 待截取的字符串
 * @param {number} [len=30] 截取长度, 默认30
 * @param {string} [omission='...'] 省略字符串, 默认省略号(...)
 * @param {string|regexp} [separator=','] 截取处可忽略的字符, 默认英文逗号(,)
 * @return {string} 截取后的字符串
 */
truncate(str, [len=30], [omission='...'], [separator=/[,，]+\s?/]);
```

Example

```js
truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。');
// -> 待截取的字符串，分隔符是逗号，超出的会用省略号代替，默..

truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 60);
// -> 待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。

truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 40, ' [...]');
// -> 待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字 [...]

truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 20, '...更多', '');
// -> 待截取的字符串，分隔符是逗号，...更多

truncate('待截取的字符串，分隔符是逗号，超出的会用省略号代替，默认截取30个字符，包括省略字符串的长度，可设置。', 20, '...更多', '，');
// -> 待截取的字符串，分隔符是逗号...更多
```

## zeroFill

```js
/**
 * 为数字补指定位数的零
 * @since 0.0.2
 * @param {number} num 数字
 * @param {number} [len=2] 目标长度
 * @return {string} 补零后的字符串
 */
zeroFill(num, [len=2]);
```

Example

```js
zeroFill(0);        // -> 00
zeroFill(6);        // -> 06
zeroFill(8, 3);     // -> 008
zeroFill(10);       // -> 10
zeroFill(10, 4);    // -> 0010
zeroFill(1000, 3);  // -> 1000
```

## License

MIT - [xiewulong](https://github.com/xiewulong)
