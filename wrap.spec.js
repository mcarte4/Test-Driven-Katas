/*Basic Tests */
// is this a function

// does function take 2 arguments

// check that first argument is string

// check that second argument is number

// check that function returns a string

// no more than column number between /n

// for every word in the old string, does it exist in the new string

/* Edge Cases */

// if input contains word longer than column width, return error statement

// if input contains /n chars, respect those plus add any additional /n as needed

const { expect } = require('chai');
const wrap = require('./wrap');

// if input is empty string, should return empty string
describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
});

