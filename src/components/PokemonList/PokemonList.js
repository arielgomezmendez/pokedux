import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard />
      ))}
    </div>
  );
};
PokemonList.defaultProps = {
  pokemons: Array(10).fill(""), //creates an array of 10 pisitions with empty ele ments
};
export default PokemonList;
