import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Returns true for a basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Returns true when the numerator is zero and denominator is positive", () => {
  assert.equal(isProperFraction(0, 1), true);
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

test("Returns false when numerator is negative and denominator is zero", () => {
  assert.equal(isProperFraction(-1, 0), false);
});

test("Returns false for 15/14", () => {
  assert.equal(isProperFraction(15, 14), false);
});

test("Returns false when numerator equals denominator", () => {
  assert.equal(isProperFraction(4, 4), false);
});

test("Returns false when numerator is positive and denominator is zero", () => {
  assert.equal(isProperFraction(1, 0), false);
});

test("Returns false when both numerator and denominator are zero", () => {
  assert.equal(isProperFraction(0, 0), false);
});

test("Returns true when numerator is zero and denominator is negative", () => {
  assert.equal(isProperFraction(0, -2), true);
});

test("Returns false when positive numerator has greater magnitude than negative denominator", () => {
  assert.equal(isProperFraction(3, -2), false);
});

test("Returns false when negative numerator has greater magnitude than positive denominator", () => {
  assert.equal(isProperFraction(-3, 2), false);
});

test("Returns false when both numbers are negative and numerator has greater magnitude", () => {
  assert.equal(isProperFraction(-3, -2), false);
});

test("Returns false when numerator and denominator are equal negative numbers", () => {
  assert.equal(isProperFraction(-4, -4), false);
});
