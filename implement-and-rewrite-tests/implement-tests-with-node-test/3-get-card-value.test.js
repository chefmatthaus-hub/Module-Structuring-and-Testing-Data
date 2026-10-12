import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Ace has a value of 11", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Two has a value of 2", () => {
  assert.equal(getCardValue("2♥"), 2);
});

test("Ten has a value of 10", () => {
  assert.equal(getCardValue("10♥"), 10);
});

test("Jack has a value of 10", () => {
  assert.equal(getCardValue("J♣"), 10);
});

test("Queen has a value of 10", () => {
  assert.equal(getCardValue("Q♦"), 10);
});

test("King has a value of 10", () => {
  assert.equal(getCardValue("K♦"), 10);
});

test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});

test("Invalid rank throws an error", () => {
  assert.throws(() => getCardValue("Z♠"), /Expected a number followed by a suit, but got "Z♠"/, "Expected clear error");
});

test("Invalid suit throws an error", () => {
  assert.throws(() => getCardValue("9X"), /Expected a number followed by a suit, but got "9X"/, "Expected clear error");
});

test("Card without a suit throws an error", () => {
  assert.throws(() => getCardValue("9"), /Expected a number followed by a suit, but got "9"/, "Expected clear error");
});

test("Card without a rank throws an error", () => {
  assert.throws(() => getCardValue("♠"), /Expected a number followed by a suit, but got "♠"/, "Expected clear error");
});

test("Card without a number greater than 10 throws an error", () => {
  assert.throws(() => getCardValue("15♠"), /Expected a number followed by a suit, but got "15♠"/, "Expected clear error");
});


// TODO: What other invalid card cases can you think of?