import React, { Component } from "react";
import { ProductService } from "../../../data/ProductService";
import Product from "./Product/Product";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.productService = new ProductService();
  }

  componentDidMount() {
    this.setState({ products: this.productService.seedData() });
  }

  handleProductUpVote = (productId) => {
    console.log(productId)
  }

  render() {
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));

    console.log(typeof products);
    
    const productComponents = products.map((product) => (
      <Product
        key={"product" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return (
      <div>
        {productComponents}
      </div>
    );
  }
}
export default ProductList;
