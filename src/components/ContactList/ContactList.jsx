import { ContactListContainer, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, remove }) => {
  return (
    <ContactListContainer>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => remove(contact.id)}>
            Delete
          </button>
        </ListItem>
      ))}
    </ContactListContainer>
  );
};
