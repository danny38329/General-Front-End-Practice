function palindrome(str: string): boolean {
  
    str = str.toLowerCase();  //Turn everything to lower case
    // Remove all alphanumeric characters.
    str = str.replace(/[^a-z0-9]/g, '');
    var backward = str.split('');
    backward = backward.reverse().join('').toString();
    
    if(backward === str){
      return true;
    } else {
      return false;
    }
  }