import { Character } from "../interfaces/Character";
import { validateCharacter } from "../functions/validateCharacter";

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
