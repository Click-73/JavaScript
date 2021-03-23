import getMinSuaredNumber from "./getMinSquaredNumber.js";

it('Get into func empty array',() => {
    const result = getMinSuaredNumber([]);
    
    expect(result).toEqual(null);
});

it('Get into func string',() => {
    const result = getMinSuaredNumber('');
    
    expect(result).toEqual(null);
});

it('Get min square',() => {
    const result = getMinSuaredNumber([2, 4, 5]);
    
    expect(result).toEqual(4);
});