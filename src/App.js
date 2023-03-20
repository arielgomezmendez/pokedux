import "./App.css";
import Searcher from "./components/Searcher/Searcher";
import { Col } from "antd";
import PokemonList from "./components/PokemonList/PokemonList";
import logo from "../src/statics/logo.svg";
import { getPokemon } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]); //state to save the data from API

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
