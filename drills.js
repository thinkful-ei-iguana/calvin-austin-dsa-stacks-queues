const { _Node, Queue, Stack } = require("./index");

const starTrek = new Stack();

function peek(stack) {
  console.log(stack.top.data);
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  let arr = [];
  let nextNode = stack.top;
  while (nextNode) {
    arr = [...arr, nextNode.data];
    nextNode = nextNode.next;
  }
  return arr.join(" > ");
}

// Drill 3 Palindrome checker
function is_palindrome(s) {
  let palindrome = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let newString = [...s];

  for (let i = 0; i < s.length; i++) {
    palindrome.push(s[i]);
  }
  let backwardString = [];
  while (palindrome.top !== null) {
    backwardString.push(palindrome.pop());
  }
  console.log(backwardString);
  if (JSON.stringify(newString) === JSON.stringify(backwardString)) {
    return true;
  } else {
    return false;
  }
}

function run() {
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  peek(starTrek);
  console.log(isEmpty(starTrek));
  console.log(display(starTrek));
  console.log(is_palindrome("Kirk"));
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("a"));
  console.log(is_palindrome("taco cat"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
}
run();
