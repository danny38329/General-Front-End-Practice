function rot13(str: string): string {
    let newString: string = "";
    const alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (let i: number = 0; i < str.length; i++) {
      if (alphabet.indexOf(str[i])=== -1) {
        newString += str[i];
      } else if (alphabet.indexOf(str[i]) < 13) {
        newString += alphabet[alphabet.indexOf(str[i])+13];
      } else  {
        newString += alphabet[alphabet.indexOf(str[i])-13];
      } 
      
    };
    return newString;
  }
  
  console.log(rot13("SERR PBQR!!! PNZC"));
  
