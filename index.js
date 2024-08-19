const students = [
  ["mamun", 245],
  ["jeo", 524],
  ["rakib", 215],
  ["musfiqure", 448],
  ["james", 4545],
  ["docteso", 41],
  ["juliea", 54],
];
const secondfunction = (param) => {
  let max = students[0][0];
  let hight = students[0][1];
  for (let x = 1; x < param.length; x++) {
    if (hight < students[x][1]) {
      hight = students[x][1];
      max = students[x][0];
    }
  }
  return max;
};
const answers = secondfunction(students);
console.log(answers);
