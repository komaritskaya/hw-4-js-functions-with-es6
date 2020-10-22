// 1

const splitAndMerge = (str, sp) => {
  const words = str.split(' ');
  return words.map((word) => word.split('').join(sp)).join(' ');
};

// Test:
console.log(splitAndMerge("My name is John"," ")); // "M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!",",")); // "H,e,l,l,o W,o,r,l,d,!"


// 2

const convert = (obj) => Object.entries(obj);

// Test:
const user = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(convert(user)); // [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]


// 3

const toCamelCase = (str) => {
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  
  const words = str.split(/[\s-_]/);
  
  return words.map((word) => {
    return words.indexOf(word) === 0 ? word : capitalizeFirstLetter(word)
  }).join('');
}

// Test:
console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"


// 4

const reverseWords = (string) => {
  const words = string.split(' ');
  return words.map((word) => {
    return word.split('').reverse().join('');
  }).join(' ');
}

// Test:
console.log(reverseWords('A fun little challenge!')); // "A nuf elttil !egnellahc"


// 5

const stringExpansion = (str) => {
  const newArr = [];
  const symbols = str.split('');

  for (const [index, value] of symbols.entries()) {
    if (isNaN(Number(value)) && isNaN(Number(symbols[index-1]))) {
      newArr.push(value);
    } else if (isNaN(Number(symbols[index+1]))) {
      for (let j = 0; j < value; j++) {
        newArr.push(symbols[index+1]);
      }
    }
  }
  return newArr.join('');
}


// Test:
console.log(stringExpansion('3D2a5d2f')); // "DDDaadddddff"
console.log(stringExpansion('3d332f2a')); // "dddffaa"
console.log(stringExpansion('abcde')); // "abcde"


// 6

const largest = (...arguments) => arguments.reduce((a, b) => Math.max(a, b));
const smallest = (...arguments) => arguments.reduce((a, b) => Math.min(a, b));

// Test:
console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5


// 7

const transform = (array) => array.map((element) => () => element);

// Test:
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // 40
console.log(newArray[4]()); // 50


// 8

const sum = (...arguments) => arguments.length === 0 ? 0 : arguments[0] + sum(...arguments.slice(1));

// Test:
console.log(sum(1,3,5,7)); // 16


// 9

const countDown = (number) => {
  if (number <= 0) { 
    console.log(0);
  } else {
  console.log(number);
  countDown(number - 1);
  }
}

// Test:
countDown(3); // 3 2 1 0
countDown(5); // 5 4 3 2 1 0
