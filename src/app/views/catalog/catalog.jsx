import React from 'react';

import Catalog from '../../blocks/catalog';
import Product from '../../blocks/product';

import ProductsMock from '../../products.mock.json';

export default class CatalogView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hit: false,
      new: false,
      sale: false,
    }
  }

  componentDidMount() {
    const products = ProductsMock.products;

    if (products.find(product => product.hit)) this.setState({ hit: true });

    if (products.find(product => product.new)) this.setState({ new: true });

    if (products.find(product => product.sale)) this.setState({ sale: true });
  }

  render() {
    return (
      <Catalog
        hit={this.state.hit}
        new={this.state.new}
        sale={this.state.sale}
      >
        {ProductsMock.products.map(product => (
          <Product
            key={product.id}
            hit={product.hit}
            new={product.new}
            sale={product.sale}
            price={product.price}
            oldPrice={product.oldPrice}
            imgMock="https://picsum.photos/280/280/?random"
          >
          </Product>
        ))}
      </Catalog>
    );
  }
}
