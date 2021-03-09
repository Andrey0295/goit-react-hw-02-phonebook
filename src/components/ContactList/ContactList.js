import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul>
      {contactsData.map(({ name, id, number }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          contactId={id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactsData: PropTypes.array,
};

ContactList.defaultProps = {
  contactsData: [],
};

export default ContactList;
