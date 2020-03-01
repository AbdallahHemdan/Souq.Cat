import React, { Component } from "react";
import { getById as getSpecificProduct } from "../api/Products";
import Loading from "../components/Loading";
import { addToChart } from "../store/actions/action";
import { connect } from "react-redux";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {},
      quantity: 0
    };
  }
  handleIncrement = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };
  handleDecrement = () => {
    this.setState({
      quantity: Math.max(this.state.quantity - 1, 0)
    });
  };
  handleReset = () => {
    this.setState({ quantity: 0 });
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    getSpecificProduct(parseInt(id))
      .then(product => {
        // setTimeout(() => this.setState({ product, loading: false }), 2000);
        this.setState({ product, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  addToCart = product => {
    this.props.addToCart(product, this.state.quantity);
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    const product = this.state.product;
    return (
      <div className="container up">
        <div className="card mb-3" style={{ minWidth: "20%" }}>
          <p style={{ textAlign: "center" }}>
            <img
              src={this.state.product.image}
              className="card-img-top"
              alt="..."
              style={{ width: "50%", height: "80%" }}
            />
          </p>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "40px" }}>
              {this.state.product.name}{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                ${this.state.product.price}
              </span>
            </h5>
            <button type="button" className="btn btn-secondary">
              Total Price{" "}
              <span className="badge badge-light">
                $ {this.state.quantity * this.state.product.price}
              </span>
            </button>

            <div className="btn-block">
              <button type="button" className="btn btn-primary">
                <span className="badge badge-light">{this.state.quantity}</span>{" "}
                ITEMS
              </button>
              <button
                type="button"
                className="btn btn-danger m-2 text-monospace font-weight-bold"
                onClick={() => this.handleIncrement()}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-danger mr-2 text-monospace font-weight-bold"
                onClick={() => this.handleDecrement()}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-danger mr-2 text-monospace font-weight-bold"
                onClick={() => this.handleReset()}
              >
                Reset
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={() => this.addToCart(product)}
              >
                Add to chart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productsInfo, quantity) =>
      dispatch(addToChart(productsInfo, quantity))
  };
};
export default connect(null, mapDispatchToProps)(Product);
