import { d1c1 } from "./d1c1";

describe("d1c1", () => {
  it("finds the largest collection of numbers in broken down array", () => {
    const data = ["1000", "2000", "3000", "", "5000", "6000", "", "300", "800"];
    const result = d1c1(data);

    expect(result).toStrictEqual(11000);
  });
});
