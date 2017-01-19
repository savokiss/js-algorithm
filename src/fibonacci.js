// 获取斐波那契数列第n个元素值
function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)) // 5