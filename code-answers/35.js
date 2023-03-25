let arr = [1, 1, 3, 4, 5]
for(let i=0; i<arr.length; i++) {
    if(arr[i]===arr[i+1])  {
        return console.log(`The array is not unique.`)
    } else {
        return console.log(`The array is unique.`)
    }
}