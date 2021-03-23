import {reverseArray} from "./index.js";

it("get not array ", () => {
    const result = reverseArray("String");

    expect(result).toEqual(null);
});

it('get reverse array', () => {
    const result = reverseArray([1, 2, 3]);

    expect(result).toEqual([3, 2, 1]);
});


it('get reverse array with one num', () => {
    const result = reverseArray([1]);

    expect(result).toEqual([1]);
});