function createPhoneNumber(numbers){
  const str = numbers.join('');
  
  const firstGroup = str.substring(0, 3);
  const secondGroup = str.substring(3, 6);
  const thirdGroup = str.substring(6);
  
  return `(${firstGroup}) ${secondGroup}-${thirdGroup}`;
}
