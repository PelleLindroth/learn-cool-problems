import assert from 'assert'
import { splitEvery } from './splitEvery.js'

describe('splitEvery', () => {
  it('splits the array into slices of lenght n', () => {
    const response = splitEvery([1, 2, 3, 4, 5, 6, 7], 3)
    assert.deepStrictEqual(response, [[1, 2, 3], [4, 5, 6], [7]])
  })
})