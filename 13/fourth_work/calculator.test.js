import {calc} from "./calculator.js";

it('redu for not a string',() => {
    const result = calc(1 + 2)

    expect(result).toEqual(null);
})

it('redu for a +',() => {
    const result = calc('1 + 2')

    expect(result).toEqual("1 + 2 = 3");
})
it('redu for a -',() => {
    const result = calc('1 - 2')

    expect(result).toEqual("1 - 2 = -1");
})
it('redu for a *',() => {
    const result = calc('1 * 2')

    expect(result).toEqual("1 * 2 = 2");
})
it('redu for a /',() => {
    const result = calc('1 / 2')

    expect(result).toEqual("1 / 2 = 0.5");
})