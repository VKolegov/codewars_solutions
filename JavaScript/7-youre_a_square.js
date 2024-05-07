var isSquare = function(n){
  // console.log('Number: ', n);
  if (n < 0) {
    return false;
  }
  
  if (n === 0) {
    return true;
  }
  
  // babylonian approximation
  let x = 0.5 * n; // x0
  
  let x_n = x;
  let e = 100;

  while (e !== 0) {
      x_n = 0.5 * (x_n + n / x_n);
      e = Math.abs(x_n - x);
      x = x_n;
  }
  
  return Number.isInteger(x);
}