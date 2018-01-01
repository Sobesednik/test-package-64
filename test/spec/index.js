const assert = require('assert')
const context = require('../context/')
const testPackage_64 = require('../../src/')

const testPackage_64TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_64, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_64()
        })
    },
}

module.exports = testPackage_64TestSuite
