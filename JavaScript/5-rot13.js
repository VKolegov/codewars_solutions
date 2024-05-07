function rot13(message) {
  
  const alphabetRegexp = /[a-zA-Z]+/i;

  return message
    .split('')
    .map(c => {
    
      // non-alphabet, skipping
      if (!alphabetRegexp.test(c)) {
        return c;
      }
    
      const isUpperCase = c >= 'A' && c <= 'Z';
    
      const charCode = c.toLowerCase().charCodeAt();

      let newCharCode = charCode + 13;
      
      if (newCharCode > 122) {
        newCharCode = 97 + newCharCode - 123;
      }

      return !isUpperCase 
        ? String.fromCharCode(newCharCode)
        : String.fromCharCode(newCharCode).toUpperCase();
    })
    .join('');
}