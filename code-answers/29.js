// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let number = [];
let evenNumber = [];
let i = 0;
let sumOfEven = 0;
let sumOfOdd = 0;
for(i; i<=100; i++) {
    number.push(i);
    if(i % 2 == 0) {
        sumOfEven = sumOfEven + i;
    } else if(i % 2 == 1) {
        sumOfOdd = sumOfOdd + i;
    }
};
console.log(number);
console.log(`The sum of even number is ${sumOfEven}`);
console.log(`The sum of odd number is ${sumOfOdd}`);
