import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import { HashRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [1, 2, 3, 4, 5],
      updateProducts: {
        product_id: "",
        productName: "",
        price: 0,
        imageUrl: ""
      }
    };
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Dashboard products={this.state.products} />
          <Form />
          <Header />
        </div>
      </HashRouter>
    );
  }
}

export default App;
