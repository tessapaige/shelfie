import React, { Component } from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    let productsToDisplay = this.props.products.map((product, i) => {
      // let { imgUrl, product_id, productName, price } = product;
      return <Product key={i} product={product} />;
    });
    return (
      <div>
        <p>Dashboard</p>
        <Link to="/form">
          <button>Form</button>
        </Link>
        {productsToDisplay}
      </div>
    );
  }
}
