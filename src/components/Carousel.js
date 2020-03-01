import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="2000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={this.props.one} className="d-block w-100" alt="cat" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Cat for every one</h1>
              <p>Help Hemdan to get rid of all street cats.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={this.props.two} className="d-block w-100" alt="cat" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Cat for every one</h1>
              <p>Help Hemdan to get rid of all street cats.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={this.props.three} className="d-block w-100" alt="cat" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Cat for every one</h1>
              <p>Help Hemdan to get rid of all street cats.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
