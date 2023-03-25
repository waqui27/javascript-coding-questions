// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14

const r = prompt("Enter the Radius of the Circle",);
const area = Math.PI * r ** 2;
const circumference = 2 * Math.PI * r;
console.log(`The area of the circle is ${area}`);
console.log(`The circumference of the circle is ${circumference}`);