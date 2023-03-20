import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="magic, fire" />
    </Card>
  );
};

export default PokemonCard;
