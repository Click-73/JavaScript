import {getAdults} from "./index.js";

it('get empty object', () => {
    const result = getAdults({});

    expect(result).toEqual({});
});

it('get only one key', () => {
    const result = getAdults({ 'John Doe': 9, Tom: 7, Bob: 18 });

    expect(result).toEqual({Bob: 18});
});

it('get all keys', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 56, Bob: 18 });

    expect(result).toEqual({ 'John Doe': 19, Tom: 56, Bob: 18 });
});