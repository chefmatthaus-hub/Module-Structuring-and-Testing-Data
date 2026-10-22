import { repeatStr } from "./repeat-str.js";

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

test("should return an empty string when repeating an empty string 3 times", () => {
  const str = "";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should return an empty string when repeating an empty string once", () => {
  const str = "";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should return an empty string when count is zero", () => {
  const str = "";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should throw an error when repeating an empty string a negative number of times", () => {
  const str = "";
  const count = -2;
  expect(() => repeatStr(str, count)).toThrow("Count cannot be negative");
});
