import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("classifies acute angles", () => {
  assert.equal(getAngleType(1), "Acute angle");
  assert.equal(getAngleType(45), "Acute angle");
  assert.equal(getAngleType(89), "Acute angle");
  assert.equal(getAngleType(36), "Acute angle");
  assert.equal(getAngleType(20), "Acute angle");
  
});

test("classifies obtuse angles", () => {
  assert.equal(getAngleType(91), "Obtuse angle");
  assert.equal(getAngleType(105), "Obtuse angle");
  assert.equal(getAngleType(179), "Obtuse angle");
  assert.equal(getAngleType(125), "Obtuse angle");
  assert.equal(getAngleType(110), "Obtuse angle");
});

test("classifies straight angles", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});

test("classifies reflex angles", () => {
  assert.equal(getAngleType(181), "Reflex angle");
  assert.equal(getAngleType(220), "Reflex angle");
  assert.equal(getAngleType(289), "Reflex angle");
  assert.equal(getAngleType(300), "Reflex angle");
  assert.equal(getAngleType(349), "Reflex angle");
});

test("classifies invalid angles", () => {
  assert.equal(getAngleType(-5), "Invalid angle");
  assert.equal(getAngleType(0), "Invalid angle");
  assert.equal(getAngleType(360), "Invalid angle");
  assert.equal(getAngleType(400), "Invalid angle");
  assert.equal(getAngleType(420), "Invalid angle");
});