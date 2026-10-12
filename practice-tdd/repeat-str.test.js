// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

test("should return an empty string", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeatStr(str, count)).toThrow();
});

test("should return Backstreet Boys lyrics", () => {
  const str = "bye";
  const count = 5;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("byebyebyebyebye");
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
