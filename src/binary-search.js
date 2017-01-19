// 二分查找（升序）
function binSearch(values, target, start, end) {
  if (start > end) {
    return -1;
  }
  var middle = Math.floor((start + end) / 2);
  var value = values[middle];
  if (target < value) {
    return binSearch(values, target, start, middle - 1);
  }
  if (target > value) {
    return binSearch(values, target, middle + 1, end);
  }
  return middle;

}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binSearch(arr, 8, 0, arr.length - 1)) // 7
console.log(binSearch(arr, 7, 0, arr.length - 1)) // 6
console.log(binSearch(arr, 4, 0, arr.length - 1)) // 3
console.log(binSearch(arr, 2, 0, arr.length - 1)) // 1
console.log(binSearch(arr, 5, 0, arr.length - 1)) // 4