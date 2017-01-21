// 快速排序 http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
// 1. 在数据集之中，选择一个元素作为“基准”（pivot）
// 2. 所有小于“基准”的元素， 都移到“基准”的左边；所有大于“基准”的元素，都移到“基准”的右边。
// 3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

var arr = [4, 6, 2, 7, 8, 10, 5, 1, 3, 9];
console.log(quickSort(arr)); // [1,2,3,4,5,6,7,8,9,10]
var arr2 = [4, 6, 2, 7, 8, 10, 5, 1, 3, 9, 3];
console.log(quickSort(arr2)); // [1,2,3,3,4,5,6,7,8,9,10]