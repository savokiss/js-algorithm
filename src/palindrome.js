// 是否是回文数 - 递归解法
function isPalindrome(str) {
  var len = str.length;
  if (len <= 1) {
    return true;
  }
  return (str[0] === str[len - 1]) ? isPalindrome(str.substring(1, len - 1)) : false;
}

console.log(isPalindrome('xx')) // true
console.log(isPalindrome('x2x')) // true
console.log(isPalindrome('xx22')) // false
console.log(isPalindrome('level')) // true
console.log(isPalindrome('1xxooxx1')) // true