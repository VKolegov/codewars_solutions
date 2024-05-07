function comp(array1, array2){
  
  if (!array1 || !array2) {
    return false;
  }
  
  const array1sorted = [...array1].map(el => el * el).sort().join('');
  const array2sorted = [...array2].sort().join('');
  
  return array1sorted === array2sorted;
}