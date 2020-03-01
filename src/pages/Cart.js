import React, { Component } from "react";
import CartItem from "../components/CartItem.js";
import "./Products.css";
import { connect } from "react-redux";
import { clearCart } from "../store/actions/action";

class Cart extends Component {
  placeOrder = () => {
    // sent request to the server
    // clear the cart
    this.props.clearCart();
    alert("We recieved your order, and we are working on it.");
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center cart up-2">
          <i className="fa fa-shopping-cart cart"></i> Your Bag
        </h1>
        <div className="row row-cols-1 row-cols-md-3">
          {this.props.cartItems.map((item, index) => (
            <CartItem item={item} index={index} key={index} />
          ))}
        </div>

        <h1>
          <i className="fa fa-money blue"></i> Total money : ${this.props.total}
        </h1>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block confirm-order"
          onClick={this.placeOrder}
        >
          Pay
        </button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
