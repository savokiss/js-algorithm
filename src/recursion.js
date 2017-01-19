// basic recursion

function recursive(input) {
  if (input <= 0) {
    return input;
  }
  console.log(input)
  return recursive(input - 1);
}

recursive(10);