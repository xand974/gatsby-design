import * as React from "react";
import "../styles/_globals.scss";
import { Provider } from "react-redux";
import { store } from "../../context/store";
import Home from "../../components/home/Home";
// markup
const IndexPage = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default IndexPage;
