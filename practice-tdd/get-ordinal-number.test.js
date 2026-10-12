import { getOrdinalNumber } from "./get-ordinal-number.js";
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

test("should append 'th' for numbers ending with 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(2111)).toEqual("2111th");
});

test("should append 'nd' for numbers ending with 2 except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(4022)).toEqual("4022nd");
});

test("should append 'th' for numbers ending in 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(1012)).toEqual("1012th");
});

test("should append 'rd' for numbers ending with 3 except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(3033)).toEqual("3033rd");
});

test("should append 'th' for numbers ending in 13", () => {
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(1013)).toEqual("1013th");
});

test("should append 'th' for numbers ending in 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(24)).toEqual("24th");
});

test("should append 'th' for numbers ending in 5", () => {
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(15)).toEqual("15th");
  expect(getOrdinalNumber(1025)).toEqual("1025th");
});

test("should append 'th' for numbers ending in 6, 7, 8, 9", () => {
  expect(getOrdinalNumber(6)).toEqual("6th");
  expect(getOrdinalNumber(7)).toEqual("7th");
  expect(getOrdinalNumber(8)).toEqual("8th");
  expect(getOrdinalNumber(9)).toEqual("9th");
});

test("should append 'th' for numbers ending in 10", () => {
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(110)).toEqual("110th");
  expect(getOrdinalNumber(1010)).toEqual("1010th");
});

test("should append 'th' for numbers ending in 20", () => {
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(120)).toEqual("120th");
  expect(getOrdinalNumber(1120)).toEqual("1120th");
});