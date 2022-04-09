import {getHighestIndex} from '../src/getHighest';

describe('getHighest', () => {
  it('should return index with the highest number in an array', () => {
    expect(getHighestIndex([1, 2, 3, 4, 5])).toBe(4);
  });
});