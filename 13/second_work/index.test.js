import getSum , {getOddNumbers, getSquaredArray} from "./calculator";

it('should odd numbers from arr', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5])

    expect(result).toEqual([1, 3, 5]);
});

it('should square of numbers from array', () => {
    const result = getSquaredArray([1, 2, 3]);

    expect(result).toEqual([1, 4, 9]);
});


it('should sum of numbers', () => {
    const result = getSum(1, 2);

    expect(result).toEqual(3);
});