import React, { Component } from 'react';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onInputChange}
          id={this.nameInputId}
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={this.onInputChange}
          id={this.numberInputId}
        />
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}

export default ContactForm;
