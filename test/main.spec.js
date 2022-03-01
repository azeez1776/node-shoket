const {makePayment, verifyPayment} = require('../src/index');
const {isFunction} = require('lodash');


describe('testing the makePayment function', () => {
    test('testing if is a function', () => {
        expect(isFunction(makePayment)).toBe(true);
    })
});

describe('testing the verifyPayment', () => {
    test('testing if is a function', () => {
        expect(isFunction(verifyPayment)).toBe(true);
    })
})

