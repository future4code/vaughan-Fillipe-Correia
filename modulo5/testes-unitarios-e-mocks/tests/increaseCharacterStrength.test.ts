import { increaseCharacterStrength } from "../src/functions/increaseCharacterStrength";
import { Character } from "../src/interfaces/Character";

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
