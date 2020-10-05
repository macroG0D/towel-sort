
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  let counter = 0; // used to check if elem is even or odd
  if (matrix) {
    matrix.forEach(element => {
      if (counter % 2 == 0) {
        element.sort((a, b) => a - b); // sort from min to max
      } else {
        element.sort((a, b) => b - a); // sort from max to min
      }
      counter++;
    });
    return result.concat(...matrix); // flat array
  } else {  // if no args return empty array
    return [];
  }
}