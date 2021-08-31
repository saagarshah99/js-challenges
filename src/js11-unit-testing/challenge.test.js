import * as challenge from "./js11";

test("greet() test", () => {
    const msg = "Hello, nice to meet you";    
    expect(challenge.greet()).toBe(msg);
});

test("sumTwoNumbers() test", () => {
    expect(challenge.sumTwoNumbers(1, 2)).toBe(3);
    expect(challenge.sumTwoNumbers(5, 2)).not.toBe(3);
});

test("checkLarger() test", () => {
    expect(challenge.checkLarger(2, 2)).toBe("Both numbers are equal");
    expect(challenge.checkLarger(5, 2)).toBe("5 is bigger than 2");
    expect(challenge.checkLarger(3, 6)).toBe("6 is bigger than 3");
});

test("filterByLength() test", () => {
    expect(challenge.filterByLength(["Matt", "Saagar", "Joaquin"])).toEqual(["Matt", "Saagar"]);
    expect(challenge.filterByLength(["Joaquin", "wegpijwgpi"])).toEqual("Sorry, no valid names supplied");
});

test("reduceNumbers() test", () => {
    expect(challenge.reduceNumbers()).toEqual();
});