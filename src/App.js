import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container/Container';

class App extends Component {
  state = {
    contacts: [
      // { name: 'Andrey', id: 'id-1', number: ' 00 - 000 - 00 - 00' },
      // { name: 'Seroga', id: 'id-2', number: '00 - 000 - 00 - 00 ' },
      // { name: 'Alekma', id: 'id-3', number: '00 - 000 - 00 - 00' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  filterInputId = shortid.generate();

  addContact = (text, number) => {
    const contact = {
      id: shortid.generate(),
      name: text,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log(name);
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.addContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
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
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor={this.nameInputId}>Имя</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onInputChange}
              id={this.nameInputId}
            />
            <label htmlFor={this.numberInputId}>Номер</label>
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.onInputChange}
              id={this.numberInputId}
            />
            <button type="submit">Add contacts</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <label htmlFor={this.filterInputId}>Поиск по имени</label>
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changeFilter}
            id={this.filterInputId}
          />
          <ul>
            {visibleContacts.map(({ name, id, number }) => (
              <li key={id}>
                {' '}
                {name}: {number}{' '}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
}

export default App;
