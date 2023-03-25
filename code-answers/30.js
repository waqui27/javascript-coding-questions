// 30. Write a script which generates a random hexadecimal number.

// let hexadecimal = "0123456789ABCDEF";
// function getRandomHex(...arg)  {
//     let hexletter = "";
//     for(a of arg) {
//         hexletter = hexletter + arg[Math.floor(Math.random() * 16)];
//     }
//     console.log(hexletter);
//     console.log(typeof(hexletter));
// }
// getRandomHex(...hexadecimal)


// second method
function getRandomHex2()  {
    let hexadeci = "0123456789ABCDEF";
    let hexletter = "";
    for(let i=0; i < hexadeci.length; i++) {
        hexletter += hexadeci[Math.floor(Math.random() * hexadeci.length)];
    };
    return hexletter;
}
console.log(getRandomHex2());

// let hexadecimal = "0123456789ABCDEF";
// function getRandomHex(...arg)  {
//     let hexletter = "";
//     let hexletter2 = "#";
//     for(a of arg) {
//         hexletter2 = hexletter2 + arg[Math.floor(Math.random() * 16)];
//         hexletter = hexletter2.slice(0, 7);
//     }
//     console.log(hexletter);
//     console.log(hexletter2);
//     console.log(typeof(hexletter));
// }
// getRandomHex(...hexadecimal)
