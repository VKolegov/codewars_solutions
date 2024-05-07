function topThreeWords(text) {
    const regexp = /[a-z][a-z']*/g;
  
    const wordsCount = new Map();
  
    const words = text.toLowerCase().match(regexp);
  
    if (!words) {
      return [];
    }
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      let currentCount = wordsCount.get(word) ?? 0;
      currentCount++;
      
      wordsCount.set(word, currentCount);
    }
  
    const top3 = [...wordsCount]
    .sort( (a,b) => b[1] - a[1] )
    .slice(0, 3);
  
    return top3.map(v => v[0]);
}