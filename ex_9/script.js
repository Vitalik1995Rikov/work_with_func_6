function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(1)(3)); // внутрення функци берет a из внешней