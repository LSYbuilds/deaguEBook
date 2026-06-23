import { Route, Routes } from "react-router-dom";
import { Wrap } from "./style/layoutSt";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Wrap>
      <Header/>
      <Main/>
    </Wrap>
  );
}

export default App;
