import {
  ContactListContainer,
  HeaderCell,
  Row,
  Cell,
  RemoveButton,
} from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, remove }) => {
  return (
    <ContactListContainer>
      <tr>
        <HeaderCell>Name</HeaderCell>
        <HeaderCell>Phone Number</HeaderCell>
        <HeaderCell></HeaderCell>
      </tr>
      {contacts.map(contact => (
        <Row key={contact.id}>
          <Cell>{contact.name}</Cell>
          <Cell>{contact.number}</Cell>
          <Cell>
            <RemoveButton type="button" onClick={() => remove(contact.id)}>
              Delete
            </RemoveButton>
          </Cell>
        </Row>
      ))}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  remove: PropTypes.func.isRequired,
};
