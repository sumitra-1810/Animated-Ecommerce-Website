import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";

import Navbar from "./Navbar";
import "../src/Css/App.css";

const App = () => {
  return (
    <>
      <section id="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Redirect to="/" />
        </Switch>
        <About />
        <Services />
      </section>
    </>
  );
};

export default App;
