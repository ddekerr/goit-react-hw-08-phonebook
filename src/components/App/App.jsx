import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Puff } from 'react-loader-spinner';
import { getContacts, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Wrapper } from './App.styled';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    return <Notification message="There is no contact" />;
  }

  return (
    <>
      <Wrapper>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {contacts.length > 0 && <ContactList contacts={contacts} />}
        </Section>
      </Wrapper>
      <ToastContainer />
    </>
  );
};
