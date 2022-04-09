import {countRepetition} from '../src/countRepetition';

describe('countRepetition', () => {
    it("should have 21 elements", () => {
        expect(countRepetition(new Array(10000).fill(0))).toHaveLength(21);
    });

    it("should count properly number of elements", () => {
        expect(countRepetition(new Array(10000).fill(0))[0]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(1))[1]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(2))[2]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(3))[3]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(4))[4]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(5))[5]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(6))[6]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(7))[7]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(8))[8]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(9))[9]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(10))[10]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(11))[11]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(12))[12]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(13))[13]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(14))[14]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(15))[15]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(16))[16]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(17))[17]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(18))[18]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(19))[19]).toBe(10000);
        expect(countRepetition(new Array(10000).fill(20))[20]).toBe(10000);
    });
        

});