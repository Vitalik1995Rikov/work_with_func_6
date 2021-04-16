function inBetween(a, b) {
  return function(item) {
    return item <= b && item >= a;
  }
}

function inArray(arr) {
  return function(item) {
    return arr.includes(item);
  }
}

let arr = [1, 3, 5, 7, 9, 11];

console.log(arr.filter(inBetween(3, 7)));
console.log(arr.filter(inArray([1, 2, 3, 4]))); // разобрался, пошло не сразу


