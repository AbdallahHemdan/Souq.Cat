import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
