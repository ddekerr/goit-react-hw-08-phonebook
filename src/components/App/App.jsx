import { nanoid } from 'nanoid';
import { Wrapper } from './App.styled';
import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContactName => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat({
          id: nanoid(),
          name: newContactName,
        }),
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <ContactForm onSubmit={this.addContact} />
        <ContactList contacts={this.state.contacts}/>
      </Wrapper>
    );
  }
}
