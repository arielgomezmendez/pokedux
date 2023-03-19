import "./App.css";
import Searcher from "./components/Searcher/Searcher";
import { Col } from "antd";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
