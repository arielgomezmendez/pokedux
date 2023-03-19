import "./App.css";
import Searcher from "./components/Searcher/Searcher";
import { Col } from "antd";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonCard />
    </div>
  );
}

export default App;
