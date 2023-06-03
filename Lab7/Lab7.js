const array1 = [1, 2, 3];
const array2 = [true, false];
const array3 = ['a', 'b', 'c'];
const array4 = [{ name: 'Asia' }];
const array5 = [null, undefined];

for (const element of array2) {
  console.log(element);
}

let i = 0;
while (i < array3.length) {
  console.log(array3[i]);
  i++;
}

let j = 0;
do {
  console.log(array1[j]);
  j++;
} while (j < array1.length);

function sum(arr) {
  let sum = 0;
  for (const element of arr) {
    if (typeof element === 'number') {
      sum += element;
    }
  }
  return sum;
}

console.log(sum([1, 2, 3, '4', true]));

function getSentence(words) {
  return words.join(' ') + '.';
}

console.log(getSentence(['This', 'is', 'a', 'sentence']));

function sumNumArrays(arr1, arr2) {
  let sum = 0;
  for (const element of arr1) {
    if (typeof element === 'number') {
      sum += element;
    }
  }
  for (const element of arr2) {
    if (typeof element === 'number') {
      sum += element;
    }
  }
  return sum;
}

console.log(sumNumArrays([1, 2, 3], [4, 5, 6, '7']));

function welcomeUsers(users) {
  const greetings = [];
  for (const user of users) {
    const name = user.name;
    const age = user.age;
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    greetings.push(greeting);
  }
  return greetings;
}

console.log(welcomeUsers([{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }]));
