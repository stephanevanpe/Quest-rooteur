import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import History from "./history";
import Product from "./history";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/">
            {" "}
            Home{" "}
          </NavLink>
          <br />
          <NavLink
            to="/notre-histoire"
            activeStyle={{
              color: "red"
            }}
          >
            {" "}
            History{" "}
          </NavLink>
          <br />
          <NavLink to="/produit-:productNumber(\d+)"> Product</NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
            <Route path="/produit-:productNumber(\d+)" component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;