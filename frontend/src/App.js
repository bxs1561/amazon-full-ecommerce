import React from 'react';
import "./index.css"
import Product from "./components/Product";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
      <Router>
          <div className="grid-container">
              <header className="row">
                  <div>
                      <a className="brand" href="index.html">amazon</a>
                  </div>
                  <div>
                      <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>
                  </div>
              </header>
              <main>
                  <Route path="/cart/:id?" component={CartScreen}></Route>

                  <Route path="/product/:id" component={ProductScreen}></Route>
                  <Route path="/" component={HomeScreen} exact></Route>

              </main>
              <footer className="row center">
                  All rights reserved
              </footer>
          </div>
      </Router>
  );
}

export default App;
