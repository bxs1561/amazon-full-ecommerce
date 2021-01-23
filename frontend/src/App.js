import React from 'react';
import "./index.css"
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import {useSelector} from "react-redux";
import SigninScreen from "./screens/SigninScreen";

function App() {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
  return (
      <Router>
          <div className="grid-container">
              <header className="row">
                  <div>
                      <Link className="brand" to="/">amazon</Link>
                  </div>
                  <div>
                      <Link to="/cart">Cart</Link>
                      {
                          cartItems.length>0&&(
                              <span className="badge">
                                  {cartItems.length}
                              </span>
                          )
                      }
                        <Link to="/signin">Sign In</Link>
                  </div>
              </header>
              <main>
                  <Route path="/cart/:id?" component={CartScreen}></Route>
                  <Route path="/signin" component={SigninScreen}></Route>
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
