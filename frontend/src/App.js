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
import {useDispatch, useSelector} from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import {signout} from "./actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";

function App() {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();

    const signoutHandler =() =>{
        dispatch(signout())
    }
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
                      {
                          userInfo ? (
                              <div className="dropdown">
                              <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> </Link>
                                  <ul className="dropdown-content">
                                      <li>
                                          <Link to="/orderhistory">Order History</Link>
                                      </li>
                                      <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                                  </ul>
                              </div>
                          ):(
                              <Link to="/signin">Sign In</Link>
                          )
                      }
                  </div>
              </header>
              <main>
                  <Route path="/cart/:id?" component={CartScreen}></Route>
                  <Route path="/signin" component={SigninScreen}></Route>
                  <Route path="/register" component={RegisterScreen}></Route>
                  <Route path="/shipping" component={ShippingAddressScreen}></Route>
                  <Route path="/payment" component={PaymentMethodScreen}></Route>
                  <Route path="/placeorder" component={PlaceOrderScreen}></Route>


                  <Route path="/product/:id" component={ProductScreen}></Route>
                  <Route path="/order/:id" component={OrderScreen}></Route>
                  <Route path="/orderhistory" component={OrderHistoryScreen}></Route>


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
