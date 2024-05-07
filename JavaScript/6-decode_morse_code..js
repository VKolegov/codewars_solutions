const decodeMorse = function(morseCode){
  const morseWords = morseCode.trim().split('   ');
  
  const letter = morseLetter => MORSE_CODE[morseLetter];
  
  return morseWords
    .map(
      morseWord => morseWord.split(' ')
                            .map(letter)
                            .join('')
    )
    .join(' ');
}