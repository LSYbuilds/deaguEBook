import { Route, Routes } from "react-router-dom";
import { Wrap } from "./style/layoutSt";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrap>
      <Header/>
      <Main/>
      <Footer/>
    </Wrap>
  );
}

export default App;
