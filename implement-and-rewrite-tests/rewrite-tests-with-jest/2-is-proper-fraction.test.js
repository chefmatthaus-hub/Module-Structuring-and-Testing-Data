import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// // Special case: numerator is zero
// test(`should return false when denominator is zero`, () => {
//   expect(isProperFraction(1, 0)).toEqual(false);
// });

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return false when numerator equals the denominator`, () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

test(`should return false if 15/14`, () => {
  expect(isProperFraction(15, 14)).toEqual(false);
});

test(`should return false if 7/1`, () => {
  expect(isProperFraction(7, 1)).toEqual(false);
});

test(`should return false if 6/4`, () => {
  expect(isProperFraction(6, 4)).toEqual(false);
});

test(`should return false if 5/3`, () => {
  expect(isProperFraction(5, 3)).toEqual(false);
});

test(`should return false if 4/2`, () => {
  expect(isProperFraction(4, 2)).toEqual(false);
});

test(`should return false if numerator is negative and denominator is zero`, () => {
  expect(isProperFraction(-1, 0)).toEqual(false);
});

test(`should return false when the numerator is greater than the denominator`, () => {
  expect(isProperFraction(9, 8)).toEqual(false);
});

test(`should return true if numerator is negative and denominator is positive`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

test(`should return true if numerator is positive and denominator is negative`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});

test(`should return true if both numerator and denominator is negative`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

test(`should return true for another proper fraction with a smaller numerator`, () => {
  expect(isProperFraction(2, 4)).toEqual(true);
});

test(`should return true if 8/9`, () => {
  expect(isProperFraction(8, 9)).toEqual(true);
});

test(`should return true if 5/8`, () => {
  expect(isProperFraction(5, 8)).toEqual(true);
});

test(`should return true if numerator is zero and the denominator is positive`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});

test(`should return true 2/8`, () => {
  expect(isProperFraction(2, 8)).toEqual(true);
});

test(`should return true for a basic proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});