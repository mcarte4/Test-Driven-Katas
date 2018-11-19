const { expect } = require('chai');
const wrap = require('./wrap');

/*Basic Tests */
// is this a function
describe('wrap', () => {
  it('is a function', () => {
    expect(wrap).to.be.a('function')
    })
  })

// check that first argument is string

// check that second argument is number

// check that function returns a string
describe('wrap', () => {
  it('returns a string', () => {
    expect(wrap()).to.be.a('string')
  })
})

// no more than column number between /n

// for every word in the old string, does it exist in the new string

/* Edge Cases */

// if input contains word longer than column width, return error statement

// if input contains /n chars, respect those plus add any additional /n as needed

// if input is empty string, should return empty string
describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
});

