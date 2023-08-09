const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  // remove spaces and punctuation and convert to lowercase
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // calculate the middle index, rounding down for odd length strings
  let middle = Math.floor(sentence.length / 2);
  // initialize a new stack
  const stack = new Stack();

  // for each character up to the middle index of the sentence
  for (let i = 0; i < middle; i++) {
    // push the character onto the new stack
    stack.push(sentence[i]);
  }

  // for each character from the middle index to the end of the sentence (or middle + 1 for odd length strings)
  for (let i = middle + (sentence.length % 2); i < sentence.length; i++) {
    // pop a character off the stack
    const character = stack.pop();
    // compare the popped character to the current character in the sentence
    const currentChar = sentence[i];

    // if the characters don't match, return false
    if (character !== currentChar) {
      return false;
    }
  }

  // if all characters match, return true
  return true;
};

module.exports = isPalindrome;
