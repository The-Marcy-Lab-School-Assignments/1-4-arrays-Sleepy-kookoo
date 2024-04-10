const uppercaseAll = (...words) => {
  let arr = []
  for (let letters of words) {
    arr.push(letters.toUpperCase())
  };
  return arr
  //   word1.toUpperCase(),
  //   word2.toUpperCase(),
  //   word3.toUpperCase(),
  // ];
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
