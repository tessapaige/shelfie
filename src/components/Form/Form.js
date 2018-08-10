import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgUrlInput: "",
      productNameInput: "",
      priceInput: ""
    };
    this.clearHandler = this.clearHandler.bind(this);
  }

  clearHandler() {
    this.setState({ imgUrlInput: "", productNameInput: "", priceInput: "" });
  }

  render() {
    return (
      <div>
        <p>Image URL:</p>
        <input
          value={this.state.imgUrlInput}
          placeholder="Image URL"
          onChange={e => this.setState({ imgUrlInput: e.target.value })}
          type="text"
        />
        <p>Product Name:</p>
        <input
          value={this.state.productNameInput}
          placeholder="Product Name"
          onChange={e => this.setState({ productNameInput: e.target.value })}
          type="text"
        />
        <p>Price:</p>
        <input
          value={this.state.priceInput}
          placeholder="Price"
          onChange={e => this.setState({ priceInput: e.target.value })}
          type="text"
        />
        <br />
        <button onClick={this.clearHandler}>Cancel</button>
        <button onClick={this.addItem}>Add to Inventory</button>
      </div>
    );
  }
}
