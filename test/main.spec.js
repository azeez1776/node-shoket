const {makePayment} = require('../src/index');
const {isFunction} = require('lodash');


describe('testing the makePayment function', () => {
    test('testing if is a function', () => {
        expect(isFunction(makePayment)).toBe(true);
    })
})

