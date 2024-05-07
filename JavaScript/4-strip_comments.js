function solution(text, markers) {
  return text
    .split('\n')
    .map(line => {
      const i = line.split('').findIndex(char => markers.includes(char));

      if (i === -1) {
        return line.trimEnd();
      }

      return line.slice(0, i).trimEnd();
    })
    .join('\n');
}