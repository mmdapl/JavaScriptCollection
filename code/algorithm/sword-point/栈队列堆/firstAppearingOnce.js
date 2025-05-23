/*
 * @Description: 【中等】字符流中的第一个不重复的字符
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-29 21:40:02
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-29 21:47:24
 */

// Init module if you need
let result
export function Init() {
  result = ''
}
// Insert one char from stringstream
export function Insert(ch) {
  result += ch
  return result
}
// return the first appearence once char in current stringstream
export function FirstAppearingOnce() {
  for (let index = 0; index < result.length; index++) {
    //
    const str = result[index]

    // 注意这里遍历，str字符要么只有一个，不存在找不到为-1的情况，因为str从字符中截取的
    if (result.indexOf(str) === result.lastIndexOf(str)) {
      return str
    }
  }
  // 没有返回
  return '#'
}
