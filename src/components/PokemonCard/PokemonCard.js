import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = () => {
  return (
    <Card
      style={{ width: 250 }}
      title="Ditto"
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto"
        />
      }
    >
      <Meta description="magic, fire" />
    </Card>
  );
};

export default PokemonCard;
