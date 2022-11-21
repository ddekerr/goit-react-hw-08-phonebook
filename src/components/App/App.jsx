import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { Wrapper } from './App.styled';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Wrapper>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message="There is no contact" />
        )}
      </Section>
    </Wrapper>
  );
};
