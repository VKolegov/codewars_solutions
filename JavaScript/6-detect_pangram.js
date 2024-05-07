function isPangram(string){
  const letters = string
  .toLowerCase()
  .replace(/[^a-z]/g, '');
  
  return (new Set(letters)).size === 26;
}