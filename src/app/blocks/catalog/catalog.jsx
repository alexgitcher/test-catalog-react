import React from 'react';
import PropTypes from 'prop-types';

import CatalogFilter from './__filter';

const Catalog = (props) => (
  <div className="catalog">
    <div className="catalog__layout">
      {
        (props.hit || props.new || props.sale) && (
          <div className="catalog__top-line">
            {
              props.hit && <CatalogFilter
                filter="hit"
                onClick={props.updateHitSelect}
              />
            }
            {
              props.new && <CatalogFilter
                filter="new"
                onClick={props.updateNewSelect}
              />
            }
            {
              props.sale && <CatalogFilter
                filter="sale"
                onClick={props.updateSaleSelect}
              />
            }
          </div>
        )
      }
      <div className="catalog__content">
        {props.children}
      </div>
    </div>
  </div>
);

Catalog.propTypes = {
  children: PropTypes.node,
  hit: PropTypes.bool,
  new: PropTypes.bool,
  sale: PropTypes.bool,
};

export default Catalog;
