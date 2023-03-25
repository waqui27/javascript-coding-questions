// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ["India", "Bangladesh", "Nepal", "Bhutan", "Pakistan", "China", "Srilanka"];
countries.push("Ethiopia");
let indexOfEthiopia = countries.indexOf("Ethiopia");
console.log(indexOfEthiopia);
countries.splice(indexOfEthiopia, 1, countries[indexOfEthiopia].toUpperCase());
console.log(countries);


