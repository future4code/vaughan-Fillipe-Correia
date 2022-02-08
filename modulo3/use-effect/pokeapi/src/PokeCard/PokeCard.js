import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Pokedex = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  background-image: url("https://img.icons8.com/color/96/000000/pokedex.png");
  background-size: cover;
`;

const Pokelist = styled.div`
  font-size: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 225px;
  margin-top: 128px;
  gap: 1px;
`;

const Pokeimg = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
    margin-left: 200px;
    margin-top: 115px;
  }
`;

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState("");
  console.log("props:", props.pokemon);

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Pokedex>
      <Pokelist>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      </Pokelist>
      <Pokeimg>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </Pokeimg>
    </Pokedex>
  );
};

export default PokeCard;
