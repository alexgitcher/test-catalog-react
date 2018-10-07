import React, { Fragment } from 'react';
import Select from 'react-select';

const options = [
  { value: 'inc', label: 'Sort by Price: Low to High' },
  { value: 'dec', label: 'Sort by Price: High to Low' },
];

export default class CatalogSelect extends React.Component {
  render() {
    return (
      <Fragment>
        <Select
          className="select"
          defaultValue={options[0]}
          onChange={this.props.onChange}
          options={options}
        />
      </Fragment>
    );
  }
}
