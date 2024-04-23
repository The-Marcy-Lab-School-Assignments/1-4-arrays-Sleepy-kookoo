/** FEEDBACK: Great job! Just remember to remove any commented out code! */
const uppercaseAll = (...words) => {
  let arr = []
  for (let letters of words) {
    arr.push(letters.toUpperCase())
  };
  return arr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

//console.log(destructureCoordinates([1, 2]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
