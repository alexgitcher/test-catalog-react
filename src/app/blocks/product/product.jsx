import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => (
  <div className="product">
    <a className="product__link">
      <span className="product__img-container">
        <img
          className="product__img"
          src={props.imgMock}
          width="280"
          height="280"
          alt="product" />
      </span>
      {
        props.hit && <span className="product__label product__label_hit">
          <span className="product__label-text">Hit</span>
        </span>
      }
      {
        props.new && <span className="product__label product__label_new">
          <span className="product__label-text">New</span>
        </span>
      }
      {
        props.sale && <span className="product__label product__label_sale">
          <span className="product__label-text">{`-${calculateDiscount(props.price, props.oldPrice)}%`}</span>
        </span>
      }
    </a>
    <span className="product__prices">
      <span className="product__current-price">${props.price}</span>
      {
        props.sale && <span className="product__old-price">${props.oldPrice}</span>
      }
    </span>
  </div>
);

Product.propTypes = {
  children: PropTypes.node,
  hit: PropTypes.bool,
  new: PropTypes.bool,
  sale: PropTypes.bool,
  imgMock: PropTypes.string,
  price: PropTypes.string,
  oldPrice: PropTypes.string,
};

const calculateDiscount = (price, oldPrice) => Math.ceil(100 - ((price * 100) / oldPrice));

export default Product;
