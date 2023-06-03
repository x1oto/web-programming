const str1 = 'hello';
const str2 = 'world';
const str3 = 'Ukraine';
const str4 = 'Lviv';
const str5 = 'Asia';

const result1 = str1 + ' ' + str2; 
const result2 = `${str1} ${str2}`; 
const result3 = str3.concat(' is', ' a', 'winner'); 

const result4 = str4.toUpperCase(); 
const result5 = str5.toLowerCase();

const str6 = '   Hello, world!  ';
const result6 = str6.trim().replace(',', ''); 
const str7 = 'Ukraine is the best country';
const result7 = str7.match(/S\w+/g);

const arr = ['а', 'б', 'в',];
const result8 = arr.sort((a, b) => a.localeCompare(b, 'uk')); 

const str8 = 'Save your tears for another day';
const result9 = str8.includes('fox'); 

function welcomeUsers(users) {
  return users.map((user) => `Hello ${user.name}, you are ${user.age} years old.`);
}
const users = [
  { name: 'Asia', age: 18 },
  
];
const result10 = welcomeUsers(users);

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
const result11 = isPalindrome('racecar'); 
const result12 = isPalindrome('hello');
