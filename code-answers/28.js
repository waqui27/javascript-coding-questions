// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
let number = [];
let evenNumber = [];
let i = 0;
for(i; i<=100; i++) {
    number.push(i);
    if(i % 2 == 0) {
        evenNumber.push(i);
    };
};
console.log(number);
console.log(evenNumber);
