// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

function checkeven(number) {
    if(number % 2 == 0) {
        console.log(`${number} is a even number`)
    } else {
        console.log(`${number} is an odd number`)
    };
};
checkeven(8);