import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDelete, contactId }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => onDelete(contactId)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  contactId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ContactListItem.defaultProps = {
  name: '',
  number: '',
};

export default ContactListItem;
