import { validateCharacter } from "../src/functions/validateCharacter";
import { Character } from "../src/interfaces/Character";

describe("Testando validateCharacter", () => {

test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for character with 0 life", () => {
  const result = validateCharacter({
    name: "John",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for character with 0 strenght", () => {
  const result = validateCharacter({
    name: "John",
    life: 500,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for character with 0 defense", () => {
  const result = validateCharacter({
    name: "John",
    life: 500,
    strength: 300,
    defense: 0,
  });

  expect(result).toBe(false);
});

test("Should return false for character with negative life", () => {
    const result = validateCharacter({
        name: "John",
        life: -500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
});

test("Should return true for valid character", () => {
    const result = validateCharacter({
        name: "John",
        life: 500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(true);
});

});