import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

ContactListItem.defaultProps = {
  name: '',
  number: '',
};

export default ContactListItem;
