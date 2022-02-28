const {makePayment} = require('../src/index');
const {isFunction} = require('lodash');
// import {makePayment} from '../src/index';
// import {isFunction} from 'lodash';

describe('testing the makePayment function', () => {
    test('testing if is a function', () => {
        expect(isFunction(makePayment)).toBe(true);
    })
})