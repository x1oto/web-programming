
const array1 = [1, 2, 3];
const array2 = [true, false];
const array3 = ['a', 'b', 'c'];
const array4 = [{ name: 'Asia' }];
const array5 = [null, undefined];


array1.push(4);
const poppedElement = array2.pop();


array3.unshift(false);
const shiftedElement = array4.shift();


const newArr = array1.concat(array2);


function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}


function swapDestructured(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}


function transformSquares(array) {
  return array.map(num => num ** 2);
}


function transformReverseStrings(array) {
  return array.map(str => str.split('').reverse().join(''));
}


function transformCombineObjects(array) {
  return array.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}


function findMaxNumber(arr) {
  return Math.max(...array);
}
