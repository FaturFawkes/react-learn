const absoluteNumber = require("./Problem1");

test("Test Case 1", () => {
  expect(absoluteNumber(1)).toEqual(1);
});

test("Test Case 2", () => {
  expect(absoluteNumber(-4)).toEqual(4);
});

test("Test Case 3", () => {
  expect(absoluteNumber(0)).toEqual(0);
});
