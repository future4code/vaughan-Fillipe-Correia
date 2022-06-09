import { performPurchase } from "../src/functions/performPurchase";
import { User } from "../src/models/User";

test("Testing balance greater than value" , () => {
    const user: User = {
        name: "John",
        balance: 100
    };
    const value: number = 50;
    const result: User = {
        name: "John",
        balance: 50
    };
    expect(performPurchase(user, value)).toEqual(result);
}
);

test("Testing value equal to balance", () => {
    const user: User = {
        name: "John",
        balance: 100
    };
    const value: number = 100;
    const result: User = {
        name: "John",
        balance: 0
    };
    expect(performPurchase(user, value)).toEqual(result);
}
);

test("Testing value greater than balance", () => {
    const user: User = {
        name: "John",
        balance: 100
    }
    const result = performPurchase(user, 150)
    expect(result).not.toBeDefined()
}
);