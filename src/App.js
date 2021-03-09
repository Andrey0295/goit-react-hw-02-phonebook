import React, { Component } from 'react';
import shortid from 'shortid';

import Container from './components/Container/Container';
// import MainPhoneBook from './components/MainPhoneBook/MainPhoneBook';

// function App() {
//   return (
//     <>
//       <Container>
//         <div className="App">
//           <h1>Hello react</h1>
//         </div>
//         <MainPhoneBook />
//       </Container>
//     </>
//   );
// }

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = shortid.generate();

  addContact = text => {
    const contact = {
      id: shortid.generate(),
      name: text,
    };
    console.log(contact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
    this.addContact(this.state.name);
    this.setState({ name: '' });
  };

  render() {
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
            <button type="submit">Add contacts</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <ul>
            {this.state.contacts.map(({ name, id }) => (
              <li key={id}> {name}</li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
}

export default App;
