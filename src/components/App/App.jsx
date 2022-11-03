import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { Wrapper } from './App.styled';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';

const LOCALE_STORAGE_KEY = 'contacts';
const initialContacts =
  JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY)) ?? [];

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const addContact = newContact => {
    const isNotExist = contacts.every(
      contact => contact.name.toLowerCase() !== newContact.name.toLowerCase()
    );

    if (isNotExist) {
      const addedContact = {
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      };
      setContacts(prevContacts => prevContacts.concat(addedContact));
    } else {
      alert(`${newContact.name} is alredy in contacts.`);
    }
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const normilizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normilizeFilter)
  );

  return (
    <Wrapper>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={filterChange} />
        {contacts.length > 0 ? (
          <ContactList contacts={filteredContacts} remove={removeContact} />
        ) : (
          <Notification message="There is no contact" />
        )}
      </Section>
    </Wrapper>
  );
};
