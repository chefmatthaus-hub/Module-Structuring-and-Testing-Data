import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert hours after 12:00", () => {
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("correctly convert minutes after 12:00", () => {
    assert.equal(formatAs12HourClock("23:53"), "11:53 pm");
});

test("can correctly convert morning time", () => {
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert morning time minutes", () => {
    assert.equal(formatAs12HourClock("08:30"), "08:30 am");
});

test("can correctly convert morning time minutes", () => {
    assert.equal(formatAs12HourClock("08:34"), "08:34 am");
});

test("can successfully convert midnight time", () =>
    assert.equal(formatAs12HourClock("24:00"), "12:00 am"));

test("correctly convert midnight 00:00", () => {
    assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("correctly convert noon 12:00", () => {
    assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("correctly convert boundary time around noon", () => {
    assert.equal(formatAs12HourClock("11:59"), "11:59 am");
    assert.equal(formatAs12HourClock("12:01"), "12:01 pm");
});

test("correctly convert early afternoon hours", () => {
    assert.equal(formatAs12HourClock("13:00"), "1:00 pm");
});

test("correctly convert single-digit morning hours if supported", () => {
    assert(formatAs12HourClock("08:30"), "8:30am");
});

/*
Edge cases:
Correctly convert hours after 12:00
Input | Expected
23:00   11:00 pm

Correctly convert afternoon hours and minutes
Input | Expected
23:00   11:53 pm

Correctly convert morning time and minutes
Input | Expected
08:00   08:00 am

Correctly convert morning time and minutes
Input | Expected
08:30   08:30 am

Correctly convert morning time and minutes
Input | Expected
08:34   08:34 am

Correctly convert midnight time
Input | Expected
24:00   12:00 am

Correctly convert midnight
Input | Expected
00:00   12:00 am

Correctly convert noon
Input | Expected
12:00   12:00 pm

Correctly convert boundary time around noon
Input | Expected
11:59   11:59 am
12:01   12:01 pm

Correctly convert early afternoon hours 
Input | Expected
13:00   1:00 pm

Correctly convert single-digit morning hours if supported
Input | Expected
08:30   8:30 am
*/