import { Route, Routes } from "react-router-dom";
import { Wrap } from "./style/layoutSt";
import Header from "./components/Header";
import Main from "./components/Main";
import Ebook from "./page/Ebook";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrap>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main />
          }
        ></Route>
        <Route path="/ebook" element={<Ebook/>}></Route>
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
