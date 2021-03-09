import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Harry Poter', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleContactsData = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const getSameName = contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    getSameName.length > 0
      ? alert(`${name} is already in contacts`)
      : this.addContact(name, number);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <div className={styles.mainBlock}>
          <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.handleContactsData} />
          </div>

          <div className={styles.contactsBlock}>
            <h1>Contacts</h1>

            <Filter
              filterValue={this.state.filter}
              onChangeFilter={this.changeFilter}
            />
            <ContactList
              contactsData={visibleContacts}
              onDelete={this.deleteContact}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
