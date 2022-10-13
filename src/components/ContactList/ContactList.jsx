import { ContactListContainer, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactListContainer>
      {contacts.map(contact => (
        <ListItem key={contact.id}>{contact.name}: {contact.number}</ListItem>
      ))}
    </ContactListContainer>
  );
};
