function digitalRoot(n) {
  
  if (n < 10) {
    return n;
  }
  
  const str = n.toString(10);
  
  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
    result += parseInt(str[i]);
  }
  
  
  return digitalRoot(result);
}