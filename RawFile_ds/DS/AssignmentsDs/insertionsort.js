//  building a sorted portion of the array,
//one element at a time, until the whole array
//is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] < temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j+1] = temp
  }
}
let array = [3, 5, 3, 2, 45, 6, 65];
insertionSort(array);

console.log(array);