import calculateLevel from './calculate-level';

describe('calculateLevel', () => {
  test.each([
    [1, ['1', 'X', '1', 'X']],
    [2, ['1', 'X', '2', 'X']],
    [5, ['1', '4', 'X', '4']],
    [10, ['1', 'X', '8', '8', '9']],
    [10, ['8', '1', 'X', '8', '9']],
    [10, ['9', 'X', '7', '7', '8']],
    [11, ['9', '8', '7', '7', '8']],
    [13, ['10', '9', '8', '7', '7', '8', '9']],
    [10, ['4', '4', '5', '10']],
    [11, ['4', '4', '5', '5', '6', '6', '7', '10']],
  ])('should return lowest possible level of %i from %j', (lowestLevel, levels) => {
    expect(calculateLevel(levels)).toEqual(lowestLevel);
  });
});
