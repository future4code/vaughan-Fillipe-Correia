import { LOCATION, NACIONALITY, User, Casino, Result, ResultItem } from "../src/models/Casino";
import { verifyCasinoEntry } from "../src/functions/verifyCasinoEntry";


test("Brazilian adult entering in a brazilian casino", () => {
    const user: User = {
        name: "João",
        age: 18,
        nacionality: NACIONALITY.BRAZILIAN
    };
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.BRAZIL
    };
    const result = verifyCasinoEntry(casino, [user]);
    expect(result.brazilians.allowed).toEqual(["João"]);
}
);

test("American adult entering in a brazilian casino", () => {
    const user: User = {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    };
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.BRAZIL
    };
    const result = verifyCasinoEntry(casino, [user]);
    expect(result.americans.allowed).toEqual(["John"]);
}
);

test("Two brazilians and two americans with 19 years old entering in a american casino", () => {
    const user1: User = {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    };
    const user2: User = {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    };
    const user3: User = {
        name: "John",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    };
    const user4: User = {
        name: "Jane",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    };
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.EUA
    };
    const result = verifyCasinoEntry(casino, [user1, user2, user3, user4]);
    expect(result.brazilians.unallowed).toEqual(["João", "Maria"]);
    expect(result.americans.unallowed).toEqual(["John", "Jane"]);
}
);

test("Two brazilians with 19 years old and two americans with 21 years old entering in the casino", () => {
    const user1: User = {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    };
    const user2: User = {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    };
    const user3: User = {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    };
    const user4: User = {
        name: "Jane",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    };
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.EUA
    };
    const result = verifyCasinoEntry(casino, [user1, user2, user3, user4]);
    expect(result.brazilians.unallowed).toEqual(["João", "Maria"]);
    expect(result.americans.allowed).toEqual(["John", "Jane"]);
}
);

test("Brazilian adult entering in a brazilian casino, the allowed array must be fewer than 2 and greater than 0", () => {
    const user: User = {
        name: "João",
        age: 18,
        nacionality: NACIONALITY.BRAZILIAN
    };
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.BRAZIL
    };
    const result = verifyCasinoEntry(casino, [user]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
}
);

test("American adult entering in a brazilian casino, the unallowed array must be equal to 0", () => {
    const user: User = {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.BRAZIL
    }
    const result = verifyCasinoEntry(casino, [user]);
    expect(result.americans.unallowed.length).toBe(0);
}
);

test("Two brazilians and Two americans, all of them with 19 years old, entering in an american casino, the unallowed array must contain the names of the unallowed users", () => {
    const user1: User = {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const user2: User = {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const user3: User = {
        name: "John",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const user4: User = {
        name: "Jane",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.EUA
    }
    const result = verifyCasinoEntry(casino, [user1, user2, user3, user4]);
    expect(result.brazilians.unallowed).toContain("João");
    expect(result.brazilians.unallowed).toContain("Maria");
    expect(result.americans.unallowed).toContain("John");
    expect(result.americans.unallowed).toContain("Jane");
}
);

test("Two brazilians with 19 years old, and two americans with 21 years old, the brazilians' unallowed array must be greater than 1 and the americans' unallowed array must be less than 1", () => {
    const user1: User = {
        name: "João",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const user2: User = {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const user3: User = {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const user4: User = {
        name: "Jane",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const casino: Casino = {
        name: "Casino",
        location: LOCATION.EUA
    }
    const result = verifyCasinoEntry(casino, [user1, user2, user3, user4]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
}
);