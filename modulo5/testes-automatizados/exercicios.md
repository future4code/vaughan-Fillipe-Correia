## Testes Automatizados

### Exercício 1:

a)

```typescript
export interface User {
	name: string
	balance: number
}
```

b)

```typescript
import {User} from '../models/User';

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
```

### Exercício 2:

a)

```typescript
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
```

b)

```typescript
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
```

c)

```typescript
test("Testing value greater than balance", () => {
    const user: User = {
        name: "John",
        balance: 100
    }
    const result = performPurchase(user, 150)
    expect(result).not.toBeDefined()
}
);
```

### Desafios:

### Exercício 3:

```typescript
import {
  LOCATION,
  NACIONALITY,
  User,
  Casino,
  Result,
  ResultItem,
} from "../models/Casino";

export function verifyCasinoEntry(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    }
  }
  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((user) => user.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((user) => user.name),
    },
  };
}
```

c) O return, usando um filter e um map, eu demoraria pra chegar nessa solução.

### Exercício 4:

a)

```typescript
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
```

b)

```typescript
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
```

c)

```typescript
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
```

d)

```typescript
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
```

### Exercício 5:

a) 

```typescript
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
```

b)

```typescript
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
```

c)

```typescript
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
```

d)

```typescript
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
```

