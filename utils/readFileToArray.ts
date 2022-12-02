import { readFileSync } from "fs";

/**
 * Reads any given txt file
 *
 * @param fileName this is the name of the txt file you would like to read
 * @returns an array split on every line e.g. ["1000", "2000", "", "8000"]
 */
export const readFileToArray = (day: number) => {
  const data = readFileSync(`src/day${day}/input.txt`, "utf8");
  const lines = data.split(/\n/);

  return lines;
};
