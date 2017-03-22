// 冒泡排序
function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len - 1; i++) { // 外循环交换 len - 1 次
    for (var j = 0; j < len - i - 1; j++) { // 内循环交换 len - i - 1 次
      if (arr[j] > arr[j + 1]) { // swap
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([4, 2, 5, 1, 3, 7, 9, 6, 8]))