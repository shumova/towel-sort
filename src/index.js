
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix && matrix.length ? matrix.flatMap((arr, i) => i % 2 ? arr.slice().reverse() : arr) : [];
}
