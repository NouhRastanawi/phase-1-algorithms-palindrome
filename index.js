function isPalindrome(word) {
  if(word === word.split("").reverse().join("")) {
    return true
  }
  else {
    return false
  }
}

/* 
  We split the word and then reverse the letters and rejoin them again.
  Then we do the check. If the orignal word is the same after reversing
  --> the word is Palindrome (true). Otherwise it is not (false). 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

console.log(isPalindrome("mom"));
console.log(isPalindrome("grape"));

module.exports = isPalindrome;
