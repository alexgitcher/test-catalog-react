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
      isHitSelect: false,
      isNewSelect: false,
      isSaleSelect: false,
      isSortedByIncreasing: true,
    }

    this.updateHitSelect = this.updateHitSelect.bind(this);
    this.updateNewSelect = this.updateNewSelect.bind(this);
    this.updateSaleSelect = this.updateSaleSelect.bind(this);
    this.updateSortOrder = this.updateSortOrder.bind(this);
  }

  componentDidMount() {
    const products = ProductsMock.products;

    if (products.find(product => product.hit)) this.setState({ hit: true });

    if (products.find(product => product.new)) this.setState({ new: true });

    if (products.find(product => product.sale)) this.setState({ sale: true });
  }

  updateHitSelect() {
    this.setState(prevState => ({ isHitSelect: !prevState.isHitSelect }));
  }

  updateNewSelect() {
    this.setState(prevState => ({ isNewSelect: !prevState.isNewSelect }));
  }

  updateSaleSelect() {
    this.setState(prevState => ({ isSaleSelect: !prevState.isSaleSelect }));
  }

  updateSortOrder(selectedOption) {
    const order = selectedOption.value;

    this.setState({ isSortedByIncreasing: order === 'inc' })
  }

  render() {

    const products = ProductsMock.products.filter(product => {
      if (!this.state.isHitSelect && !this.state.isNewSelect && !this.state.isSaleSelect) {
        return product;
      }

      return (product.hit && this.state.isHitSelect) || (product.new && this.state.isNewSelect) || (product.sale && this.state.isSaleSelect);
    });

    const sortedProducts = products.slice().sort((product1, product2) => {
      return this.state.isSortedByIncreasing
        ? product1.price - product2.price
        : product2.price - product1.price;
    });

    return (
      <Catalog
        hit={this.state.hit}
        new={this.state.new}
        sale={this.state.sale}
        updateHitSelect={this.updateHitSelect}
        updateNewSelect={this.updateNewSelect}
        updateSaleSelect={this.updateSaleSelect}
        updateSortOrder={this.updateSortOrder}
      >
        {sortedProducts.map(product => (
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
