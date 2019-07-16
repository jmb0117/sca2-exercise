const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
};

const factorial = num => {
  let array = [];
  for(let i = 1; i < num; i++ )
  { 
    i.add(array);
  }

  let answer =  1;
  for (let i = 0; i <= array.length; i++)
  {
    answer = answer * array[i]; 
  }
    return answer;
  // TODO - write a function which returns the factorial of a positive integer
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]

  let newArray = [];
  if (arr1.length === arr2.length) 
  {
    for (i = 1; i < arr1.length; i++) 
    {
      newArray.add((arr1[i], arr2[i]));
    }
    return newArray;

  }
  else 
  return -1;


};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
console.log(tokenize("the dog has floppy ears"));
zip([1,2,3,4], [5,6,7,8]);
