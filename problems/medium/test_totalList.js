import assert from 'assert'
import { totalList } from './totalList.js'

describe('totalList', () => {
  it('computes the running total of a list and returns it', () => {
    const response = totalList([1, 3, 5, 123, 331, 391, 0])
    assert.equal(response, 854)
  })
})