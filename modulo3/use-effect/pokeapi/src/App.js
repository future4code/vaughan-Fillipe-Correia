import React from "react";
import axios from "axios";
import styled from "styled-components";
import PokeCard from "./PokeCard/PokeCard";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
        console.log(response.data.results);
        console.log(pokeList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (event) => {
    setPokemonName(event.target.value);
    console.log("evento", event.target.value);
  };

  console.log("pokemonName", pokemonName);
  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {pokemonName && <PokeCard pokemon={pokemonName} />}
    </div>
  );
};

export default App;
