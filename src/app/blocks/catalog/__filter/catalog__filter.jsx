import React from 'react';
import PropTypes from 'prop-types';

const CatalogFilter = (props) => (
  <div className="catalog__filter">
    <input
      type="checkbox"
      name={`catalog-${props.filter}`}
      id={`catalog-${props.filter}`}
      onClick={props.onClick}
    />
    <label
      htmlFor={`catalog-${props.filter}`}
      className={`catalog__filter-button catalog__filter-button_${props.filter}`}
    >
      {
        props.filter === 'hit' && 'Hit'
      }
      {
        props.filter === 'new' && 'New'
      }
      {
        props.filter === 'sale' && 'Sale'
      }
    </label>
  </div>
);

CatalogFilter.propTypes = {
  filter: PropTypes.string,
};

export default CatalogFilter;
