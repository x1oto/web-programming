const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false];
const arr4 = [null, undefined];
const arr5 = [{name: 'Asia', age: 18}, {name: 'Asia', age: 21}];

arr1.forEach((num) => {
  console.log(num * 2);
});

const arr1Doubled = arr1.map((num) => {
  return num * 2;
});
console.log(arr1Doubled);

const arr2Filtered = arr2.filter((fruit) => {
  return fruit !== 'banana';
});
console.log(arr2Filtered);

const arr3Sum = arr3.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(arr3Sum);

arr1.sort((a, b) => {
  return a - b;
});
console.log(arr1);

console.log(arr2.includes('apple'));

const arr5Names = arr5.map((person) => {
  return person.name;
});
const arr5NamesJoined = arr5Names.join(', ');
console.log(arr5NamesJoined);

function sum(nums) {
  const numsSum = nums.map((num) => {
    return Number(num);
  }).reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return numsSum;
}
console.log(sum([1, 2, 3]));

function getSentence(words) {
  const sentence = words.reduce((acc, curr) => {
    return acc + ' ' + curr;
  }, '');
  return sentence.trim() + '.';
}
console.log(getSentence(['This', 'is', 'a', 'sentence']));

function sumNumArrays(arr1, arr2) {
  const arrSum = arr1.concat(arr2).reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return arrSum;
}
console.log(sumNumArrays([1, 2, 3], [4, 5, 6]));

function welcomeUsers(users) {
  const greetings = users.map((user) => {
    return `Welcome, ${user.name}! You are ${user.age} years old.`;
  });
  return greetings;
}
console.log(welcomeUsers([{name: 'John', age: 30}, {name: 'Jane', age: 25}]));
