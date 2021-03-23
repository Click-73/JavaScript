import {withdraw} from "./index.js";

it("get '-1' no money", () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50);

    expect(result).toEqual(-1);
});

it("get '73' for second client", () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 14);

    expect(result).toEqual(73);
});

it("get '1' for first client", () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1399);

    expect(result).toEqual(1);
});