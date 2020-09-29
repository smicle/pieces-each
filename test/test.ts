import PiecesEach from '../src'

describe('Divide the array into specified chunks', () => {
  test('Divide into 2 chunks', () => {
    const before = [1, 2, 3, 4]
    const after = [[1, 2], [3, 4]]
    const n = 2
    expect(PiecesEach(before, n)).toStrictEqual(after)
  })
  test('Divide into 3 chunks', () => {
    const before = [1, 2, 3, 4, 5, 6, 7, 8]
    const after = [[1, 2, 3], [4, 5, 6], [7, 8]]
    const n = 3
    expect(PiecesEach(before, n)).toStrictEqual(after)
  })
})
