import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return false when numerator equals the denominator`, () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

test(`should return false if 15/14`, () => {
  expect(isProperFraction(15, 14)).toEqual(false);
});

test(`should return false if numerator is negative and denominator is zero`, () => {
  expect(isProperFraction(-1, 0)).toEqual(false);
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

test(`should return true if numerator is zero and the denominator is positive`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});

test(`should return true for a basic proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test("Returns false when both numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

test("Return true when numerator is zero and denominator is negative", () => {
  expect(isProperFraction(0, -2)).toEqual(true);
});

test("Returns false when positive numerator has greater magnitude than negative denominator", () => {
  expect(isProperFraction(3, -2)).toEqual(false);
});

test("Returns false when both numbers are negative and numerator has greater magnitude", () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
});

test("Returns false when negative numerator has greater magnitude than positive denominator", () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
});

test("Returns false when numerator and denominator are equal negative numbers", () => {
  expect(isProperFraction(-4, -4)).toEqual(false);
});