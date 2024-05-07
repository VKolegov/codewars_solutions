function order(wordsStr) {
  const words = wordsStr.trim().split(' ');

  const nonDigits = /\D+/gi;

  return words
    .sort((a, b) => {
      const ai = parseInt(a.replace(nonDigits, ''));
      const bi = parseInt(b.replace(nonDigits, ''));

      return ai - bi;
    })
    .join(' ');
}