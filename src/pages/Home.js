import React, { Component } from "react";
import one from "../assets/images/111.jpg";
import two from "../assets/images/222.jpg";
import three from "../assets/images/333.jpg";
import Carousel from "../components/Carousel";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Carousel one={one} two={two} three={three} />
      </div>
    );
  }
}

export default Home;
