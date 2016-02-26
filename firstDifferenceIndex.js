// 给定两个字符串中第一个不同的字符的位置
function firstDifferenceIndex(string1, string2) {
  // 求两者中的最小长度
  var minLen = Math.min(string1.length, string2.length);
  for (var i = 0; i < minLen; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      return i;
    }
  }
  // 两者长度不相等，则返回比较的最后位置
  return string1.length === string2.length ? -1 : minLen;
}