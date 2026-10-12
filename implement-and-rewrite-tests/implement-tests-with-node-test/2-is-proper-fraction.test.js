import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Returns true for a basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Returns true for 2/8", () => {
  assert.equal(isProperFraction(2, 8), true);
});

test("Returns true when the numerator is zero and denominator is positive", () => {
  assert.equal(isProperFraction(0, 1), true);
});

test("Returns true for 5/8", () => {
  assert.equal(isProperFraction(5, 8), true);
});

test("Returns true for 8/9", () => {
  assert.equal(isProperFraction(8, 9), true);
});

test("Returns true for another proper fraction with a smaller numerator", () => {
  assert.equal(isProperFraction(2, 4), true);
});

test("Returns true when both numerator and denominator is negative", () => {
  assert.equal(isProperFraction(-1, -2), true);
});

test("Returns true when the numerator is positive denominator is negative", () => {
  assert.equal(isProperFraction(1, -2), true);
});

test("Returns true when the numerator is negative and the denominator is positive", () => {
  assert.equal(isProperFraction(-1, 2), true);
});

test("Returns false when the numerator is greater than the denominator", () => {
  assert.equal(isProperFraction(9, 8), false);
});

test("Returns false when numerator is negative and denominator is zero", () => {
  assert.equal(isProperFraction(-1, 0), false);
});

test("Returns false for 4/2", () => {
  assert.equal(isProperFraction(4, 2), false);
});

test("Returns false for 5/3", () => {
  assert.equal(isProperFraction(5, 3), false);
});

test("Returns false for 6/4", () => {
  assert.equal(isProperFraction(6, 4), false);
});

test("Returns false for 7/1", () => {
  assert.equal(isProperFraction(7, 1), false);
});

test("Returns false for 15/14", () => {
  assert.equal(isProperFraction(15, 14), false);
});

test("Returns false when numerator equals denominator", () => {
  assert.equal(isProperFraction(4, 4), false);
});

test("Returns false when numerator is positive and denominator is zero", () => {
  assert.equal(isProperFraction(1,0), false);
})
