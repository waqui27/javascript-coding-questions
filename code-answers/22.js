// 22. Write a program which tells the number of days in a month.

const moreNumberMonths = ["January", "March", "May", "July", "August", "October", "December"];
const lessNumberMonths = ["April", "June", "September", "November"];
function numberOfDays(month) {
    if(month == moreNumberMonths[0] || month == moreNumberMonths[1] || month == moreNumberMonths[2] || month == moreNumberMonths[3] || month == moreNumberMonths[4] || month == moreNumberMonths[5] || month == moreNumberMonths[6]) {
        console.log(`The Nummber of Days in ${month} is 31.`)
    } else if(month == lessNumberMonths[0] || month == lessNumberMonths[1] || month == lessNumberMonths[2] || month == lessNumberMonths[3]) {
        console.log(`The Number of Days in ${month} is 30`)
    } else if(month == "February") {
        console.log(`The Number of Days in ${month} is 28.`)
    };
};

numberOfDays("February")