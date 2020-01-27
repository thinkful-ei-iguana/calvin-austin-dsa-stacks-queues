const { _Node, Queue, Stack } = require("./index");

const starTrek = new Stack();
const palCheck = new Stack();

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

function run() {
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  peek(starTrek);
  console.log(isEmpty(starTrek));
  console.log(display(starTrek));
}

// Drill 3 Palindrome checker
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
  //   function should check if something is a palindrome
  //   should be the same output AFTER reversing the input.
  //   all characters should be toLowerCase
  //   can check by adding seqentially to an array, then using a removal method, add what is removed to

  palCheck.push("dad");
  palCheck.push("A man, a plan, a canal: Panama");
  palCheck.push("1001");
  palCheck.push("Tauhida");
  peek(palCheck);
  console.log(isEmpty(palCheck));
  console.log(display(palCheck));
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

run();
