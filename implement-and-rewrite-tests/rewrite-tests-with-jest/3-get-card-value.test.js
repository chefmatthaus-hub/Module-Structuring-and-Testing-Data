import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Ranks (Number Cards)
test("Two has a value of 2", () => {
  expect(getCardValue("2♥")).toEqual (2);
});

test("Five has a value of 2", () => {
  expect(getCardValue("5♦")).toEqual (5);
});

test("Ten has a value of 10", () => {
  expect(getCardValue("10♥")).toEqual(10);
});


//Case 3: Face cards (J, Q, K)
test("Jack has a value of 10", () => {
  expect(getCardValue("J♣")).toEqual(10);
});

test("Queen has a value of 10", () => {
  expect(getCardValue("Q♦")).toEqual(10);
});

test("King has a value of 10", () => {
  expect(getCardValue("K♦")).toEqual(10);
});


//Case 4: Invalid cards 
test("Card without a suit throws an error", () => {
  expect(() => getCardValue("9")).toThrow();
});

test("Card without a number throws an error", () => {
  expect(() => getCardValue("♣")).toThrow();
});

test("Card with invalid suit throws an error", () => {
  expect(() => getCardValue("9X")).toThrow();
});

test("Card with invalid rank throws an error", () => {
  expect(() => getCardValue("X♣")).toThrow();
});

test("Card with rank higher than 10 throws an error", () => {
  expect(() => getCardValue("15♣")).toThrow();
});
  

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
