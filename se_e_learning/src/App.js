import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import "./styles/main.css";
import "./styles/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import SubCategoryPage from "./components/subCategoryPage";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:category" component={SubCategoryPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
