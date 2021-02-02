const numbers = [1,2,3,4,5,6,7,8];
const part = numbers.slice(2, 5);  // from which index you want to slice and until which index you want to get
console.log(part);
console.log(numbers);

const part1 = numbers.splice(2, 5, 77, 88);
console.log(part1);
console.log(numbers);

const together = numbers.join(" ,");
console.log(together);
