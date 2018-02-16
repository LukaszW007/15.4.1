let sum = 0;

const average = (...args) => {
    args.forEach(arg => {
        sum = sum + arg;
        console.log(`${arg} oraz suma ${sum}`)
    });
    console.log(`srednia to: ${sum / args.length}`)
};
average(10, 5, 8, 9, 1);