# Utils for javascript

js实用工具库

## 目录

<details>

* [安装](#安装)
* [使用](#使用)
* [zeroFill](#zeroFill)
* [License](#license)

</details>

## 安装

```bash
$ npm i [-S|-D] peppa-utils
```

## 使用

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

## zeroFill

```js
/**
 * 数字补指定位数的零
 * @since 0.0.1
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
