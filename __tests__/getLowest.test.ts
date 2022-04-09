import { getLowestIndex } from "../src/getLowest";

describe("getLowestIndex", () => {
    it("should return the lowest index", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = getLowestIndex(arr);
        expect(result).toBe(0);
    })
})
