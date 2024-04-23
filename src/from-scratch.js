/** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
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
  return arr.indexOf(value) === index;
};
//console.log(isRightIndex(['a', 'b', 'c', 'd', 'e'], 'a', 0))

const roundAllNumsDown = (arr) => {
  const newArr = [];
  for (const num of arr) {
    newArr.push(Math.floor(num))
  }
  return newArr
};

//console.log(roundAllNumsDown([1.1, 2.2, 3.3]))

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(coord => coord[1])
};

//console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]))

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
