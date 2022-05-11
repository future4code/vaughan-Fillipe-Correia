import { Character } from "../interfaces/Character";
import { validateCharacter } from "../functions/validateCharacter";


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