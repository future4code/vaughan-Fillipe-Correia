# Exercícios:

### Exercício 1:

a)

```typescript
export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
  }
```

b)

```typescript
import {Character} from '../interfaces/Character';

export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
          input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
  };
```

### Exercício 2:

a)

```typescript
test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});
```

b)

```typescript
test("Should return false for character with 0 life", () => {
  const result = validateCharacter({
    name: "John",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});
```

c)

```typescript
test("Should return false for character with 0 strenght", () => {
  const result = validateCharacter({
    name: "John",
    life: 500,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});
```

d)

```typescript
test("Should return false for character with 0 defense", () => {
  const result = validateCharacter({
    name: "John",
    life: 500,
    strength: 300,
    defense: 0,
  });

  expect(result).toBe(false);
});
```

e)

```typescript
test("Should return false for character with negative life", () => {
    const result = validateCharacter({
        name: "John",
        life: -500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
});
```

f)

```typescript
test("Should return true for valid character", () => {
    const result = validateCharacter({
        name: "John",
        life: 500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(true);
});
```

### Exercício 3

a)

```typescript
import { validateCharacter } from "./validateCharacter";
import { Character } from "../interfaces/Character";

export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };
```

b)

```typescript
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```

c) A principal diferença entre as funções é que na segunda, com injeção de depenências, não implementamos a função de validar diretamente nela, só indicamos que existe um validador que recebe como input o Character e devolve um boleano, a mesma lógica na nossa função de validar.

### Exercício 4

a)  Deve ser criado um Mock da função performAttack, pois uma vez criados os personagens de forma válida, vamos precisar testar os casos de funcionamento da função perform attack utilizando os mocks.

b)

```typescript
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});
```

c)

```typescript
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
```

### Exercício 5

```typescript
test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
```

### Exercício 6

```typescript
describe("Testando performAttack", () => {

test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

test("Should perform attack, the defender's life will be zero", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return true;
    }
    );

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 200,
      defense: 400,
      strength: 800,
    }
    performAttack(attacker, defender, validatorMock as any);
    expect(defender.life).toEqual(0);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  }
  );

});
```

### Exercício 7:

```typescript
export const recoverCharacters = (characters: Character[]): Character[] => {
  return characters.map((character) => {
    if (character.life === 1500) {
      throw new Error("Already at max life");
    }
    if (characters.length < 2) {
      throw new Error("Not enough characters");
    }
    if (!validateCharacter(character)) {
      throw new Error("Invalid character");
    } else {
      character.life = 1500;
    }

    return character;
  });
};

```



```typescript
export const increaseCharacterStrength = ( characters: Character ): Character => {
    
    if ( characters.strength > 800 ) {
        throw new Error("Already at max strength");
    }
    if ( !validateCharacter(characters) ) {
        throw new Error("Invalid character");
    }
    characters.strength += 100;
    return characters;
}
```

### Exercício 8

```typescript
describe("Testando recoverCharacters", () => {

    test("Should recover characters", () => {
        const characters: Character[] = [
            {
                name: "Scorpion",
                life: 1400,
                strength: 300,
                defense: 500,
            },
            {
                name: "Kitana",
                life: 1400,
                strength: 300,
                defense: 500,
            },
        ];

        const recoveredCharacters = recoverCharacters(characters);

        expect(recoveredCharacters).toEqual(characters);
    }
    );

    test("Should throw error for not enough characters", () => {
        expect.assertions(2);
        
        
        const characters: Character[] = [
            {
                name: "Scorpion",
                life: 1400,
                strength: 300,
                defense: 500,
            },
        ];

        try {
            recoverCharacters(characters);
        } catch (err) {
            expect(err.message).toBe("Not enough characters");
            expect(err.name).toBe("Error");
        }
    }
    );

    test("Should throw error for already at max life", () => {
        expect.assertions(2);



        const characters: Character[] = [
            {
                name: "Scorpion",
                life: 1500,
                strength: 300,
                defense: 500,
            },
            {
                name: "Kitana",
                life: 1500,
                strength: 300,
                defense: 500,
            },
        ];

        try {
            recoverCharacters(characters);
        } catch (err) {
            expect(err.message).toBe("Already at max life");
            expect(err.name).toBe("Error");
        }
    }
    );

    test("Should throw error for invalid character", () => {
        expect.assertions(2);



        const characters: Character[] = [
            {
                name: "",
                life: 1400,
                strength: 300,
                defense: 500,
            },
            {
                name: "Kitana",
                life: 1400,
                strength: 300,
                defense: 500,
            },
        ];

        try {
            recoverCharacters(characters);
        } catch (err) {
            expect(err.message).toBe("Invalid character");
            expect(err.name).toBe("Error");
        }
    });
}
);
```

```typescript
describe("Testando increaseCharacterStrength", () => {
  test("Should increase character strength", () => {
    const character: Character = {
      name: "Scorpion",
      life: 1400,
      strength: 300,
      defense: 500,
    };

    const increasedCharacter = increaseCharacterStrength(character);

    expect(increasedCharacter.strength).toBe(400);
  });
});

```

