import { d1c2 } from "./d1c2";

describe("d1c2", () => {
  it("finds the largest collection of numbers in broken down array", () => {
    const data = [
      "1000",
      "2000",
      "3000",
      "",
      "5000",
      "6000",
      "",
      "300",
      "800",
      "",
      "2000",
      "6000",
      "12000",
      "",
      "80",
    ];
    const result = d1c2(data);

    expect(result).toStrictEqual(37000);
  });
});
