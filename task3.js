let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let three = 3;
let five = 5;
let sixty = 60;
let ninety = 90;

let multiolesOfThree = someNumbers.some((number) => {
  return number % three === 0;
});
let multiolesOfFive = someNumbers.some((number) => {
  return number % five === 0;
});

let multiolesOfSixty = someNumbers.some((number) => {
  return number % sixty === 0;
});

let multiolesOfNinety = someNumbers.some((number) => {
  return number % ninety === 0;
});

console.log(multiolesOfThree);
console.log(multiolesOfFive);
console.log(multiolesOfSixty);
console.log(multiolesOfNinety);
// const ages = [3, 10, 18, 20];

// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }
