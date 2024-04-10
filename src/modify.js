const uppercaseAll = (word1, word2, word3) => {
  return [
    word1.toUpperCase(),
    word2.toUpperCase(),
    word3.toUpperCase(),
  ];
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
