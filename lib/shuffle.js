const shuffle = (arr, randomNumberGenerator = Math.random) =>
  arr
    .map(a => [randomNumberGenerator(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

module.exports = shuffle
