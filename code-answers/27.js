// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const mini = Math.min(...ages);
const maxi = Math.max(...ages);
console.log(maxi);
console.log(mini);


function average_value(...args) {
    let sum = 0;
    for(a of args) {
        sum = sum + a;
    }
    return sum / args.length;
}
let average = average_value(...ages);
console.log(average);


let range = maxi - mini;
console.log(range);

console.log(Math.abs(mini - average));
console.log(Math.abs(maxi - average));


