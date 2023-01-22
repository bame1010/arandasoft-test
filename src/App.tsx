import React from "react";
import "./App.scss";
import Header from "@components/Header";
import Banner from "@components/Banner";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page3 from "@pages/Page3";
import Vegetarianos from "@pages/Vegetarianos";
import PlatosPrincipales from "@pages/PlatosPrincipales";
import Footer from "@components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Banner />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <></>
            </Route>
            <Route exact path="/vegetarianos">
              <Vegetarianos />
            </Route>
            <Route exact path="/platosprincipales">
              <PlatosPrincipales />
            </Route>
            <Route exact path="/page3">
              <Page3 />
            </Route>
            <Route exact path="*">
              <h1>404 No found</h1>
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
