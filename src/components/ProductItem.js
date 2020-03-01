import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="col mb-4">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="cat" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p>
                Price :{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  ${product.price}
                </span>{" "}
              </p>
              <Link
                to={"./products/" + this.props.product.id}
                className="btn btn-primary"
              >
                <i className="fa fa-info"></i>{" "}
                <span className="details">Go Details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
