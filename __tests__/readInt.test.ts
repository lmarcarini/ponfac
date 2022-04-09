import {readInt} from '../src/readInt';

describe('test for index.js', () => {
    it("should read 10000 elements", () => {
        const array : ConstrainedNumber[] = readInt();
        expect(readInt()).toHaveLength(10000);})

    it("elements must be between 0 and 20",() => {
        const array : ConstrainedNumber[] = readInt();
        for (let n of array) {
            expect(n).toBeGreaterThanOrEqual(0);
            expect(array[n]).toBeLessThanOrEqual(20);
        }
    }
    )
    })