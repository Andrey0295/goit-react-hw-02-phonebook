import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './Filter.module.css';

const Filter = ({ filterValue, onChangeFilter }) => {
  const filterInputId = shortid.generate();
  return (
    <>
      <label htmlFor={filterInputId}>Find contact by name</label>
      <input
        className={styles.filterInput}
        type="text"
        value={filterValue}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  filterValue: '',
};
export default Filter;
