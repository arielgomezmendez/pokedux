import "./App.css";
import Searcher from "./components/Searcher/Searcher";
import { Col } from "antd";
import PokemonList from "./components/PokemonList/PokemonList";
import logo from "../src/statics/logo.svg";

function App() {
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
