import { readFileToArray } from "../../utils/readFileToArray";

// Output the top summed number from groups of numbers
export const d1c1 = (input?: string[]) => {
  console.log("You have selected Day 1 Challenge 1");
  const numbers = input ? input : readFileToArray(1);

  const addedNumArr: number[] = [];

  numbers.reduce((acc, curr) => {
    if (!curr) {
      addedNumArr.push(acc);
      return 0;
    }
    return acc + +curr;
  }, 0);

  addedNumArr.sort((a, b) => b - a);

  return addedNumArr[0];
};
