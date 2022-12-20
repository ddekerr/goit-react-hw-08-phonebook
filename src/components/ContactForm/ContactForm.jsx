import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Formik } from 'formik';
import {
  ContactFormContainer,
  FormField,
  Input,
  Button,
} from './ContactForm.styled';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isNotExist = contacts.every(
      contact => contact.name.toLowerCase() !== values.name.toLowerCase()
    );

    if (isNotExist) {
      dispatch(addContact(values));
      resetForm();
      return;
    }

    toast.error('Contact is exist');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ContactFormContainer autoComplete="off">
        <FormField>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormField>
        <FormField>
          <p>Phone</p>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormField>
        <Button type="submit">Add contact</Button>
      </ContactFormContainer>
    </Formik>
  );
};
