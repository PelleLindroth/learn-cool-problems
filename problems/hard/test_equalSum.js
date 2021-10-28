import assert from 'assert'
import { equalSum } from './equalSum.js'

describe('equalSum', () => {
  it('find all pair of numbers whose sum is equal to a given number', () => {
    const response = equalSum([1, 2, 3, 4, 5, 6], 8)
    assert.deepStrictEqual(response, [[2, 6], [3, 5]])
  })
})