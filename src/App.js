import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Brewery from "./components/Brewery";

import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Brewery />
      </div>
    </Provider>
  );
}

export default App;
