const numbers = [456, 254, 56454, 4, 64, 5454, 5, 454, 11];

const firstfunction = (param) => {
  let max = numbers[0];
  for (let x = 1; x < param.length; x++) {
    if (max < numbers[x]) {
      max = numbers[x];
    }
  }
  return max;
};
const answares = firstfunction(numbers);

console.log(answares);
