function vowelsAndConsonants(s) {
  for (let char = 0; char < s.length; char++) {
    if (s.charAt(char) === 'a' ||
      s.charAt(char) === 'e' || 
      s.charAt(char) === 'i' || 
      s.charAt(char) === 'o' || 
      s.charAt(char) === 'u') {
        console.log(s.charAt(char));
    }
  }
  for (let char = 0; char < s.length; char++) {
    if (s.charAt(char) !== 'a' &&
      s.charAt(char) !== 'e' && 
      s.charAt(char) !== 'i' && 
      s.charAt(char) !== 'o' && 
      s.charAt(char) !== 'u') {
        console.log(s.charAt(char));
    }
  }
}