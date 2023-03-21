// ex 1

// let numbers = [22, 1, 11, 58, 76, 0, 111, 254];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 17) {
//     console.log(numbers[i]);
//   }
// }

// ex 2

let person = {
    name: "Vadim",
    age: 13,
    grades: [8, 10, 6, 12, 1, 7],
}
console.log(person);

let a = person.grades[0];
let b = person.grades[5];
console.log(a);
console.log(b);

let sum = 0;
for (let i = 0; i < person.grades.length; i++ ) {
    sum += person.grades[i];
}

console.log(sum)