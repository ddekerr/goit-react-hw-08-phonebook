import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Wrapper } from './Contacts.styled';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notification = error || 'There is no contact';

  return (
    <Wrapper>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && <Puff />}
        {contacts.length > 0 && <ContactList contacts={contacts} />}
        {contacts.length === 0 && !isLoading && (
          <Notification message={notification} />
        )}
      </Section>
    </Wrapper>
  );
};

export default ContactsPage;
