const { TestWatcher } = require('@jest/core');

const { lib } = require("./main.js");
//import { sumTest } from "main.js";


const sumTest = require('./main');

test('Test sum example', () => {
    expect(sumTest(2, 2)).toBe(4);
});