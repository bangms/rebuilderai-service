import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Provider } from "./Contexts/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Provider>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
