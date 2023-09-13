const studentScore = require("./Problem2");

test("It should D score", () => {
  expect(studentScore(20)).toEqual("D");
});

test("It should C score", () => {
  expect(studentScore(40)).toEqual("C");
});

test("It should B score", () => {
  expect(studentScore(52)).toEqual("B");
});

test("It should B+ score", () => {
  expect(studentScore(70)).toEqual("B+");
});

test("It should A score", () => {
  expect(studentScore(90)).toEqual("A");
});

test("It should invalid number", () => {
  expect(studentScore("dua puluh")).toEqual("invalid");
});
