import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

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

  filterInputId = shortid.generate();

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

  handleData = data => {
    const { name, number } = data;
    this.addContact(name, number);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.handleData} />
        </div>
        <div>
          <h1>Contacts</h1>
          <label htmlFor={this.filterInputId}>Find contact by name</label>
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changeFilter}
            id={this.filterInputId}
          />

          <ContactList contactsData={visibleContacts} />
        </div>
      </Container>
    );
  }
}

export default App;
