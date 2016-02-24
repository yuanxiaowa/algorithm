// 判断一个数是否为质数
function isPrime(number) {
  // 为数字且未整数
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  } else if (0 === number % 2){
    return false;
  }
  // 2-number开平方 都不能除尽
  for (var i = 2, _n = Math.sqrt(number); i <= _n; i += 2) {
    // 若能除尽则返回false
    if (0 === number % i) {
      return false;
    }
  }
  return true;
}