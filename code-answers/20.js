// Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
let students_score = (score) => {
    if(score>=80 && score<=100) {
        console.log(`You have got grade A with socre ${score}.`)
    } else if(score>=70 && score<80) {
        console.log(`You have got grade B with socre ${score}.`)
    } else if(score>=60 && score<70) {
        console.log(`You have got grade C with socre ${score}.`)
    } else if(score>=50 && score<60) {
        console.log(`You have got grade D with socre ${score}.`)
    } else if(score<50) {
        console.log(`You have got grade F with socre ${score}.`)
    };
};

students_score(50);

 