import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: "",
      category: "All",
      sort: ""
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Navbar />

        <Filter
          search={this.state.search}
          category={this.state.category}
          sort={this.state.sort}
          setSearch={(value) => this.setState({ search: value })}
          setCategory={(value) => this.setState({ category: value })}
          setSort={(value) => this.setState({ sort: value })}
        />

        <ProductList
          products={this.state.products}
          search={this.state.search}
          category={this.state.category}
          sort={this.state.sort}
        />
      </>
    );
  }
}

export default App;
