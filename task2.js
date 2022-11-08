let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

let bListAnimals = // Your 'filter' code here.
  animals.filter((animal) => {
    return animal.startsWith("b");
  });

console.log(bListAnimals);
