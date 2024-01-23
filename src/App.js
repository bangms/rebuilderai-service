import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Provider } from "./Contexts/index";

function App() {
  return (
    <Provider>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
