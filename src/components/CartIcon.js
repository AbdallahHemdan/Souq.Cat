import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";
import { connect } from "react-redux";
class CartIcon extends Component {
  render() {
    return (
      <div className="container">
        <Link to="./cart">
          <i className="fa fa-shopping-cart cart">
            <span className="badge badge-danger remove-cart">
              {this.props.totalQuantity}
            </span>
          </i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalQuantity: state.cart.reduce(
      (total, item) => total + parseInt(item.quantity),
      0
    )
  };
};
export default connect(mapStateToProps)(CartIcon);
