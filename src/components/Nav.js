import React, { Component } from "react";
import brandLogo from "../assets/images/cat-solid.svg";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light bg-light "
          style={{ backgroundClip: "#e3f2fd" }}
        >
          <div className="container-sm">
            <Link className="navbar-brand" to="/">
              <img
                src={brandLogo}
                width="30px"
                height="30px"
                className="d-inline-block align-top"
                alt=""
              />{" "}
              Souq.cat
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-2">
                <CartIcon />
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
