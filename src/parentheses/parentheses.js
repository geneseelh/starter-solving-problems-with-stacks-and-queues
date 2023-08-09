const Stack = require("../lib/stack");

// algorithm that accepts an expression as a string and returns true if the parentheses in the expression match and false otherwise
const match = (expression) => {
  // initialize a new empty stack
  const newStack = new Stack();

  // start a loop to iterate through each character in the expression
  for (let i = 0; i < expression.length; i++) {
    //if the current character is an opening parentheses
    if (expression[i] === "(") {
      // push it onto the new stack
      newStack.push("(");
      // else if the current character is a closing parentheses
    } else {
      if (expression[i] === ")") {
        // if the stack isnt empty
        if (newStack.top) {
          // pop one item off the stack
          newStack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !newStack.top;
};

module.exports = match;
