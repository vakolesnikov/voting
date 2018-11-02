const count = 5;
const candidates = new Array(count).fill(0);
let votes = 0;

const generateVote = () => {
    const id = Math.floor(Math.random() * candidates.length);
    votes += 1;
    candidates[id] += 1;
};

const timerId = setInterval(
    () => {
        generateVote();
        console.log(candidates);
    },
    500
);

setTimeout(
    () => clearInterval(timerId),
    20000
);