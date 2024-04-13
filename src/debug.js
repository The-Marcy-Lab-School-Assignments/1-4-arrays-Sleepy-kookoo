/** FEEDBACK: Great job! */
/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
};

const getFirstItem = (array) => {
  let copyArray = [...array]
  return copyArray[0]
};

module.exports = {
  clearArr,
  getFirstItem,
};
