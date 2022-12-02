import challenges from "./src/challenges";

const argument = process.argv[2];
const result = challenges[argument]();
console.log(result);
