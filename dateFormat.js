/*!
 * 日期格式化
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/12
 * since: 0.0.3
 */
'use strict';

const zeroFill = require('./zeroFill');

const defaultFormat = 'yyyy-MM-dd HH:mm:ss';
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

module.exports = (format = defaultFormat, date = new Date) => {
  if (format instanceof Date) {
    date = format;
    format = defaultFormat;
  }

  let yyyy = date.getFullYear();
  let _M = date.getMonth();
  let d = date.getDate();
  let H = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let v = date.getMilliseconds();
  let w = date.getDay();

  let M = _M + 1;
  let O = months[_M];
  let D = days[w];
  let h = (H + 12 - 1) % 12;

  return format .replace(/yyyy/g, yyyy)
                .replace(/yy/g, yyyy.toString().slice(-2))
                .replace(/MM/g, zeroFill(M))
                .replace(/M/g, M)
                .replace(/dd/g, zeroFill(d))
                .replace(/d/g, d)
                .replace(/HH/g, zeroFill(H))
                .replace(/H/g, H)
                .replace(/hh/g, zeroFill(h))
                .replace(/h/g, h)
                .replace(/mm/g, zeroFill(m))
                .replace(/m/g, m)
                .replace(/ss/g, zeroFill(s))
                .replace(/s/g, s)
                .replace(/vvv/g, zeroFill(v, 3))
                .replace(/v/g, v)
                .replace(/w/g, w)
                .replace(/L/g, yyyy / 4 ? 0 : 1)
                .replace(/a/g, H < 12 ? 'am' : 'pm')
                .replace(/A/g, H < 12 ? 'AM' : 'PM')
                .replace(/OOO/g, O.slice(0, 3))
                .replace(/O/g, O)
                .replace(/DDD/g, D.slice(0, 3))
                .replace(/D/g, D)
                ;
};
