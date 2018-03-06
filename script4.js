const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [one,tow,three,four,five,six,seven,eight,nine] = grades;

let sum = 0;

const average = (...args) => {
    args.forEach(arg => {
        sum = sum + arg;
        console.log(`${arg} oraz suma ${sum}`)
    });
    console.log(`srednia to: ${sum / args.length}`)
    sum=0;
};
average(one,tow,three,four,five,six,seven,eight,nine);
average(one,tow);