const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront == true) {
    return arr.unshift(value)
  } else {
    return arr.push(value)
  }
};

const reverseString = (str) => {
  let newStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
};

const newArrayFullOf = (value, numOfValue) => {
  let arr = [];
  for (let i = 1; i <= numOfValue; i++) {
    arr.push(value)
  }
  return arr
};
//const arr = Array(numOfValue)
//arr.fill(value, 0, numOfValue)
//return arr;
//console.log(newArrayFullOf(3, 5))

const insertIntoMiddle = (arr, value) => {
  const middle = Math.floor(arr.length / 2)
  arr.splice(middle, 0, value)
  return arr
};
//console.log(insertIntoMiddle([1, 2, 3, 4, 5], 6))

const deleteFromMiddle = (arr) => {
  const middle = Math.floor(arr.length / 2)
  arr.splice(middle, 1)
  return arr
};
//console.log(deleteFromMiddle[1, 2, 3, 4, 5])

const isRightIndex = (arr, value, index) => {
};

const roundAllNumsDown = (arr) => {
  const copyArr = [...arr];
  copyArr.forEach(Math.floor)
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
