import { recoverCharacters } from "../src/functions/recoverCharacters";
import { Character } from "../src/interfaces/Character";

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